<script lang="ts">
	export let link: string | null = null;
</script>

{#if link == null}
	<slot></slot>
{:else}
	<a href={link}><slot></slot></a>
{/if}
