<script>
	import { PortableText } from '@portabletext/svelte';
	import { Center, Stack } from '@realgoatish/svelte-every-layout';
	import { Somerset, BreadcrumbJsonLd } from 'somerset';
	import { page } from '$app/stores';
	import Figure from '$lib/components/Figure.svelte';
	import Event from './Event.svelte';
	import BreadcrumbNav from '$lib/components/BreadcrumbNav.svelte';
	import ListWrapper from '$lib/components/ListWrapper.svelte';
	import ListItemWrapper from '$lib/components/ListItemWrapper.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	// $: console.log(`data on Event page: ${JSON.stringify(data, null, 2)}`);

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
				<PortableText
					value={data.body}
					components={{
						types: {
							figure: Figure,
							event: Event
						},
						list: {
							bullet: ListWrapper,
							number: ListWrapper
						},
						listItem: {
							bullet: ListItemWrapper,
							number: ListItemWrapper
						}
					}}
				/>
			</Stack>
		</Center>
	</div>
</main>