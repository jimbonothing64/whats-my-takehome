<script>
	import { yearlyTakehome } from '$lib/tax.js';
	let income = {
		pay: 0,
		period: 'year',
		hasStudentLoan: true
	};
	let takehome = {
		gross: 0,
		net: 0,
		tax: 0,
		acc: 0,
		kiwiSaver: 0,
		studentLoan: 0
	};

	$: takehome = yearlyTakehome(income);
</script>

<main>
	<div
		class="flex w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700"
	>
		<fieldset>
			I make $
			<input type="number" bind:value={income.pay} />
			per
			<select bind:value={income.period}>
				<option value="hour">hour</option>
				<option value="week">week</option>
				<option value="fortnight">fortnight</option>
				<option value="month">month</option>
				<option value="year">year</option>
			</select>

			<input type="checkbox" />
			<input type="checkbox" />
			<input type="checkbox" />
		</fieldset>
		<div>${takehome.net || '-'}</div>
		<div>Take home</div>
		<div>{takehome.percent || '-'}%</div>
		<div>Take home</div>
	</div>
</main>
