<script lang="ts">
	import { challenges } from '$lib/data/out';
	import {
		completeChallenge,
		equipChallenge,
		state,
		uncompleteChallenge,
		unequipChallenge
	} from '$lib/state';
	import Button from '../Button.svelte';
	import Activity from '../Activity.svelte';
	import Icon from '../Icon.svelte';
	import ActivityView from '../ActivityView.svelte';
	import { tick } from 'svelte';

	let selectedIndex: null | number = null;

	let clearSearch: () => void;
	let updateFilteredActivities: () => void;

	async function randomChallenge() {
		if ($state == null) return;
		let challenges = $state.challenges;
		let selectableCount = challenges.filter(
			(challenge, index) => !challenge.complete && index != selectedIndex && !challenge.equipped
		).length;
		if (selectableCount === 0) {
			if (challenges.every((challenge) => challenge.complete)) {
				alert('All challenges are completed or equipped!');
			}
			return;
		}
		clearSearch();
		await tick();
		let randomIndex = Math.floor(Math.random() * selectableCount);
		let i = 0;
		for (let j = 0; j < challenges.length; j++) {
			if (!challenges[j].complete && j != selectedIndex && !challenges[j].equipped) {
				if (i === randomIndex) {
					selectedIndex = j;
					break;
				}
				i++;
			}
		}
	}

	$: $state, updateFilteredActivities?.();
</script>

<ActivityView
	activities={challenges}
	bind:clearSearch
	bind:updateFilteredActivities
	filterEquipped={(index) => $state?.challenges[index].equipped ?? false}
>
	<Button slot="buttons" on:click={randomChallenge}><Icon name="dots"></Icon>random</Button>
	<Activity
		let:index
		slot="activity"
		title={challenges[index].title}
		description={challenges[index].description}
		points={challenges[index].points}
		{index}
		selected={selectedIndex === index}
		complete={$state?.challenges[index].complete ?? false}
		equipped={$state?.challenges[index].equipped ?? null}
		completeActivity={() => {
			completeChallenge(index);
		}}
		uncompleteActivity={() => {
			uncompleteChallenge(index);
		}}
		equipActivity={() => {
			equipChallenge(index);
		}}
		unequipActivity={() => {
			unequipChallenge(index);
		}}
	/>
</ActivityView>
