<script>
	import { H } from 'tusculum';
	import { Cluster } from 'svelte-every-layout';
	import { page } from '$app/stores';

	$: console.log(`$page: ${JSON.stringify($page?.data?.initialData?.title, null, 2)}`);
</script>

<nav aria-labelledby="breadcrumb-navigation">
	<div id="breadcrumb-navigation" class="screen-reader-only">
		<H>Breadcrumb</H>
	</div>
	<Cluster wrapperElement="ol" space="var(--s-3)">
		<li><a href="/">Home</a></li>
		<li aria-hidden="true">›</li>
		<li>{$page?.data?.initialData?.title}</li>
	</Cluster>
</nav>

<style>
	nav :global(ol) {
		list-style: none;
	}
</style>
