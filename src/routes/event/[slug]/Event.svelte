<script lang="ts">
	import { Grid, Box, Stack } from '@realgoatish/svelte-every-layout';
	import { H, Section } from 'tusculum';
	export let portableText;

	$: ({ value } = portableText);

	$: console.log(`portableText component values from page: ${JSON.stringify(value, null, 2)}`);

	$: parsedDate = new Date(Date.parse(value.date)).toLocaleString('en-US', {
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
		<p>{value.description}</p>
		<H>Join Zoom Meeting</H>
		<p>Zoom URL: <a href={value.link}>{value.link}</a></p>
	</Stack>
</div>
