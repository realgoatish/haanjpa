<script>
	import { Center, Stack } from '@realgoatish/svelte-every-layout';
	import { H } from 'tusculum';
	import { PortableText } from '@portabletext/svelte';
	import Figure from '$lib/Figure.svelte';
	import HomePageNavigation from './HomePageNavigation.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: console.log(`homePage data on the front end: ${JSON.stringify(data, null, 2)}`);
</script>

<main>
	<Center max="var(--measure)" gutters="var(--s-1)">
		<Stack space="var(--s1)">
			<PortableText
				value={data.body}
				components={{
					types: {
						figure: Figure,
						navigationReference: HomePageNavigation
					}
				}}
			/>
		</Stack>
	</Center>
</main>

<style>
	main {
		background: var(--color-primary--white);
	}

	main :global(.box) {
		filter: drop-shadow(0.5px 1px 1px hsl(var(--color-primary--white--shadow) / 0.7));
	}
</style>
