import { db } from '$lib/server/db/client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const user = await db.getUser(Number(event.params.userId));

	if (!user) throw error(404, 'User not found.');

	return { user };
};
