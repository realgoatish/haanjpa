<script>
	import { Cluster } from '@realgoatish/svelte-every-layout';
	import { H } from 'tusculum';
	export let data;

	// $: console.log(`data in Nav component: ${JSON.stringify(data, null, 2)}`);
</script>

<nav aria-labelledby="site-nav-label">
	<h2 id="site-nav-label" class="screen-reader-only">Site</h2>
	<Cluster wrapperElement="ul" space="var(--s-2)">
		{#each data as navSection}
			<li>
				<H>
					<span>{navSection.title}</span>
				</H>
				<Cluster wrapperElement="ul">
					{#each navSection.items as item}
						<li><a href={`${item.href}`} class="nav-link">{item.text}</a></li>
					{/each}
				</Cluster>
			</li>
		{/each}
	</Cluster>
</nav>
