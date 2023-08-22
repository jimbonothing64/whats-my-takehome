<script>
	import { default as availablePeriods } from '$lib/period.js';
	export let periods = availablePeriods.names;
	export let selectedPeriod = periods[2];
</script>

<main>
	<div class="join">
		{#each periods as period}
			<input
				class="join-item btn"
				type="radio"
				name="options"
				aria-label={period}
				value={period}
				bind:group={selectedPeriod}
			/>
		{/each}
	</div>
</main>
