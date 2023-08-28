<script>
	import Card from '$lib/components/Card.svelte';
	import PeriodRadio from '$lib/components/PeriodRadio.svelte';
	import QuickIncomeForm from '$lib/components/QuickIncomeForm.svelte';
	import TakehomeStats from '$lib/components/TakehomeStats.svelte';
	import TakehomeGraph from '$lib/components/TakehomeGraph.svelte';

	import { newTakehome } from '$lib/takehome.js';
	import { convertTakehome } from '$lib/takehome.js';

	let income = {
		pay: 61692.8,
		period: 'year',
		kiwiSaver: 3,
		hasStudentLoan: true
	};
	let takehome = newTakehome(income);
	let selectedPeriod = takehome.period;

	$: {
		takehome = newTakehome(income);
		takehome = convertTakehome(takehome, selectedPeriod);
	}
</script>

<div class="p-5 flex flex-col lg:flex-row gap-5">
	<div>
		<Card>
			<QuickIncomeForm bind:income />
		</Card>
		<div tabindex="-1" class="collapse">
			<div class="collapse-title">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="stroke-current shrink-0 w-6 h-6"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
			</div>
			<div class="collapse-content">
				Change the inputs below to see what your takehome would be in different pay periods. Tap the
				parts of the graph to see where your money is going.
			</div>
		</div>
	</div>
	<div class="max-w-lg flex align-content-center">
		<Card>
			<TakehomeStats bind:takehome bind:selectedPeriod />
			<TakehomeGraph bind:takehome />
			<div class="flex justify-center p-5">
				<PeriodRadio bind:selectedPeriod />
			</div>
		</Card>
	</div>
</div>
