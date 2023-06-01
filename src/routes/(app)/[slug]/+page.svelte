<script>
	import { PortableText } from '@portabletext/svelte';
	import { Center, Stack } from 'svelte-every-layout';
	import { Somerset, BreadcrumbJsonLd } from 'somerset';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import HeadingWrapper from '$lib/components/HeadingWrapper.svelte';
	import BreadcrumbNav from '$lib/components/BreadcrumbNav.svelte';
	import NavigationWidget from './NavigationWidget.svelte';
	import MeetingList from './MeetingList.svelte';
	import ListWrapper from '$lib/components/ListWrapper.svelte';
	import ListItemWrapper from '$lib/components/ListItemWrapper.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const { webPageSeo, organization } = data;
	const { openGraph } = webPageSeo;
</script>

<Somerset
	title={webPageSeo.title}
	description={webPageSeo.description}
	canonical={`${organization.url}${data.slug}`}
	openGraph={{
		type: 'website',
		url: `${organization.url}${data.slug}`,
		title: openGraph.title,
		description: openGraph.description,
		locale: 'en_US',
		siteName: organization.name,
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
			item: `${organization.url}/`
		}
	]}
/>

<main id="main">
	<div class="content-section--spacer">
		<Center max="var(--measure)" gutters="var(--s-1)">
			<Stack>
				<BreadcrumbNav />
				<h1>{data.title}</h1>

				{#key data.body}
					<TableOfContents body={data.body} />
				{/key}

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
