<script lang="ts">
	import { state } from '$lib/state';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import Number from './Number.svelte';

	export let val: number;

	let add: number = 0;

	$: addPalette = add > 0 ? 'green' : add < 0 ? 'orange' : 'plain';

	function addPoints() {
		if ($state == null) return;
		$state.points += add;
		add = 0;
	}
</script>

<div class="bar">
	<div class="wrap">
		<Number bind:val unit="pts"></Number>
	</div>
	<Icon name="plus"></Icon>
	<div class="wrap palette-{addPalette}">
		<Number bind:val={add}></Number>
	</div>
	<Button disabled={add == 0} on:click={addPoints}><Icon name="equals"></Icon></Button>
</div>

<style>
	.bar {
		display: flex;
		gap: var(--pad);
		align-items: center;
	}
	.wrap {
		background: var(--back-1);
		border-radius: var(--rad);
	}
</style>
