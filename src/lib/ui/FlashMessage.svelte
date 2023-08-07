<script lang="ts">
	import { getFlash } from 'sveltekit-flash-message/client';
	import MaterialSymbolsClose from '~icons/material-symbols/close';
	import { page } from '$app/stores';
	import { cn } from '$lib/util';

	const flash = getFlash(page);
</script>

{#if $flash}
	<div
		class={cn('flex gap-2 px-4 py-2', {
			'bg-green-500': $flash.type == 'success',
			'bg-red-500': $flash.type == 'error',
		})}
	>
		<button on:click={() => ($flash = undefined)}>
			<MaterialSymbolsClose class="h-4 w-4" />
		</button>
		{$flash.message}
	</div>
{/if}
