<script>
	import { Center, Frame, Sidebar } from '@realgoatish/svelte-every-layout';
	import Nav from './Nav.svelte';

	export let data;

	// $: console.log(`props in header component: ${JSON.stringify(data, null, 2)}`);
</script>

<header>
	<div class="screen-reader-only">
		<a href="#main">Skip to content</a>
	</div>
	<Center max="var(--measure)" gutters="var(--s-1)">
		<Sidebar sideWidth="var(--s4)" side="left" contentMin="73%">
			<div slot="first-child" class="logo-wrapper">
				<Frame>
					<img
						alt={data.logo.alt}
						srcset={`${data.logo.image.tablet} 400w, ${data.logo.image.mobile} 200w`}
						src={data.logo.image.fullSize}
						sizes="50vw"
					/>
				</Frame>
			</div>
			<div slot="last-child">
				<Nav data={data.navigationSections} />
			</div>
		</Sidebar>
	</Center>
</header>

<style>
	header {
		padding-block: var(--s0);
		background: var(--color-secondary--black);
	}

	.logo-wrapper {
		max-inline-size: clamp(25vw, 27vw, 30vw);
		margin: 0 auto;
	}
</style>
