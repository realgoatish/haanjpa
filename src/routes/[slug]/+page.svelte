<script>
	import { PortableText } from '@portabletext/svelte';
	import { Center, Stack } from '@realgoatish/svelte-every-layout';
	import { Somerset, BreadcrumbJsonLd } from 'somerset';
	import { page } from '$app/stores';
	import TableOfContents from '$lib/TableOfContents.svelte';
	import HeadingWrapper from '$lib/HeadingWrapper.svelte';
	import BreadcrumbNav from '$lib/BreadcrumbNav.svelte';
	import NavigationWidget from './NavigationWidget.svelte';
	import MeetingList from './MeetingList.svelte';
	import ListWrapper from '$lib/ListWrapper.svelte';
	import ListItemWrapper from '$lib/ListItemWrapper.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const { webPageSeo } = data;
	const { openGraph } = webPageSeo;
</script>

<Somerset
	title={webPageSeo.title}
	description={webPageSeo.description}
	canonical={$page.url}
	openGraph={{
		type: 'website',
		url: $page.url,
		title: openGraph.title,
		description: openGraph.description,
		locale: 'en_US',
		siteName: openGraph.siteName,
		images: [
			{
				url: openGraph.ogImage.image.facebook,
				width: 1200,
				height: 630,
				alt: openGraph.ogImage.alt
			}
		]
	}}
/>

<BreadcrumbJsonLd
	itemListElements={[
		{
			position: 1,
			name: 'Home',
			item: `${$page.url.origin}/`
		}
	]}
/>

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
