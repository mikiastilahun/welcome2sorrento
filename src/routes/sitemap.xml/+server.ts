import type { RequestHandler } from './$types';

const site = 'https://sorrento-fpdc5m6on-mikias-tilahun-abebes-projects.vercel.app';

// Define all your routes with their priorities and change frequencies
const pages = [
	{ url: '', priority: '1.0', changefreq: 'daily' },
	{ url: '/about', priority: '0.8', changefreq: 'monthly' },
	{ url: '/blog', priority: '0.9', changefreq: 'weekly' },
	{ url: '/contact', priority: '0.7', changefreq: 'monthly' },
	{ url: '/sorrento', priority: '1.0', changefreq: 'weekly' },
	{ url: '/sorrento/do', priority: '0.9', changefreq: 'weekly' },
	{ url: '/sorrento/eat', priority: '0.9', changefreq: 'weekly' },
	{ url: '/sorrento/stay', priority: '0.9', changefreq: 'weekly' },
	{ url: '/surrounding', priority: '0.9', changefreq: 'weekly' },
	{ url: '/surrounding/capri', priority: '0.9', changefreq: 'weekly' },
	{ url: '/surrounding/amalfi', priority: '0.9', changefreq: 'weekly' },
	{ url: '/surrounding/naples', priority: '0.8', changefreq: 'weekly' },
	{ url: '/surrounding/procida', priority: '0.8', changefreq: 'weekly' },
	{ url: '/surrounding/ischia', priority: '0.8', changefreq: 'weekly' },
	{ url: '/surrounding/salerno', priority: '0.8', changefreq: 'weekly' },
	{ url: '/privacy', priority: '0.3', changefreq: 'yearly' },
	{ url: '/terms', priority: '0.3', changefreq: 'yearly' }
];

// Add blog posts (you can make this dynamic later)
const blogPosts = [
	{ slug: 'discover-sorrento', lastmod: '2024-11-08' },
	{ slug: 'amalfi-coast-guide', lastmod: '2024-11-08' },
	{ slug: 'best-restaurants', lastmod: '2024-11-08' }
];

export const GET: RequestHandler = async () => {
	const body = sitemap(pages, blogPosts);

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

function sitemap(
	pages: Array<{ url: string; priority: string; changefreq: string }>,
	blogPosts: Array<{ slug: string; lastmod: string }>
): string {
	const today = new Date().toISOString().split('T')[0];

	return `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	xmlns:xhtml="https://www.w3.org/1999/xhtml"
	xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
	xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
${pages
	.map(
		(page) => `	<url>
		<loc>${site}${page.url}</loc>
		<lastmod>${today}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`
	)
	.join('\n')}
${blogPosts
	.map(
		(post) => `	<url>
		<loc>${site}/blog/${post.slug}</loc>
		<lastmod>${post.lastmod}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.7</priority>
	</url>`
	)
	.join('\n')}
</urlset>`;
}

