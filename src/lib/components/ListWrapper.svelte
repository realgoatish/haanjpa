<script>
	export let portableText;

	$: ({ value } = portableText);

	$: ({ listItem } = value);
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
		padding-inline-start: 1.25em;
	}

	ol {
		list-style-type: decimal;
	}

	ul :global(ul),
	ol :global(ul) {
		list-style-type: circle;
		margin-inline-start: 1.25em;
	}

	ol :global(ol),
	ul :global(ol) {
		list-style-type: lower-roman;
		margin-inline-start: 1.25em;
	}
</style>
