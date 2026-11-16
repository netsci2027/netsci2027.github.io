/**
 * Base-path aware internal URLs. The site is served at "/"; building internal
 * links and /public assets with u('/path') keeps them working if a base path is set.
 */
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
export const u = (path: string) => (path.startsWith('/') ? `${BASE}${path}` : path);
