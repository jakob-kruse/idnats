import { db } from '$lib/server/db/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const users = await db.getUsers();

	return { users };
};
