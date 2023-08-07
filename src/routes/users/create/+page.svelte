<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import TextField from '$lib/ui/form/TextInput.svelte';

	export let data: PageData;

	const form = superForm(data.form);
</script>

<h1 class="text-2xl">Create User</h1>

<form method="POST">
	<TextField {form} field="name" />
	<TextField {form} field="email" />

	<div><button class="btn">Submit</button></div>
</form>

<SuperDebug data={form.form} />
