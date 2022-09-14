<script>
	import { Grid, Stack } from '@realgoatish/svelte-every-layout';
	import { H, Section } from 'tusculum';
	import Table from './Table.svelte';

	export let portableText;

	$: ({ value } = portableText);

	$: console.log(
		`portableText value in routes/[slug]'s MeetingList component': ${JSON.stringify(
			value,
			null,
			2
		)}`
	);

	$: items = value.items;

	$: tableData = {
		headers: ['Group', 'Day', 'Time', 'AM/PM', 'City', 'State', 'Address'],
		rows: items.map((item) =>
			Array.of(
				item.title,
				item.dayOfWeek,
				item.timeOfDay,
				item.morningOrNight,
				item.city,
				item.state,
				item.streetAddress
			)
		)
	};
</script>

<Table rowHeaders={false} {tableData} />
