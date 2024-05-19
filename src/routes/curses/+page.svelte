<script lang="ts">
	import { curses } from '$lib/data/curse';
	import { buyCurse } from '$lib/state';
	import Activity from '../Activity.svelte';
	import ActivityView from '../ActivityView.svelte';
</script>

<div class="top">
	<ActivityView>
		{#each curses as curse, index}
			<Activity
				title={curse.title}
				description={curse.description}
				points={{ tag: 'number', amount: -1 * curse.cost }}
				{index}
				selected={false}
				complete={false}
				completeActivity={() => {
					buyCurse(index);
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
