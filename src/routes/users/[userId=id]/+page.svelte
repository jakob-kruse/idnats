<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<a href="/users" class="btn">Back</a>
<h1 class="text-2xl">{data.user.name}</h1>
<p>
	You can reach this user at <a href="mailto:{data.user.email}" class="italic hover:underline"
		>{data.user.email}</a
	>
</p>

<a class="btn" href="/users/{data.user.id}/delete">Delete</a>
