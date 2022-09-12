<script>
	export let portableText;

	$: console.log(
		`data received by CustomParagraph.svelte: ${JSON.stringify(portableText, null, 2)}`
	);
</script>

<div />

<style>
	div {
		background: var(--color-secondary);
		color: var(--color-secondary--white);
	}
</style>
