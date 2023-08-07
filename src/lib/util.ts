import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
@description This is a utility function that merges tailwind classes with clsx. Use this to merge provided tailwind classes with your own classes.
@see {@link https://www.npmjs.com/package/tailwind-merge}
@see {@link https://www.npmjs.com/package/clsx}
*/
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
