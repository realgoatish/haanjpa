<script>
	import { PortableText } from '@portabletext/svelte';
	import { Center, Stack } from '@realgoatish/svelte-every-layout';
	import Figure from '$lib/Figure.svelte';
	import Event from './Event.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: console.log(`data received on page /events/[slug]: ${JSON.stringify(data, null, 2)}`);
</script>

<Center max="var(--measure)" gutters="var(--s-1)">
	<PortableText
		value={data.body}
		components={{
			types: {
				figure: Figure,
				event: Event
			}
		}}
	/>
</Center>
