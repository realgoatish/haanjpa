<script lang="ts">
	import { Stack } from '@realgoatish/svelte-every-layout';
	import { H } from 'tusculum';
	import { PortableText } from '@portabletext/svelte';
	import FlyerFigure from '$lib/FlyerFigure.svelte';
	import ListWrapper from '$lib/ListWrapper.svelte';
	import ListItemWrapper from '$lib/ListItemWrapper.svelte';

	export let portableText;

	$: ({ value } = portableText);

	// $: console.log(`portableText component values from page: ${JSON.stringify(value, null, 2)}`);

	$: parsedDate = new Date(Date.parse(value.date)).toLocaleString('en-US', {
		timeZone: 'America/New_York',
		dateStyle: 'full',
		timeStyle: 'short'
	});
</script>

<div>
	<Stack>
		<h1>{value.title}</h1>
		<H>Date/Time</H>
		<p>{parsedDate}</p>
		<H>Description</H>
		<!-- <p>{value.description}</p> -->
		<PortableText
			value={value.description}
			components={{
				types: {
					figure: FlyerFigure
				},
				list: {
					bullet: ListWrapper,
					number: ListWrapper
				},
				listItem: {
					bullet: ListItemWrapper,
					number: ListItemWrapper
				}
			}}
		/>
		{#if value.link}
			<H>Join Zoom Meeting</H>
			<p>Zoom URL: <a href={value.link}>{value.link}</a></p>
		{/if}
	</Stack>
</div>
