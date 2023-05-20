export default {
	name: 'meetingList',
	type: 'document',
	title: 'Meeting List',
	fields: [
		{
			name: 'meetingListId',
			type: 'slug',
			title: 'Meeting List ID (must be unique)'
		},
		{
			name: 'title',
			type: 'string',
			title: 'Title'
		},
		{
			name: 'description',
			type: 'string',
			title: 'Short Description'
		},
		{
			name: 'items',
			type: 'array',
			title: 'Meetings',
			of: [
				{
					type: 'reference',
					name: 'meetingReference',
					to: [{ type: 'meeting' }]
				}
			]
		}
	]
};
