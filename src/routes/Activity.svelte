<script lang="ts">
	import type { Challenge, Points } from '$lib/challenge';
	import Button from './Button.svelte';
	import Card from './Card.svelte';
	import Icon from './Icon.svelte';

	export let title: string;
	export let description: string;
	export let points: Points | null;
	export let index: number;
	export let selected: boolean;
	export let complete: boolean;

	export let completeActivity: (() => void) | null = null;
	export let uncompleteActivity: (() => void) | null = null;

	$: selected, selectedChange();

	let el: HTMLDivElement | null = null;

	function selectedChange() {
		if (selected) {
			el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	}
</script>

<Card {selected}>
	<div class="content" class:complete bind:this={el}>
		<div class="topbar">
			<span class="title">
				<span class="number">{index}</span>
				<h2>{title}</h2>
			</span>
			<span class="points">
				{#if complete}
					<Button layer={2} on:click={uncompleteActivity}><Icon name="undo"></Icon>undo</Button>
				{:else if points === null}
					<Button palette="green" layer={2} on:click={completeActivity}>
						<Icon name="check"></Icon>
						done</Button
					>
				{:else if points.tag === 'number'}
					<Button
						palette={points.amount >= 0 ? 'green' : 'orange'}
						layer={2}
						on:click={completeActivity}
					>
						<Icon name="check" />
						{points.amount >= 0 ? '+' : '-'}{Math.abs(points.amount)} pts
					</Button>
				{:else}
					<p>points: {points.description}</p>
					<Button palette="green" layer={2} on:click={completeActivity}>
						<Icon name="check"></Icon>
						done</Button
					>
				{/if}
			</span>
		</div>
		<p>{description}</p>
	</div>
</Card>

<style>
	h2 {
		margin: 0;
	}
	p {
		margin: 0;
	}
	.topbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--pad);
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: var(--pad);
	}
	.title {
		display: flex;
		gap: var(--pad);
		align-items: center;
	}
	.points {
		display: flex;
		gap: var(--pad);
		align-items: center;
	}
	.title h2 {
		color: var(--text-strong);
	}
	.complete h2,
	.complete .number,
	.complete p {
		color: var(--text-weak);
	}
</style>
