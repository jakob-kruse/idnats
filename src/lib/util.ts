import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
@description This is a utility function that merges Tailwind classes with clsx. Use this to merge use provided Tailwind classes with your own classes.
@see TextInput.svelte
*/
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
