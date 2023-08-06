<script lang="ts">
	import { OrganizationJsonLd } from 'somerset';
	import { page } from '$app/stores';
	import '../../app.css';
	import '@fontsource/open-sans';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PreviewBanner from '$lib/components/PreviewBanner.svelte';
	import type { LayoutData } from '../$types';

	export let data: LayoutData;

	/**
	 * Only show the preview banner on the following route id's.
	 */
	const previewRouteIds = ['/(app)', '/(app)/[slug]'];

	$: ({ previewMode, previewModeEmbed: embedded } = data);
	$: showPreviewBanner = previewMode && previewRouteIds.includes($page.route.id || '');

	$: ({ logo, navigationSections, organization } = data);
</script>

<OrganizationJsonLd
	id={`${organization.url}#organization`}
	logo={organization.logo.image.fullSize}
	name={organization.name}
	contactPoints={organization.contactPoints.map((item) => {
		return {
			telephone: item?.telephone ? item.telephone : null,
			contactType: item?.contactType ? item.contactType : null,
			email: item?.email ? item.email : null,
			areaServed: ['US'],
			availableLanguage: ['English']
		};
	})}
	sameAs={organization.sameAs}
	url={organization.url}
/>

{#if showPreviewBanner}
	<PreviewBanner {embedded} />
{/if}

<Header data={{ logo, navigationSections }} />
<slot />
<Footer data={navigationSections} />

<style>
	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6) {
		font-family: 'Open Sans';
	}
</style>
