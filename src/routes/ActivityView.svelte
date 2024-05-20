<script lang="ts">
	import type { Activity } from '$lib/challenge';
	import Search from './Search.svelte';
	import SideScroll from './SideScroll.svelte';

	export let activities: Activity[];

	type Search = {
		id: string;
		text: string;
	};
	let search: Search = {
		id: '',
		text: ''
	};

	function searchMatches(search: Search, activity: Activity, index: number) {
		return (
			(search.id == '' || index.toString().includes(search.id)) &&
			(search.text == '' ||
				activity.title.includes(search.text) ||
				activity.description.includes(search.text))
		);
	}

	export function clearSearch() {
		search = {
			id: '',
			text: ''
		};
	}

	$: filteredActivities = activities
		.map((activity, index): [Activity, number] => [activity, index])
		.filter(([activity, index]) => searchMatches(search, activity, index));
</script>

<div class="top">
	<SideScroll>
		<div class="bar">
			<div class="searches">
				<Search placeholder="by id" type="number" bind:val={search.id} width="6ch"></Search>
				<Search placeholder="by text" bind:val={search.text} width="8ch"></Search>
			</div>
			<slot name="buttons"></slot>
		</div>
	</SideScroll>
	<div class="contentScroll">
		<div class="content">
			{#each filteredActivities as [activity, index]}
				<slot name="activity" {index} {activity}></slot>
			{/each}
		</div>
	</div>
</div>

<style>
	.contentScroll {
		overflow: scroll;
		height: 100%;
	}
	.content {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--pad);
		padding-bottom: 50vh;
	}
	.top {
		height: 100%;
		display: grid;
		grid-template-rows: calc(1rem + var(--pad) * 2) 1fr;
		gap: var(--pad);
	}
	.searches {
		display: flex;
		align-items: center;
		gap: var(--pad);
	}
	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--pad);
	}
</style>
