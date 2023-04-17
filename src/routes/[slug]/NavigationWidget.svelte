<script>
	export let portableText;

	$: ({ value } = portableText);
</script>

<ul>
	{#each value.items as item}
		<li>
			<a href={item.href}>{item.text}</a>
			<p>{item.description}</p>
		</li>
	{/each}
</ul>
