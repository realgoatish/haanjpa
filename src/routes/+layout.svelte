<script>
	import '../app.css';
	import '@fontsource/open-sans';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />
<slot />
<Footer />

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
