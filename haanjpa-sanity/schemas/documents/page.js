import { slugWithType } from '../js/createSlugs';

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
			name: 'figure',
			type: 'figure'
		},
		slugWithType(),
		{
			name: 'body',
			type: 'richText',
			title: 'Body Text'
		}
	]
};
