<script>
	import { PortableText } from '@portabletext/svelte';
	import { Center, Stack } from '@realgoatish/svelte-every-layout';
	import Figure from '$lib/Figure.svelte';
	import Event from './Event.svelte';
	import BreadcrumbNav from '$lib/BreadcrumbNav.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	// $: console.log(`data received on page /events/[slug]: ${JSON.stringify(data, null, 2)}`);
</script>

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
						}
					}}
				/>
			</Stack>
		</Center>
	</div>
</main>

<style>
	main :global(ul) {
		list-style: disc;
	}
</style>
