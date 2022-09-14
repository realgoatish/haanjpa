<script>
	import { Grid, Stack } from '@realgoatish/svelte-every-layout';
	import { H, Section } from 'tusculum';

	export let portableText;

	$: ({ value } = portableText);

	$: console.log(
		`portableText value in routes/[slug]'s NavigationWidget': ${JSON.stringify(value, null, 2)}`
	);
</script>

<ul>
	{#each value.items as item}
		<li>
			<a href={item.href}>{item.text}</a>
			<p>{item.description}</p>
		</li>
	{/each}
</ul>
