export default {
	name: 'siteSettings',
	type: 'document',
	title: 'Global Site Settings',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Site Name'
		},
		{
			name: 'description',
			type: 'string',
			title: 'Site Description'
		},
		{
			name: 'logo',
			type: 'figure'
		},
		{
			name: 'navigationSections',
			type: 'array',
			of: [
				{
					type: 'reference',
					name: 'navigationReference',
					to: [{ type: 'navigation' }]
				}
			]
		}
	]
};
