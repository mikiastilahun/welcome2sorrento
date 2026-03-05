import { env } from '$env/dynamic/public';

export function assertEnvVar<T>(value: T | undefined, name: string): T {
	if (value === undefined) {
		throw new Error(`Missing environment variable: ${name}`);
	}
	return value;
}

// Use dummy values if not configured - app will work but show empty states
export const dataset = env.PUBLIC_SANITY_STUDIO_DATASET || 'production';
export const projectId = env.PUBLIC_SANITY_STUDIO_PROJECT_ID || 'dummy-project-id';
export const apiVersion = env.PUBLIC_SANITY_STUDIO_API_VERSION || '2024-03-15';
export const studioUrl = env.PUBLIC_SANITY_STUDIO_STUDIO_URL || 'http://localhost:3333';

// Check if Sanity is properly configured
export const isSanityConfigured = !!(
	env.PUBLIC_SANITY_STUDIO_PROJECT_ID && env.PUBLIC_SANITY_STUDIO_DATASET
);
