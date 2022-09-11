export function enhanceHeaderNav(node) {
	const button = document.createElement('button');
	button.setAttribute('aria-expanded', 'false');

	node.prepend(button);
}
