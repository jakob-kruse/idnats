import { db } from '$lib/server/db/client';
import { error, type Actions } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';
import { redirect } from 'sveltekit-flash-message/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const user = await db.getUser(Number(event.params.userId));

	if (!user) throw error(404, 'User not found.');

	return { user };
};

export const actions: Actions = {
	default: async (event) => {
		await db.deleteUser(Number(event.params.userId));
		throw redirect(
			StatusCodes.SEE_OTHER,
			'/users',
			{
				type: 'success',
				message: 'User deleted.',
			},
			event,
		);
	},
};
