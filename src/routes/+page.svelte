<script>
	import { Center, Stack } from '@realgoatish/svelte-every-layout';
	import { PortableText } from '@portabletext/svelte';
	import { Somerset } from 'somerset';
	import { page } from '$app/stores';
	import Figure from '$lib/Figure.svelte';
	import HomeNavigationWidget from './HomeNavigationWidget.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const navigation = data.body.filter((item) => item._type === 'navigationReference');

	const hero = data.body.filter((item) => item._type !== 'navigationReference');

	$: console.log(`homePage data on the front end: ${JSON.stringify(data, null, 2)}`);
	$: console.log(`$page on homePage: ${JSON.stringify($page, null, 2)}`);
</script>

<Somerset
	title={data.title}
	description={data.description}
	openGraph={{
		type: 'website',
		url: $page.url,
		title: data.title,
		description: data.description
	}}
/>

<main id="main">
	<div class="hero content-section--spacer">
		<Center max="var(--measure)" gutters="var(--s-1)">
			<Stack space="var(--s1)">
				<h1>{data.title}</h1>
				<PortableText
					value={hero}
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
					value={navigation}
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
