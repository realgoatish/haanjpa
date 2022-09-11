<script>
	import { Cluster } from '@realgoatish/svelte-every-layout';
	import { H } from 'tusculum';
	import { enhanceHeaderNav } from '$lib/js/actions';
	export let data;

	$: console.log(`data in Nav component: ${JSON.stringify(data, null, 2)}`);
</script>

<nav id="navigation">
	<Cluster wrapperElement="ul" space="var(--s-2)">
		{#each data as navSection}
			<li>
				<H>
					<a href={`/${navSection.slug}`} class="nav-link link-hover-effect">{navSection.title}</a>
				</H>
				<Cluster wrapperElement="ul">
					{#each navSection.items as item}
						<li><a href={item.href} class="nav-link link-hover-effect">{item.text}</a></li>
					{/each}
				</Cluster>
			</li>
		{/each}
	</Cluster>
</nav>
