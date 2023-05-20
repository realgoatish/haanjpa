export default {
	name: 'seoOrganization',
	type: 'object',
	title: 'Organization SEO',
	fields: [
		{
			name: 'name',
			title: 'Name',
			description: 'Organization Name',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Description',
			description: 'Organization Description',
			type: 'string'
		},
		{
			name: 'url',
			title: 'URL',
			description: 'Organization website URL',
			type: 'url'
		},
		{
			name: 'contactPoints',
			title: 'Contact Points',
			description: 'List of Ways to Contact Organization',
			type: 'array',
			of: [
				{
					name: 'contactPoint',
					type: 'contactPoint'
				}
			]
		},
		{
			name: 'logo',
			title: 'Logo',
			description: 'Organization Logo',
			type: 'figure'
		},
		{
			name: 'sameAs',
			title: 'Same As',
			description: 'Social Media Profiles & Other Websites Representing Organization',
			type: 'urlArray'
		},
		{
			name: 'address',
			type: 'address'
		}
	]
};
