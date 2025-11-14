import imageUrlBuilder from '@sanity/image-url';
import type { Image } from '@sanity/types';
import { client } from './client';
import type { SanityImage } from './queries';

const builder = imageUrlBuilder(client);

// Helper function to convert SanityImage to Image type for the builder
function toImageSource(source: SanityImage | Image | null | undefined): Image | null {
	if (!source) return null;

	// If it's already in the old format with _ref
	if ('asset' in source && source.asset && '_ref' in source.asset) {
		return source as Image;
	}

	// If it's in the new format with asset.url, convert it
	if ('asset' in source && source.asset && '_id' in source.asset) {
		return {
			_type: 'image',
			asset: {
				_ref: source.asset._id,
				_type: 'reference'
			}
		} as Image;
	}

	return null;
}

export function urlFor(source: SanityImage | Image | null | undefined) {
	const imageSource = toImageSource(source);

	if (!imageSource) {
		// Return a builder with empty image that will produce empty URL
		return builder.image({
			_type: 'image',
			asset: {
				_ref: '',
				_type: 'reference'
			}
		});
	}

	return builder.image(imageSource);
}
