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

<div class="p-5 flex flex-col md:flex-row gap-5">
	<div>
		<p>
			Change the inputs below to see what your takehome would be in different pay periods. Tap the
			parts of the graph to see where your money is going.
		</p>
		<QuickIncomeForm bind:income />
	</div>
	<div class="max-w-lg flex alighn-content-center">
		<Card>
			<TakehomeStats bind:takehome bind:selectedPeriod />
			<TakehomeGraph bind:takehome />
			<div class="flex justify-center p-5">
				<PeriodRadio bind:selectedPeriod />
			</div>
		</Card>
	</div>
</div>
