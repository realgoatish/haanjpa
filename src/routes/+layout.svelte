<script>
	import '../app.css';
	import '@fontsource/open-sans';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: ({ logo, navigationSections } = data);

	$: console.log(`layout data on front end: ${JSON.stringify(data, null, 2)}`);
</script>

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
