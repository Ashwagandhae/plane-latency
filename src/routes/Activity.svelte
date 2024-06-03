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
	export let equipped: boolean | null = null;

	export let completeActivity: (() => void) | null = null;
	export let uncompleteActivity: (() => void) | null = null;

	export let equipActivity: (() => void) | null = null;
	export let unequipActivity: (() => void) | null = null;

	$: selected, selectedChange();

	let el: HTMLDivElement | null = null;

	function selectedChange() {
		if (selected) {
			el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	}

	$: isEquipped = equipped === true;
</script>

<Card {selected} palette={isEquipped ? 'blue' : 'plain'}>
	<div class="content" class:complete bind:this={el} class:palette-blue={isEquipped}>
		<div class="topbar">
			<span class="title">
				<span class="number">{index}</span>
				<h2>{title}</h2>
			</span>
			<span class="points">
				{#if complete}
					<Button layer={2} on:click={uncompleteActivity}><Icon name="undo"></Icon>reset</Button>
				{:else if equipped === null || equipped}
					{#if points === null}
						<Button palette="green" layer={2} on:click={completeActivity}>
							done<Icon name="check"></Icon></Button
						>
					{:else if points.tag === 'number'}
						<Button
							palette={points.amount >= 0 ? 'green' : 'orange'}
							layer={2}
							on:click={completeActivity}
						>
							{points.amount >= 0 ? '+' : '-'}{Math.abs(points.amount)}<Icon name="check" />
						</Button>
					{:else}
						<p>{points.description}</p>
						<Button palette="green" layer={2} on:click={completeActivity}>
							done<Icon name="check"></Icon></Button
						>
					{/if}
					{#if equipped}
						<Button palette="blue" layer={2} on:click={unequipActivity}>
							<Icon name="x"></Icon></Button
						>
					{/if}
				{:else if equipped == false}
					<p class:nobreak={points?.tag == 'number'}>
						{#if points?.tag === 'number'}
							{points.amount >= 0 ? '+' : '-'}{Math.abs(points.amount)}
						{:else if points?.tag === 'special'}
							{points.description}
						{/if}
					</p>
					<Button palette="blue" layer={2} on:click={equipActivity}>
						<Icon name="plus"></Icon></Button
					>
				{/if}
			</span>
		</div>
		<p>{@html description}</p>
	</div>
</Card>

<style>
	h2 {
		margin: 0;
		font-size: 1.5rem;
	}
	p {
		margin: 0;
		/* break long urls */
		word-break: break-word;
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
		/* prevent line break */
	}
	.title h2 {
		color: var(--text-strong);
	}
	p.nobreak {
		white-space: nowrap;
	}
	.complete h2,
	.complete .number,
	.complete p {
		color: var(--text-weak);
	}
</style>
