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
						<li class="card">
							<Stack>
								<H level="+1">
									<a href={item.slug} class="flex space-between homepage-link link link--arrowed">
										{item.text}
										<svg
											class="arrow-icon"
											xmlns="http://www.w3.org/2000/svg"
											width="28"
											height="28"
											viewBox="0 0 32 32"
											focusable="false"
										>
											<g
												fill="none"
												stroke="currentColor"
												stroke-width="1.5"
												stroke-linejoin="round"
												stroke-miterlimit="10"
											>
												<circle class="arrow-icon--circle" cx="16" cy="16" r="15.12" />
												<path
													class="arrow-icon--arrow"
													d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
												/>
											</g>
										</svg>
									</a>
								</H>
								<p>{item.description}</p>
							</Stack>
						</li>
					{/each}
				</Grid>
			</div>
		</Stack>
	</Section>
</div>

<style>
	.card {
		position: relative;
		border-top: 1px solid var(--color-secondary);
	}

	.card a::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}
	a {
		inline-size: 100%;
	}

	.link {
		/* color: #2175ff; */
		/* color: var(--color-secondary--white); */
		cursor: pointer;
		font-weight: 400;
	}

	/* .link:hover {
		background: none;
	} */

	.link--arrowed {
		display: inline-block;
		height: 2rem;
		line-height: 2rem;
	}
	.link--arrowed .arrow-icon {
		position: relative;
		top: -1px;
		transition: transform 0.3s ease;
		vertical-align: middle;
	}
	.link--arrowed .arrow-icon--circle {
		transition: stroke-dashoffset 0.3s ease;
		stroke-dasharray: 95;
		stroke-dashoffset: 95;
	}
	.link--arrowed:hover .arrow-icon {
		transform: translate3d(5px, 0, 0);
	}
	.link--arrowed:hover .arrow-icon--circle {
		stroke-dashoffset: 0;
	}
</style>
