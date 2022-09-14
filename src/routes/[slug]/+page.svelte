<script>
	import { PortableText } from '@portabletext/svelte';
	import { Center, Stack } from '@realgoatish/svelte-every-layout';
	import slug from 'slug';
	import TableOfContents from '$lib/TableOfContents.svelte';
	import HeadingWrapper from '$lib/HeadingWrapper.svelte';
	import BreadcrumbNav from '$lib/BreadcrumbNav.svelte';
	import NavigationWidget from './NavigationWidget.svelte';
	import MeetingList from './MeetingList.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: console.log(`data received on page from query: ${JSON.stringify(data, null, 2)}`);

	$: tocLinks = data.body.reduce((acc, cv) => {
		const container = [];
		if (cv?.style?.match(/\b(h2|h3|h4|h5|h6)\b/g)) {
			const [children] = cv.children;
			const obj = { text: children.text, href: slug(children.text) };
			container.push(obj);
			return [...acc, ...container];
		}
		return acc;
	}, []);

	$: console.log(`tocLinks found: ${JSON.stringify(tocLinks, null, 2)}`);
</script>

<main>
	<div class="content-section--spacer">
		<Center max="var(--measure)" gutters="var(--s-1)">
			<Stack>
				<BreadcrumbNav />
				<h1>{data.title}</h1>

				{#if tocLinks.length !== 0}
					<TableOfContents links={tocLinks} />
				{/if}

				<PortableText
					value={data.body}
					components={{
						types: {
							navigationReference: NavigationWidget,
							meetingReference: MeetingList
						},
						block: {
							h2: HeadingWrapper,
							h3: HeadingWrapper,
							h4: HeadingWrapper,
							h5: HeadingWrapper,
							h6: HeadingWrapper
						}
					}}
				/>
			</Stack>
		</Center>
	</div>
</main>
