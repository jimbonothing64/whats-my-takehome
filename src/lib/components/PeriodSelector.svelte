<script>
	import { default as availablePeriods } from '$lib/period.js';
	export let periods = availablePeriods.names;
	export let selectedPeriod = periods[0];
</script>

<main>
	<select
		bind:value={selectedPeriod}
		class="o-text-2xl py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
	>
		{#each periods as period}
			<option value={period}>{period}</option>
		{/each}
	</select>
</main>

<style>
	/* Override */
	.o-text-2xl {
		@apply text-lg;
	}
</style>
