// TODO this is a progressive enhancement for collapsible navs & is not being used on our site
export function enhanceHeaderNav(node) {
	const button = document.createElement('button');
	button.setAttribute('aria-expanded', 'false');

	node.prepend(button);
}
