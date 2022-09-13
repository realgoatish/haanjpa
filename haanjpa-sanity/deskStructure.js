import S from '@sanity/desk-tool/structure-builder';

export default () => {
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Settings')
				.child(S.document().schemaType('siteSettings').documentId('siteSettings')),
			...S.documentTypeListItems().filter(
				(listItem) => !['siteSettings'].includes(listItem.getId())
			)
		]);
};

// put this back in sanity.json.parts if you use this again

// {
// 	"name": "part:@sanity/desk-tool/structure",
// 	"path": "./deskStructure.js"
// }
