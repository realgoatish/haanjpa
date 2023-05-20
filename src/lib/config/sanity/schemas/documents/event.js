export default {
	name: 'event',
	type: 'document',
	title: 'Event',
	fields: [
		{
			name: 'eventId',
			type: 'slug',
			title: 'Event ID (must be unique)'
		},
		{
			name: 'date',
			type: 'datetime',
			description: 'Choose the date and time of the event',
			title: 'Date',
			options: {
				dateFormat: 'MM-DD-YYYY',
				timeFormat: 'HH:mm a'
			}
		},
		{
			name: 'title',
			type: 'string',
			title: 'Event Name'
		},
		{
			name: 'description',
			type: 'richText'
		},
		// {
		// 	name: 'description',
		// 	type: 'string',
		// 	title: 'Short Description'
		// },
		{
			name: 'link',
			type: 'url',
			title: 'Link to Join Meeting'
		}
	]
};
