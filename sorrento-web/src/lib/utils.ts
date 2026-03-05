import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatCategory(category: string): string {
	return category
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export function formatType(type: string): string {
	if (type === 'bnb') return 'B&B';
	return formatCategory(type);
}

// Extract plain text from Sanity blockContent or plain string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toPlainText(content: any): string {
	if (!content) return '';
	if (typeof content === 'string') return content;
	if (Array.isArray(content)) {
		return content
			.filter((block) => block._type === 'block')
			.map((block) =>
				(block.children || [])
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					.map((child: any) => child.text || '')
					.join('')
			)
			.join(' ');
	}
	return '';
}

// Convert price range to numeric value for sorting
export function priceRangeToNumber(priceRange: string): number {
	const euroCount = (priceRange.match(/\u20AC/g) || []).length;
	if (euroCount > 0) return euroCount;

	// Handle dollar signs as well
	const dollarCount = (priceRange.match(/\$/g) || []).length;
	if (dollarCount > 0) return dollarCount;

	// Handle text-based price ranges
	const lowerPrice = priceRange.toLowerCase();
	if (lowerPrice.includes('free')) return 0;
	if (lowerPrice.includes('budget') || lowerPrice.includes('cheap')) return 1;
	if (lowerPrice.includes('moderate') || lowerPrice.includes('mid')) return 2;
	if (lowerPrice.includes('expensive') || lowerPrice.includes('upscale')) return 3;
	if (lowerPrice.includes('luxury') || lowerPrice.includes('premium')) return 4;

	return 2; // Default to middle
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
