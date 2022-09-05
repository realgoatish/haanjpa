<script>
	import { Center, Stack } from '@realgoatish/svelte-every-layout';
	import { H } from 'tusculum';
	import { PortableText } from '@portabletext/svelte';
	import Figure from '$lib/Figure.svelte';
	import HomePageNavigation from './HomePageNavigation.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: console.log(JSON.stringify(data, null, 2));
</script>

<main>
	<Stack space="var(--s5)">
		<Center max="var(--measure)" gutters="var(--s-1)">
			<PortableText
				value={data.pageBody}
				components={{
					types: {
						figure: Figure,
						navigation: HomePageNavigation
					}
				}}
			/>
		</Center>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</Stack>
</main>

<style>
	main {
		background: var(--color-primary--white);
	}

	main :global(.box) {
		filter: drop-shadow(0.5px 1px 1px hsl(var(--color-primary--white--shadow) / 0.7));
	}
</style>
