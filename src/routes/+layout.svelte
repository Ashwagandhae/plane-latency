<script lang="ts">
	import Card from './Card.svelte';
	import { onMount } from 'svelte';
	import { initFromStored, initState, state } from '$lib/state';

	import './global.css';
	import Points from './Points.svelte';
	import Button from './Button.svelte';
	import { page } from '$app/stores';
	import { dev } from '$app/environment';
	import Icon from './Icon.svelte';
	import SideScroll from './SideScroll.svelte';

	onMount(() => {
		const theme = localStorage.getItem('theme');
		if (theme) {
			if (theme == 'dark') {
				document.documentElement.classList.add('dark');
			}
		} else {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
			}
		}
		$state = initFromStored();
	});

	function toggleTheme() {
		if (document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
	}
	function reset() {
		if (dev || (confirm('Are you sure you want to reset?') && confirm('Are you really sure?'))) {
			$state = null;
			$state = initState();
			localStorage.setItem('state', JSON.stringify($state));
		}
	}
	// const tabs = ['rules', 'mchallenges', 'challenges', 'curses', 'transport'];
	const tabs = ['rules', 'challenges', 'curses', 'transport'];
</script>

<main>
	<SideScroll>
		<div class="bar">
			{#if $state != null}
				<Points bind:val={$state.points}></Points>
				<div class="buttons">
					<Button on:click={reset}><Icon name="arrowRoundLeft"></Icon></Button>
					<Button on:click={toggleTheme}><Icon name="rainbow" /></Button>
				</div>
			{/if}
		</div>
	</SideScroll>
	<div class="main"><slot></slot></div>
	<SideScroll>
		<div class="tabs">
			{#each tabs as tab}
				<Button link="./{tab}" layer={0} selected={$page.url.pathname == `/${tab}`}>{tab}</Button>
			{/each}
		</div>
	</SideScroll>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		width: 100dvw;
		height: 100dvh;
		padding: var(--pad);
		background-color: var(--back-0);
		box-sizing: border-box;

		display: grid;
		grid-template-rows: calc(1rem + var(--pad) * 2) 1fr calc(1rem + var(--pad) * 2);
		gap: var(--pad);
	}
	.main {
		/* height: 100%; */
		overflow: scroll;
	}
	.bar {
		display: flex;
		justify-content: space-between;
		gap: var(--pad);
	}
	.buttons {
		display: flex;
		gap: var(--pad);
	}

	.tabs {
		display: flex;
		gap: var(--pad);
		flex-direction: row;
		height: calc(var(--pad) * 2 + 1rem);
		box-sizing: border-box;
	}
</style>
