<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { HTMLFormAttributes } from 'svelte/elements';

	export let atributes: HTMLFormAttributes;
	export let enhanceConfig: SubmitFunction = () => {};
</script>

<form
	class="min-w-auto p-4 bg-surface-100-800-token rounded-container-token shadow-xl"
	use:enhance={enhanceConfig}
	{...atributes}
>
  <slot />
</form>
