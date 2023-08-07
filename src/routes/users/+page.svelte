<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-2xl">Users</h1>
<a href="/users/create" class="border" data-sveltekit-preload-data="hover">Create</a>

<hr />

<ul>
	{#each data.users as user (user.id)}
		<li>
			<a href="/users/{user.id}" class="hover:underline" data-sveltekit-preload-data="hover">
				<b>{user.name}</b>
				- {user.email}</a
			>
		</li>
	{/each}
</ul>
