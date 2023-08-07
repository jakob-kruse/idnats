import { db } from '$lib/server/db/client';
import { fail, type Actions } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';
import { redirect } from 'sveltekit-flash-message/server';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const CreateUserSchema = z.object({
	name: z.string().min(3).max(255),
	email: z.string().email().min(3).max(255),
});

export const load = async () => {
	// Server API:
	const form = await superValidate(CreateUserSchema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event.request, CreateUserSchema);

		if (!form.valid) {
			// ALWAYS return { form } in form actions.
			return fail(StatusCodes.BAD_REQUEST, { form });
		}

		await db.createUser({
			id: Math.random() * 1000,
			name: form.data.name,
			email: form.data.email,
		});

		// This could also be an error
		throw redirect(
			StatusCodes.SEE_OTHER,
			'/users',
			{
				type: 'success',
				message: 'User created.',
			},
			event,
		);
	},
};
