<script>
	import { Center, Frame, Sidebar } from '@realgoatish/svelte-every-layout';
	import Nav from './Nav.svelte';

	export let data;

	$: console.log(`props in header component: ${JSON.stringify(data, null, 2)}`);
</script>

<header>
	<Center max="var(--measure)" gutters="var(--s-1)">
		<Sidebar sideWidth="var(--s4)" side="left" space="var(--s2)">
			<div slot="first-child">
				<Frame>
					<img
						alt={data.logo.alt}
						srcset={`${data.logo.images.tablet} 800w, ${data.logo.images.mobile} 400w`}
						src={data.logo.images.fullSize}
						sizes="50vw"
					/>
				</Frame>
			</div>
			<Nav data={data.navigationSections} slot="last-child" />
		</Sidebar>
	</Center>
</header>

<style>
	header {
		padding-block: var(--s0);
		background: var(--color-secondary--black);
	}
</style>
