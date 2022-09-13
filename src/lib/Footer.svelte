<script>
	import { Center } from '@realgoatish/svelte-every-layout';
	import Nav from './Nav.svelte';

	export let data;
</script>

<footer class="content-section--spacer">
	<Center max="var(--measure)" gutters="var(--s-1)">
		<nav>
			<Nav {data} />
		</nav>
	</Center>
</footer>

<style>
	footer {
		background: var(--color-secondary);
	}

	footer :global(.nav-link) {
		color: var(--color-primary--white);
	}

	footer :global(.nav-link:hover),
	footer :global(.nav-link:active) {
		background: var(--color-primary--black);
	}

	footer :global(h2) {
		color: var(--color-primary--white);
	}
</style>
