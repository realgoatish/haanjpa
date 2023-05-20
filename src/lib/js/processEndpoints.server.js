export const processLayout = (data) => {
	// console.log(`raw data at beginning of processLayout: ${JSON.stringify(data, null, 2)}`);

	// const { description, navigationSections, title, organization, logo } = data;
	const { navigationSections, organization, logo } = data;

	const processedData = {
		organization,
		logo,
		navigationSections
	};

	return processedData;
};

export const processPage = (data) => {
	// console.log(`raw data at beginning of processPage: ${JSON.stringify(data, null, 2)}`);

	return data;
};

export const processEventPage = (data) => {
	console.log(`raw data at the beginning of processEventPage: ${JSON.stringify(data, null, 2)}`);

	return data;
};
