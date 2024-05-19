<script lang="ts">
	export let selected: boolean = false;
</script>

<div class:selected>
	<slot></slot>
</div>

<style>
	div {
		box-sizing: border-box;
		padding: var(--pad);
		border-radius: var(--rad);
		background-color: var(--back-1);
	}
	div.selected {
		background-color: var(--back-2);
		border: var(--line) solid var(--text);
		padding: calc(var(--pad) - var(--line));
	}
</style>
