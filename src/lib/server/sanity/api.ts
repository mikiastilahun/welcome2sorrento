import { SANITY_API_READ_TOKEN } from '$env/static/private';

// Use empty token if not configured - queries will work with public data
export const token = SANITY_API_READ_TOKEN || '';

