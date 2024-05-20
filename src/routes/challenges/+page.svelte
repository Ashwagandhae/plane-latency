<script lang="ts">
	import { challenges } from '$lib/data/challenge';
	import { completeChallenge, state, uncompleteChallenge } from '$lib/state';
	import Button from '../Button.svelte';
	import Activity from '../Activity.svelte';
	import Icon from '../Icon.svelte';
	import ActivityView from '../ActivityView.svelte';
	import { tick } from 'svelte';

	let selectedIndex: null | number = null;

	let clearSearch: () => void;

	async function randomChallenge() {
		if ($state == null) return;
		let challenges = $state.challenges;
		let nonCompletedCount = challenges.filter((challenge) => !challenge.complete).length;
		if (nonCompletedCount === 0) {
			alert('All challenges are completed!');
			return;
		}
		clearSearch();
		await tick();
		let randomIndex = Math.floor(Math.random() * nonCompletedCount);
		let i = 0;
		for (let j = 0; j < challenges.length; j++) {
			if (!challenges[j].complete) {
				if (i === randomIndex) {
					selectedIndex = j;
					break;
				}
				i++;
			}
		}
	}
</script>

<ActivityView activities={challenges} bind:clearSearch>
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
		completeActivity={() => {
			completeChallenge(index);
		}}
		uncompleteActivity={() => {
			uncompleteChallenge(index);
		}}
	/>
</ActivityView>
