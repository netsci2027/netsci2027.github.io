// ─────────────────────────────────────────────
//  Site-wide switches, set at build time.
//  PUBLIC_FULL_SITE=1 (set in the deploy workflow): full site + menu.
//  PUBLIC_FULL_SITE unset or 0: landing page only, menu hidden.
// ─────────────────────────────────────────────
const full = import.meta.env.PUBLIC_FULL_SITE === '1';

/** true → only Home/Registration navigate; other links are inert. */
export const landingOnly = !full;

/** false → top menu and mobile hamburger are hidden (logo only). */
export const showMenu = full;
