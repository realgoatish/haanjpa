<script lang="ts">
	import { H } from 'tusculum';

	export let links: { text: string; href: string }[];

	$: console.log(`links prop in TableOfContents component: ${JSON.stringify(links, null, 2)}`);
</script>

<nav aria-labelledby="toc-heading">
	<H><span id="toc-heading">Contents</span></H>
	<ul>
		{#each links as link}
			<li><a href={`#${link.href}`}>{link.text}</a></li>
		{/each}
	</ul>
</nav>
