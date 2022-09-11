export default {
	name: 'page',
	type: 'document',
	title: 'Page',
	fields: [
		{
			name: 'event',
			type: 'boolean',
			title: 'Event page?',
			initialValue: false
		},
		{
			name: 'title',
			type: 'string',
			title: 'Title'
		},
		{
			name: 'description',
			type: 'string',
			title: 'Short Page Description'
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'The Page URL On The Website'
		},
		{
			name: 'body',
			type: 'richText',
			title: 'Body Text'
		}
	]
};
