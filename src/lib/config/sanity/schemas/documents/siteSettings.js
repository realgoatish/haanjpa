export default {
	name: 'siteSettings',
	type: 'document',
	title: 'Global Site Settings',
	fields: [
		{
			name: 'organization',
			title: 'Organization SEO (site-wide)',
			type: 'seoOrganization'
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
