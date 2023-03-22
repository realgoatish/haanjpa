<script>
	import { PortableText } from '@portabletext/svelte';
	import { Center, Stack } from '@realgoatish/svelte-every-layout';
	import { Somerset, BreadcrumbJsonLd } from 'somerset';
	import { page } from '$app/stores';
	import Figure from '$lib/Figure.svelte';
	import Event from './Event.svelte';
	import BreadcrumbNav from '$lib/BreadcrumbNav.svelte';
	import ListWrapper from '$lib/ListWrapper.svelte';
	import ListItemWrapper from '$lib/ListItemWrapper.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Somerset
	title={data.title}
	description={data.description}
	canonical={$page.url}
	openGraph={{
		type: 'website',
		url: $page.url,
		title: data.title,
		description: data.description,
		images: [
			{
				url: data.ogImage.image.facebook,
				width: 1200,
				height: 630,
				alt: data.ogImage.alt
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
