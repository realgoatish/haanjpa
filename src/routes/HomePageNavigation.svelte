<script>
	import { Grid, Box, Stack } from '@realgoatish/svelte-every-layout';
	import { H, Section } from 'tusculum';

	export let portableText;

	$: ({ value } = portableText);

	$: console.log(`portableText component values from page: ${JSON.stringify(value, null, 2)}`);
</script>

<div>
	<Section>
		<H>{value.title}</H>
		<Grid wrapperElement="ul" space="var(--s-1)">
			{#each value.items as item}
				<Box padding="var(--s-2)">
					<Stack>
						<H level="+1"><a href={item.slug} alt="">{item.text}</a></H>
						<p>{item.description}</p>
					</Stack>
				</Box>
			{/each}
		</Grid>
	</Section>
</div>

<style>
	div {
		padding-block-start: var(--s2);
		padding-block-end: var(--s2);
	}

	div :global(.stack) {
		/* font-size: var(--font-size-small); */
	}
</style>
