<script lang="ts">
	import { mandatoryChallenges } from '$lib/data/mandatoryChallenge';
	import { completeMandatoryChallenge, state, uncompleteMandatoryChallenge } from '$lib/state';
	import Activity from '../Activity.svelte';
	import ActivityView from '../ActivityView.svelte';
</script>

<div class="top">
	<ActivityView>
		{#each mandatoryChallenges as challenge, index}
			<Activity
				title={challenge.title}
				description={challenge.description}
				points={null}
				{index}
				selected={false}
				complete={$state?.mandatoryChallenges[index].complete ?? false}
				completeActivity={() => completeMandatoryChallenge(index)}
				uncompleteActivity={() => uncompleteMandatoryChallenge(index)}
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
