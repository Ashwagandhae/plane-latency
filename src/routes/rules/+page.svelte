<script lang="ts">
	import { rules } from '$lib/data/out';
</script>

<article>
	<ul>
		{#each rules as rule}
			<li>{@html rule}</li>
		{/each}
	</ul>
</article>

<style>
	article {
		padding: var(--pad);
	}
	ul {
		margin: 0;
		padding: 1rem;
		line-height: 1.5;
		font-size: 1rem;
		color: var(--text);
	}
</style>
