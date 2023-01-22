<script lang="ts">
	import slug from 'slug';
	import { H } from 'tusculum';

	export let body;

	const filter = (ast, match) =>
		ast.reduce((acc, node) => {
			if (match(node)) acc.push(node);
			if (node.children) acc.push(...filter(node.children, match));
			return acc;
		}, []);

	const findHeadings = (ast) => filter(ast, (node) => /h\d/.test(node.style));

	const get = (object, path) => path.reduce((prev, curr) => prev[curr], object);
	const getObjectPath = (path) =>
		path.length === 0 ? path : ['subheadings'].concat(path.join('.subheadings.').split('.'));

	const parseOutline = (ast) => {
		const outline = { subheadings: [] };
		const headings = findHeadings(ast);
		const path = [];
		let lastLevel = 0;

		headings.forEach((heading) => {
			const level = Number(heading.style.slice(1));
			heading.subheadings = [];

			if (level < lastLevel) for (let i = lastLevel; i >= level; i--) path.pop();
			else if (level === lastLevel) path.pop();

			const prop = get(outline, getObjectPath(path));
			prop.subheadings.push(heading);
			path.push(prop.subheadings.length - 1);
			lastLevel = level;
		});

		return outline.subheadings;
	};

	const pageOutline = parseOutline(body);

	const getChildrenText = (props) =>
		props.children.map((node) => (typeof node === 'string' ? node : node.text || '')).join('');

	const TableOfContents = (props) => `
    <ol>
      ${props
				.map(
					(heading) => `
        <li>
          <a href='#${slug(getChildrenText(heading))}'>${getChildrenText(heading)}</a>
          ${(heading.subheadings.length > 0 && TableOfContents(heading.subheadings)) || ''}
        </li>
        `
				)
				.join('')}
    </ol>
  `;
</script>

{#if !!pageOutline.length}
	<nav aria-labelledby="toc-heading">
		<H><span id="toc-heading">Contents</span></H>
		{@html TableOfContents(pageOutline)}
	</nav>
{/if}

<style>
	nav :global(ul),
	nav :global(ol) {
		display: block;
		list-style: disc outside none;
		margin-block: 1em;
		padding-inline-start: 1.25em;
	}

	nav :global(ol) {
		list-style-type: decimal;
	}

	nav :global(ul ul),
	nav :global(ol ul) {
		list-style-type: circle;
		margin-inline-start: 1.25em;
	}

	nav :global(ol ol),
	nav :global(ul ol) {
		list-style-type: lower-roman;
		margin-inline-start: 1.25em;
	}

	nav :global(li) {
		display: list-item;
	}
</style>
