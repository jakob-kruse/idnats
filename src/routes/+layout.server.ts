import { loadFlash } from 'sveltekit-flash-message/server';

// Needed for sveltekit-flash-message.
// Just treat it as a normal load function.
export const load = loadFlash(async () => {
	return {};
});
