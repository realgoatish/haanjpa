import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas/schema';
import { PagePreview } from './components/PagePreview';

export default defineConfig({
	name: 'haanjpa',
  title: 'haanjpa',
  basePath: '/studio',
	projectId: '78gybhkq',
	dataset: 'haanjpa-dataset',
	plugins: [
		// deskTool({
		// 	structure: deskStructure
		// }),
    deskTool({
      // `defaultDocumentNode is responsible for adding a “Preview” tab to the document pane.
			defaultDocumentNode: (S, { schemaType }) => {
				if (schemaType === 'page') {
					return S.document().views([
						S.view.form(),
						S.view.component(PagePreview).title('Preview')
					]);
				}
				return null;
			}
    }),
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
