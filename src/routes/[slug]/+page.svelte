<script>
	import { PortableText } from '@portabletext/svelte';
	import { Center, Stack } from '@realgoatish/svelte-every-layout';
	import TableOfContents from '$lib/TableOfContents.svelte';
	import HeadingWrapper from '$lib/HeadingWrapper.svelte';
	import BreadcrumbNav from '$lib/BreadcrumbNav.svelte';
	import NavigationWidget from './NavigationWidget.svelte';
	import MeetingList from './MeetingList.svelte';
	import ListWrapper from '$lib/ListWrapper.svelte';
	import ListItemWrapper from '$lib/ListItemWrapper.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<main id="main">
	<div class="content-section--spacer">
		<Center max="var(--measure)" gutters="var(--s-1)">
			<Stack>
				<BreadcrumbNav />
				<h1>{data.title}</h1>

				<TableOfContents body={data.body} />

				<PortableText
					value={data.body}
					onMissingComponent={false}
					components={{
						types: {
							navigationReference: NavigationWidget,
							meetingReference: MeetingList
						},
						list: {
							bullet: ListWrapper,
							number: ListWrapper
						},
						listItem: {
							bullet: ListItemWrapper,
							number: ListItemWrapper
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
