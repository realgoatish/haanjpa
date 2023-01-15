<script>
	export let portableText;

	$: ({ value } = portableText);

	$: ({ listItem } = value);

	// $: console.log(`'value' in ListWrapper component: ${JSON.stringify(value, null, 2)}`);
	// $: console.log(`'listItem' in ListWrapper component: ${JSON.stringify(listItem, null, 2)}`);
</script>

{#if listItem === 'number'}
	<ol>
		<slot />
	</ol>
{:else}
	<ul>
		<slot />
	</ul>
{/if}

<style>
	ul,
	ol {
		display: block;
		list-style: disc outside none;
		margin-block: 1em;
		padding-inline-start: 15px;
	}

	ol {
		list-style-type: decimal;
	}

	ul :global(ul),
	ol :global(ul) {
		list-style-type: circle;
		margin-inline-start: 10px;
	}

	ol :global(ol),
	ul :global(ol) {
		list-style-type: lower-roman;
		margin-inline-start: 10px;
	}
</style>
