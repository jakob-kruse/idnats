<script lang="ts">
	import { cn } from '$lib/util';
	import { createLabel, melt } from '@melt-ui/svelte';
	import type { ClassValue } from 'clsx';
	import type { FormPathLeaves, ZodValidation } from 'sveltekit-superforms';
	import { formFieldProxy, type SuperForm } from 'sveltekit-superforms/client';
	import type { AnyZodObject, z } from 'zod';

	type T = $$Generic<AnyZodObject>;

	let className: ClassValue = '';
	export { className as class };
	export let form: SuperForm<ZodValidation<T>, unknown>;
	export let field: FormPathLeaves<z.infer<T>>;
	export let label = field;

	const { value, errors, constraints } = formFieldProxy(form, field);

	const {
		elements: { root },
	} = createLabel();
</script>

<div class="flex flex-col items-start justify-center">
	<label use:melt={$root} for="email" class="mb-0.5 font-medium" data-melt-part="root">
		<span>{label}</span>
	</label>
	<input
		name={field}
		type="text"
		aria-invalid={$errors ? 'true' : undefined}
		bind:value={$value}
		class={cn(className)}
		{...$constraints}
		{...$$restProps}
	/>
	{#if $errors}<span class="invalid">{$errors}</span>{/if}
</div>
