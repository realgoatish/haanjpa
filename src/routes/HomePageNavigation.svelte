<script>
	import { Grid, Box, Stack } from '@realgoatish/svelte-every-layout';
	import { H, Section } from 'tusculum';

	export let portableText;

	$: ({ value } = portableText);

	// $: console.log(`portableText component values from page: ${JSON.stringify(value, null, 2)}`);
</script>

<div>
	<Section>
		<Stack>
			<Stack space="var(--s-2)">
				<H>{value.title}</H>
				{#if value.description}
					<p>{value.description}</p>
				{/if}
			</Stack>
			<div>
				<Grid wrapperElement="ul" space="var(--s-1)">
					{#each value.items as item}
						<li>
							<Box padding="var(--s-2)">
								<Stack>
									<H level="+1"><a href={item.slug}>{item.text}</a></H>
									<p>{item.description}</p>
								</Stack>
							</Box>
						</li>
					{/each}
				</Grid>
			</div>
		</Stack>
	</Section>
</div>
