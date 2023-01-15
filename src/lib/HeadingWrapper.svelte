<script>
	import { H } from 'tusculum';
	import slug from 'slug';

	export let portableText;

	$: ({ value } = portableText);

	// $: console.log(`value in HeadingWrapper component: ${JSON.stringify(value, null, 2)}`);

	$: [children] = value.children;

	$: level = value.style.slice(-1);

	$: id = slug(children.text);

	// $: console.log(`children in HeadingWrapper component: ${JSON.stringify(children, null, 2)}`);

	// $: console.log(`id in HeadingWrapper component: ${JSON.stringify(id, null, 2)}`);
</script>

<div {id}>
	<H {level}><slot /></H>
</div>
