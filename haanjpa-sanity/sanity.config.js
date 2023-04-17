import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas/schema';

export default defineConfig({
	name: 'haanjpa',
	title: 'haanjpa',
	projectId: '78gybhkq',
	dataset: 'haanjpa-dataset',
	plugins: [
		// deskTool({
		// 	structure: deskStructure
		// }),
		deskTool(),
		visionTool()
	],
	schema: {
		types: schemaTypes
	},
	document: {
		newDocumentOptions: (prev, { creationContext }) => {
			if (creationContext.type === 'document') {
				return prev.filter((templateItem) => templateItem.templateId != 'siteSettings');
			}
			return prev;
		},
		actions: (prev, { schemaType }) => {
			if (schemaType === 'siteSettings') {
				return prev.filter(({ action }) => !['unpublish', 'delete', 'duplicate'].includes(action));
			}
			return prev;
		}
	}
});
