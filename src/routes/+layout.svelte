<script lang="ts">
	import { navigating } from '$app/stores';
	import FlashMessage from '$lib/ui/FlashMessage.svelte';
	import '../app.css';
</script>

{#if $navigating}
	<p class="fixed bottom-0 right-0">Loading... (fake delay of 0-500ms)</p>
{/if}

<FlashMessage />

<slot />
