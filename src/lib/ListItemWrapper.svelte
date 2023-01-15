<script>
	export let portableText;

	$: ({ value } = portableText);

	// $: console.log(`"value" in ListItemWrapper component: ${JSON.stringify(value, null, 2)}`);

	// $: ({ listItem } = value);

	// console.log(`'value' in ListItemWrapper component: ${JSON.stringify(value, null, 2)}`);
	// console.log(`'listItem' in ListItemWrapper component: ${JSON.stringify(listItem, null, 2)}`);
</script>

<li>
	<slot />
</li>

<style>
	li {
		display: list-item;
	}
</style>
