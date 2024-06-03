<script lang="ts">
	import Icon from './Icon.svelte';

	export let val: string;
	export let placeholder: string;
	export let width: string = '8ch';
	export let type: 'text' | 'number' = 'text';
	let inputEl: HTMLInputElement | null = null;
</script>

<div class="top" style="--width: {width}">
	<button
		on:mousedown|preventDefault={() => {}}
		on:click={() => {
			if (val == '') {
				inputEl?.focus();
			} else {
				val = '';
			}
		}}
	>
		{#if val == ''}
			<Icon name="magnifyGlass"></Icon>
		{:else}
			<Icon name="x"></Icon>
		{/if}
	</button>
	{#if type == 'text'}
		<input type="text" bind:value={val} {placeholder} bind:this={inputEl} />
	{:else}
		<input type="text" pattern="[0-9]*" bind:value={val} {placeholder} bind:this={inputEl} />
	{/if}
</div>

<style>
	.top {
		display: flex;
		align-items: center;
		background-color: var(--back-1);
		border-radius: var(--rad);
		height: calc(1rem + var(--pad) * 2);
	}
	button {
		background: transparent;
		border: none;
		color: var(--text);
		padding: var(--pad);
		border-radius: var(--rad);
	}
	button:active {
		background-color: var(--back-3);
	}
	input {
		box-sizing: border-box;
		width: 8ch;
		width: var(--width);
		padding: var(--pad);
		padding-left: 0;
		border: none;
		background: transparent;
		color: var(--text);
		box-sizing: border-box;
		height: calc(1rem + var(--pad) * 2);
	}

	input:focus {
		outline: none;
	}

	input::placeholder {
		color: var(--text-weak);
	}

	.top:has(input:hover, input:focus) {
		background-color: var(--back-2);
	}

	.top:has(input:active) {
		background-color: var(--back-3);
	}
</style>
