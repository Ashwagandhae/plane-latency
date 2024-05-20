<script lang="ts">
	export let val: number;

	$: valString = val.toString();

	let focus = false;
	export let unit: string = '';
	let inputEl: HTMLInputElement | null = null;
</script>

<div class="top" class:focus class:unit={unit != ''}>
	{#if focus}
		<input
			bind:this={inputEl}
			type="text"
			inputmode="numeric"
			pattern="([0-9]|.|-)*"
			bind:value={valString}
			on:change={() => {
				const newVal = parseFloat(valString);
				if (isNaN(newVal)) {
					valString = val.toString();
				} else {
					val = newVal;
				}
			}}
			on:input={() => {
				const newVal = parseFloat(valString);
				if (!isNaN(newVal)) {
					val = newVal;
				}
			}}
			on:blur={() => {
				focus = false;
			}}
		/>
		{unit}
	{:else}
		<button
			on:click={() => {
				focus = true;
				setTimeout(() => {
					inputEl?.focus();
				});
			}}
		>
			{Math.round(val * 10) / 10}
			{unit}
		</button>
	{/if}
</div>

<style>
	input {
		box-sizing: border-box;
		width: 8ch;
		text-align: left;
		font-size: inherit;
		padding: var(--pad);
		height: calc(1rem + var(--pad) * 2);
		white-space: nowrap;
	}
	button {
		box-sizing: border-box;
		font-size: inherit;
		background: transparent;
		border: none;
		color: var(--text);
		padding: var(--pad);
		height: calc(1rem + var(--pad) * 2);

		white-space: nowrap;
	}

	.top.focus {
		white-space: nowrap;
		height: calc(1rem + var(--pad) * 2);
	}
	.top.focus.unit {
		padding-right: var(--pad);
	}
</style>
