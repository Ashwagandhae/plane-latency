<script lang="ts">
	import { layerClass, paletteClass, type Layer, type Palette } from '$lib/style';
	import Link from './Link.svelte';

	export let link: string | null = null;
	export let selected: boolean = false;
	export let layer: Layer = 1;
	export let palette: Palette = 'plain';
	export let disabled: boolean = false;
</script>

<Link {link}>
	<button class:selected class="{layerClass(layer)} {paletteClass(palette)}" on:click {disabled}>
		<slot></slot>
	</button>
</Link>

<style>
	button {
		box-sizing: border-box;
		padding: var(--pad);
		border-radius: var(--rad);
		background-color: var(--l-back);
		color: var(--text);
		height: calc(1rem + var(--pad) * 2);

		font-size: var(--font-size);
		border: none;
		text-align: center;
		text-decoration: none;

		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		gap: var(--pad-small);
	}
	button:hover {
		background-color: var(--l-back-hover);
	}
	button:active,
	button.selected {
		background-color: var(--l-back-active);
	}
	button:disabled {
		background-color: var(--l-back);
		color: var(--text-weak);
	}
</style>
