export default {
	name: 'navigation',
	title: 'Navigation',
	type: 'object',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title'
		},
		{
			name: 'navId',
			type: 'slug',
			title: 'Navigation Id'
		},
		{
			name: 'items',
			type: 'array',
			title: 'Navigation Items',
			of: [
				{
					type: 'navigationItem'
				}
			]
		}
	]
};
