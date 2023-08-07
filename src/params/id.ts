import type { ParamMatcher } from '@sveltejs/kit';
import { z } from 'zod';

export const match: ParamMatcher = (param) => {
	return z.coerce.number().min(1).safeParse(param).success;
};
