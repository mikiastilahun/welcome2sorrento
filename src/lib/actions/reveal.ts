/**
 * Action to reveal elements on scroll using IntersectionObserver
 */
export function reveal(node: HTMLElement, options: { threshold?: number; once?: boolean } = {}) {
	const { threshold = 0.1, once = true } = options;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('revealed');
					if (once) {
						observer.unobserve(node);
					}
				} else if (!once) {
					node.classList.remove('revealed');
				}
			});
		},
		{
			threshold,
			rootMargin: '0px 0px -50px 0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
