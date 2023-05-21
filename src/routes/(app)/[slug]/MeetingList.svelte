<script>
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
		headers: ['Day', 'Group', 'Time', 'AM/PM', 'City', 'State', 'Address'],
		rows: items.map((item) =>
			Array.of(
				item.dayOfWeek,
				item.title,
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
