<script lang="ts">
	import { paletteClass, type Palette } from '$lib/style';

	export let selected: boolean = false;
	export let palette: Palette = 'plain';
</script>

<div class:selected class={paletteClass(palette)}>
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
