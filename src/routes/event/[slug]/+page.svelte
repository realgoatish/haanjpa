<script>
	import { PortableText } from '@portabletext/svelte';
	import { Center, Stack } from '@realgoatish/svelte-every-layout';
	import Figure from '$lib/Figure.svelte';
	import Event from './Event.svelte';
	import BreadcrumbNav from '$lib/BreadcrumbNav.svelte';
	import ListWrapper from '$lib/ListWrapper.svelte';
	import ListItemWrapper from '$lib/ListItemWrapper.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<main id="main">
	<div class="content-section--spacer">
		<Center max="var(--measure)" gutters="var(--s-1)">
			<Stack>
				<BreadcrumbNav />
				<PortableText
					value={data.body}
					components={{
						types: {
							figure: Figure,
							event: Event
						},
						list: {
							bullet: ListWrapper,
							number: ListWrapper
						},
						listItem: {
							bullet: ListItemWrapper,
							number: ListItemWrapper
						}
					}}
				/>
			</Stack>
		</Center>
	</div>
</main>
