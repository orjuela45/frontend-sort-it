<script lang="ts">
	import type { CssClasses } from '@skeletonlabs/skeleton';
	import type { HTMLInputAttributes } from 'svelte/elements';

	export let customLabelClass: CssClasses = '';
	export let customInputClass: CssClasses = '';
	export let label: string = '';
	export let value: string | number;
	export let atributes: HTMLInputAttributes = {};
</script>

<label class="label {customLabelClass}">
	<span class="font-semibold">{label}</span>
	<input class="input {customInputClass}" bind:value {...atributes} {...$$restProps} />
</label>
