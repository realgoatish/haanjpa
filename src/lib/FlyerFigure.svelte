<script>
	import { Frame } from '@realgoatish/svelte-every-layout';

	export let portableText;

	$: ({ value } = portableText);

	// $: console.log(`portableText value in Figure.svelte: ${JSON.stringify(value, null, 2)}`);
</script>

<div>
	<Frame ratio="17:12">
		<img
			loading="lazy"
			alt={value.alt}
			srcset={`${value.image.desktop} 2400w, ${value.image.tablet} 1600w, ${value.image.mobile} 800w`}
			sizes="50vw"
			src={value.image.fullSize}
		/>
	</Frame>
</div>

<style>
	div {
		max-width: 30rem;
	}
</style>
