<script lang="ts">
	import { getFlash } from 'sveltekit-flash-message/client';
	import { page } from '$app/stores';

	const flash = getFlash(page);
</script>

{#if $flash}
	{@const bg = $flash.type == 'success' ? '#3D9970' : '#FF4136'}
	<div style:background-color={bg} class="flash">
		<button on:click={() => ($flash = undefined)}>x</button>
		{$flash.message}
	</div>
{/if}
