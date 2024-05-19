<script lang="ts">
	import { challenges } from '$lib/data/challenge';
	import { completeChallenge, state, uncompleteChallenge } from '$lib/state';
	import Button from '../Button.svelte';
	import Activity from '../Activity.svelte';
	import Icon from '../Icon.svelte';
	import ActivityView from '../ActivityView.svelte';

	let selectedIndex: null | number = null;

	function randomChallenge() {
		if ($state == null) return;
		let challenges = $state.challenges;
		let nonCompletedCount = challenges.filter((challenge) => !challenge.complete).length;
		if (nonCompletedCount === 0) {
			alert('All challenges are completed!');
			return;
		}
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

<div class="top">
	<div class="bar">
		<Button on:click={randomChallenge}><Icon name="dots"></Icon>random</Button>
	</div>
	<ActivityView>
		{#each challenges as challenge, index}
			<Activity
				title={challenge.title}
				description={challenge.description}
				points={challenge.points}
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
		{/each}
	</ActivityView>
</div>

<style>
	.top {
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--pad);
	}
</style>
