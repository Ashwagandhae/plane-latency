<script lang="ts">
	export let val: number;
	export let label: string | null = null;
</script>

<div>
	{#if label}
		<label
			>{label}
			<input type="number" bind:value={val} />
		</label>
	{:else}
		<input type="number" bind:value={val} />
	{/if}
</div>

<style>
	input {
		box-sizing: border-box;
		width: 8ch;
		text-align: right;
		padding: 0;
		font-size: inherit;
	}
</style>
