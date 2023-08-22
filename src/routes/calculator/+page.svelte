<script>
	import { yearlyTakehome } from '$lib/tax.js';
	let income = {
		pay: 61692.8,
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
	</div>

	<div class="relative overflow-x-auto">
		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" class="px-6 py-3">Hour</th>
					<th scope="col" class="px-6 py-3">Week</th>
					<th scope="col" class="px-6 py-3">Fortnight</th>
					<th scope="col" class="px-6 py-3">Month</th>
					<th scope="col" class="px-6 py-3">Year</th>
				</tr>
			</thead>
			<tbody>
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th scope="col" class="px-6 py-3">gross</th>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
				</tr>
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th scope="col" class="px-6 py-3">tax</th>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
				</tr>
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th scope="col" class="px-6 py-3">acc</th>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
				</tr>
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th scope="col" class="px-6 py-3">kiwi saver</th>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
				</tr>
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th scope="col" class="px-6 py-3">student loan</th>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
				</tr>
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th scope="col" class="px-6 py-3">net</th>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
					<td class="px-6 py-3">{takehome.gross}</td>
				</tr>
			</tbody>
		</table>
		<h1>Past</h1>
		<div class="relative overflow-x-auto">
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead
					class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
				>
					<tr>
						<th scope="col" class="px-6 py-3">gross</th>
						<th scope="col" class="px-6 py-3">tax</th>
						<th scope="col" class="px-6 py-3">acc</th>
						<th scope="col" class="px-6 py-3">kiwi saver</th>
						<th scope="col" class="px-6 py-3">student loan</th>
						<th scope="col" class="px-6 py-3">net</th>
					</tr>
				</thead>
				<tbody>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<td class="px-6 py-3">{takehome.gross}</td>
						<td class="px-6 py-3">{takehome.tax}</td>
						<td class="px-6 py-3">{takehome.acc}</td>
						<td class="px-6 py-3">{takehome.kiwiSaver}</td>
						<td class="px-6 py-3">{takehome.studentLoan}</td>
						<td class="px-6 py-3">{takehome.net}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</main>
