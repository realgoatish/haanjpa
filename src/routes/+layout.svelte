<script>
	import '../app.css';
	import '@fontsource/open-sans';
	import { OrganizationJsonLd } from 'somerset';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: ({ logo, navigationSections, organization } = data);

	// $: console.log(`layout data on front end: ${JSON.stringify(data, null, 2)}`);
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
