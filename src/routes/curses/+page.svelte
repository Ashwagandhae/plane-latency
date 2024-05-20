<script lang="ts">
	import { curses } from '$lib/data/curse';
	import { buyCurse } from '$lib/state';
	import Activity from '../Activity.svelte';
	import ActivityView from '../ActivityView.svelte';
</script>

<ActivityView activities={curses}>
	<Activity
		let:index
		slot="activity"
		title={curses[index].title}
		description={curses[index].description}
		points={{ tag: 'number', amount: -1 * curses[index].cost }}
		{index}
		selected={false}
		complete={false}
		completeActivity={() => {
			buyCurse(index);
		}}
	/>
</ActivityView>
