<script>
	export let data;

	$: console.log(`data on /[slug] frontend: ${JSON.stringify(data, null, 2)}`);
</script>
