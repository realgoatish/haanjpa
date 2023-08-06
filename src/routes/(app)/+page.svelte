<script lang="ts">
	import { Center, Stack } from 'svelte-every-layout';
	import { PortableText } from '@portabletext/svelte';
	import { Somerset } from 'somerset';
	import Figure from '$lib/components/Figure.svelte';
	import HomeNavigationWidget from './HomeNavigationWidget.svelte';
	import type { PageData } from './$types';
	import { previewSubscription } from '$lib/config/sanity';
	import { homePagePreviewQuery } from '$lib/config/sanity/queries';

	export let data: PageData;

	// $: console.log(`first data on page: ${JSON.stringify(data, null, 2)}`);

	$: ({ initialData, previewMode, slug, organization } = data);

	$: test = previewSubscription(homePagePreviewQuery, {
		params: { slug },
		initialData,
		enabled: previewMode && !!slug
	});

	// $: console.log(`test data on page: ${JSON.stringify(test, null, 2)}`);

	$: pageData = test?.data || data;

	$: ({ webPageSeo } = initialData);

	$: ({ openGraph } = webPageSeo);

	// $: console.log(`pageData: ${JSON.stringify(pageData, null, 2)}`);

	// $: navigation = pageData?.body?.filter(
	// 	(item) => item._type === 'navigationReference'
	// );

	// $: hero = pageData?.body?.filter((item) => item._type !== 'navigationReference');

	// const navigation = data.body.filter((item) => item._type === 'navigationReference');

	// const hero = data.body.filter((item) => item._type !== 'navigationReference');

	// const { webPageSeo, organization } = data;
	// const { openGraph } = webPageSeo;
</script>

{#if !previewMode}
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
{/if}

<main id="main">
	<div class="hero content-section--spacer">
		<Center max="var(--measure)" gutters="var(--s-1)">
			<Stack space="var(--s1)">
				<!-- <h1>{data.title}</h1> -->
				<h1>{$pageData.title}</h1>
				<PortableText
					value={$pageData.body.filter((item) => item._type !== 'navigationReference')}
					components={{
						types: {
							figure: Figure
						}
					}}
				/>
			</Stack>
		</Center>
	</div>
	<div class="navigation content-section--spacer">
		<Center max="var(--measure)" gutters="var(--s-1)">
			<Stack space="var(--s1)">
				<PortableText
					value={$pageData.body.filter((item) => item._type === 'navigationReference')}
					components={{
						types: {
							figure: Figure,
							navigationReference: HomeNavigationWidget
						}
					}}
				/>
			</Stack>
		</Center>
	</div>
</main>

<style>
	main .hero {
		background: var(--color-secondary);
		color: var(--color-primary--white);
	}

	main .navigation {
		background: var(--color-secondary--black);
		color: var(--color-primary--white);
	}

	main :global(h1) {
		font-size: var(--font-size-biggish);
	}
</style>
