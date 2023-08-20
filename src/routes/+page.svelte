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
	<fieldset>
		I make $
		<input type="number" bind:value={income.pay} />
		<select bind:value={income.period}>
			<option value="week">week</option>
			<option value="fortnight">fortnight</option>
			<option value="month">month</option>
			<option value="year">year</option>
		</select>
		<input type="checkbox" />
		<input type="checkbox" />
		<input type="checkbox" />
	</fieldset>
	<h1>
		You'd take home {takehome.net} of ({takehome.gross}) with tax of {takehome.tax}, acc levy of {takehome.acc},
		{takehome.kiwiSaver},
		{takehome.studentLoan}
	</h1>
</main>
