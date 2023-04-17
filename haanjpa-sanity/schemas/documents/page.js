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
			name: 'webPageSeo',
			title: 'Page SEO Data',
			description:
				'Data about this page for search results and thumbnail presentation when you share links to the page on e.g. social media. This data does not effect anything visible on the page',
			type: 'seoPage'
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
		slugWithType(),
		{
			name: 'body',
			type: 'richText',
			title: 'Body Text'
		}
	]
};
