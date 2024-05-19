<div class="contentScroll">
	<div class="content">
		<slot></slot>
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
</style>
