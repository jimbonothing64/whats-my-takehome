<script>
	let income = {
		pay: 0,
		period: 'week',
		isStudent: false
	};
	let takehome = {
		pay: 0,
		tax: 0
	};

	$: {
		takehome.tax = 0.4 * income.pay;
		takehome.pay = income.pay - takehome.tax;
	}
</script>

<main>
	<fieldset>
		I make $
		<input bind:value={income.pay} />
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
		You'd take home {takehome.pay} with tax of {takehome.tax}.
	</h1>
</main>
