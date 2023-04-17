export default {
	name: 'contactPoint',
	type: 'object',
	title: 'Organization Contact Point',
	fields: [
		{
			name: 'telephone',
			title: 'Telephone',
			type: 'string',
			validation: (Rule) =>
				Rule.required()
					.regex(/^\+\d{11}$/)
					.error(
						`Phone number must start with '+1' and include area code, with no spaces or non-digit characters`
					)
		},
		{
			name: 'contactType',
			title: 'Contact Type',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'email',
			title: 'Email',
			type: 'string',
			validation: (Rule) =>
				Rule.custom((name) => {
					if (typeof name === 'undefined') {
						return true;
					}

					return name.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
						? true
						: 'Please enter a valid email address';
				}).warning()
		}
	]
};
