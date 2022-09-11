export default {
	name: 'richText',
	type: 'array',
	of: [
		{
			type: 'block'
		},
		{
			type: 'figure'
		},
		{
			type: 'reference',
			name: 'navigationReference',
			to: [{ type: 'navigation' }]
		},
		{
			type: 'reference',
			name: 'eventReference',
			to: [{ type: 'event' }]
		}
	]
};
