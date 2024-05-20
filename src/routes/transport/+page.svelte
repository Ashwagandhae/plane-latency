<script lang="ts">
	import { transports } from '$lib/data/transport';
	import { payTransportCost, state } from '$lib/state';
	import Button from '../Button.svelte';
	import MutNumber from '../MutNumber.svelte';

	let distanceString = '';
	let costString = '';

	function onDistanceChange() {
		let distance = parseFloat(distanceString);
		if (isNaN(distance)) return;
		let cost = distance * transports[selectedTransport];
		costString = cost.toString();
	}

	$: selectedTransport, onDistanceChange();

	let selectedTransport: string = 'walk';

	function pay() {
		let cost = parseFloat(costString);
		if (isNaN(cost)) {
			alert('Invalid cost');
			return;
		}
		payTransportCost(cost);
	}
</script>

<div class="top">
	<div class="distance">
		<input
			type="text"
			inputmode="numeric"
			pattern="([0-9]|.)*"
			bind:value={distanceString}
			on:input={onDistanceChange}
			placeholder="distance"
		/> miles
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
	<div class="cost">
		<input
			type="text"
			inputmode="numeric"
			pattern="([0-9]|.)*"
			bind:value={costString}
			placeholder="cost"
		/> pts
	</div>
	<Button palette="orange" disabled={costString == ''} on:click={pay}>pay</Button>
</div>

<style>
	.top {
		display: flex;
		flex-direction: column;
		gap: var(--pad);
	}
	.distance,
	.cost {
		font-size: 1.5rem;
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
