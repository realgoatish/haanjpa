<script>
	import { page } from '$app/stores';
	import { H } from 'tusculum';
	import { Cluster } from '@realgoatish/svelte-every-layout';

	$: console.log(`$page: ${JSON.stringify($page, null, 2)}`);
</script>

<nav aria-labelledby="breadcrumb-navigation">
	<div id="breadcrumb-navigation" class="screen-reader-only">
		<H>Breadcrumb</H>
	</div>
	<Cluster wrapperElement="ol" space="var(--s-3)">
		<li><a href="/">Home</a></li>
		<li aria-hidden="true">›</li>
		<li>{$page.data.title}</li>
	</Cluster>
</nav>

<style>
	nav :global(ol) {
		list-style: none;
	}
</style>
