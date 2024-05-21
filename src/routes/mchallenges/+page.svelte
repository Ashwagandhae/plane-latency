<script lang="ts">
	import { mandatoryChallenges } from '$lib/data/out';
	import { completeMandatoryChallenge, state, uncompleteMandatoryChallenge } from '$lib/state';
	import Activity from '../Activity.svelte';
	import ActivityView from '../ActivityView.svelte';
</script>

<ActivityView activities={mandatoryChallenges}>
	<Activity
		let:index
		slot="activity"
		title={mandatoryChallenges[index].title}
		description={mandatoryChallenges[index].description}
		points={null}
		{index}
		selected={false}
		complete={$state?.mandatoryChallenges[index].complete ?? false}
		completeActivity={() => completeMandatoryChallenge(index)}
		uncompleteActivity={() => uncompleteMandatoryChallenge(index)}
	/>
</ActivityView>
