export default {
	name: 'link',
	type: 'object',
	title: 'Link',
	fields: [
		{
			title: 'Internal Link',
			name: 'internalLink',
			description: 'Select pages for navigation',
			type: 'reference',
			to: [{ type: 'page' }]
		},
		{
			title: 'On-Page Link',
			name: 'onPageLink',
			description: 'Link To A Section Of This Page',
			type: 'string',
			validation: (Rule) =>
				Rule.custom((item) => {
					if (typeof item === 'undefined') {
						return true;
					}

					return item.startsWith('#') ? true : 'On-page links must begin with a "#"';
				})
		},
		{
			name: 'externalUrl',
			title: 'External URL',
			description: 'Use fully qualified URLs for external link',
			type: 'url'
		}
	]
};
