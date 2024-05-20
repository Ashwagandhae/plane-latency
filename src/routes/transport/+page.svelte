<script lang="ts">
	import { transports } from '$lib/data/transport';
	import { payTransportCost, state } from '$lib/state';
	import Button from '../Button.svelte';
	import Icon from '../Icon.svelte';
	import MutNumber from '../Points.svelte';

	let inString = '';
	let out: number | null = null;

	let direction: 'distanceToPoints' | 'pointsToDistance' = 'distanceToPoints';

	function updateOut() {
		let inVal = parseFloat(inString);
		if (isNaN(inVal)) return;
		if (direction == 'distanceToPoints') {
			out = inVal * transports[selectedTransport];
		} else {
			out = inVal / transports[selectedTransport];
		}
	}

	$: inString, selectedTransport, direction, updateOut();

	let selectedTransport: string = 'walk';

	function getCost() {
		let cost: number | null;
		if (direction == 'distanceToPoints') {
			cost = out;
		} else {
			cost = parseFloat(inString);
		}
		return cost;
	}
	function pay() {
		let cost = getCost();
		if (cost == null || isNaN(cost)) {
			alert('Invalid cost');
			return;
		}
		payTransportCost(cost);
	}
</script>

<div class="top">
	<div class="upper">
		<div class="in">
			<input
				type="text"
				inputmode="numeric"
				pattern="([0-9]|.)*"
				bind:value={inString}
				placeholder={direction == 'distanceToPoints' ? 'distance' : 'amount'}
			/>
			{direction == 'distanceToPoints' ? 'miles' : 'pts'}
		</div>
		<Button
			on:click={() => {
				direction = direction == 'distanceToPoints' ? 'pointsToDistance' : 'distanceToPoints';
			}}><Icon name="upDownArrow"></Icon></Button
		>
	</div>
	<div class="transportTypes">
		{#each Object.keys(transports) as transport}
			<Button
				layer={0}
				selected={transport == selectedTransport}
				on:click={() => {
					selectedTransport = transport;
				}}>{transport}</Button
			>
		{/each}
	</div>
	<div class="out">
		{out == null ? 'unknown' : Math.round(out * 1000) / 1000}
		{direction == 'distanceToPoints' ? 'pts' : 'miles'}
	</div>
	<Button palette="orange" on:click={pay}>pay</Button>
</div>

<style>
	.top {
		display: flex;
		flex-direction: column;
		gap: var(--pad);
	}
	.upper {
		display: flex;
		flex-direction: row;
		gap: var(--pad);
		align-items: center;
	}
	.in,
	.out {
		font-size: 1.5rem;
	}
	.out {
		padding: var(--pad);
	}
	.transportTypes {
		display: flex;
		gap: var(--pad);
	}
	input {
		box-sizing: border-box;
		width: 8ch;
		padding: var(--pad);
		font-size: inherit;
	}
</style>
