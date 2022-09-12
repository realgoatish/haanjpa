<script>
	import { Center, Stack } from '@realgoatish/svelte-every-layout';
	import { H } from 'tusculum';
	import { PortableText } from '@portabletext/svelte';
	import Figure from '$lib/Figure.svelte';
	import CustomParagraph from '$lib/CustomParagraph.svelte';
	import HomePageNavigation from './HomePageNavigation.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const navigation = data.body.filter((item) => item._type === 'navigationReference');

	const hero = data.body.filter((item) => item._type !== 'navigationReference');

	$: console.log(`homePage data on the front end: ${JSON.stringify(data, null, 2)}`);
</script>

<main>
	<div class="hero content-section--spacer">
		<Center max="var(--measure)" gutters="var(--s-1)">
			<Stack space="var(--s1)">
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
							navigationReference: HomePageNavigation
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

	/* main :global(.box) {
		filter: drop-shadow(0.5px 1px 1px hsl(var(--color-primary--white--shadow) / 0.7));
	} */
</style>
