<script lang="ts">
	import { Stack } from '@realgoatish/svelte-every-layout';
	import { H } from 'tusculum';
	import { PortableText } from '@portabletext/svelte';
	import FlyerFigure from '$lib/FlyerFigure.svelte';

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
				}
			}}
		/>
		{#if value.link}
			<H>Join Zoom Meeting</H>
			<p>Zoom URL: <a href={value.link}>{value.link}</a></p>
		{/if}
	</Stack>
</div>
