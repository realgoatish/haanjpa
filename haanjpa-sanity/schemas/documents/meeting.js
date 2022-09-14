export default {
	name: 'meeting',
	type: 'document',
	title: 'Meeting',
	fields: [
		{
			name: 'meetingId',
			type: 'slug',
			title: 'Meeting ID (must be unique)'
		},
		{
			name: 'title',
			type: 'string',
			title: 'Group Name'
		},
		{
			name: 'streetAddress',
			type: 'string',
			title: 'Street Address'
		},
		{
			name: 'city',
			type: 'string',
			title: 'City'
		},
		{
			name: 'state',
			type: 'state'
		},
		{
			name: 'dayOfWeek',
			type: 'dayOfWeek'
		},
		{
			name: 'timeOfDay',
			type: 'timeOfDay'
		},
		{
			name: 'morningOrNight',
			type: 'morningOrNight'
		}
	]
};
