<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<p>Are you sure you want to delete <b>{data.user.name}</b></p>

<form method="POST" class="flex gap-2">
	<button class="btn" type="submit">Yes</button>

	<a class="btn" href="/users/{data.user.id}">I changed my mind</a>
</form>
