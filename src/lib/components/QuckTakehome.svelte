<script>
	import { yearlyTakehome } from '$lib/tax.js';
	let income = {
		pay: 0,
		period: 'year',
		kiwiSaver: 3,
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
	<div class="p-5 flex flex-row gap-5">
		<form class="basis-2/3 p-3">
			<h3 class="text-2xl">
				I make $
				<input
					type="number"
					bind:value={income.pay}
					class="t-2xl py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
				/>
				per
				<select
					bind:value={income.period}
					class="t-2xl py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
				>
					<option value="hour">hour</option>
					<option value="week">week</option>
					<option value="fortnight">fortnight</option>
					<option value="month">month</option>
					<option value="year">year</option>
				</select>
				and contribute
				<input
					type="number"
					bind:value={income.kiwiSaver}
					class="t-2xl py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
				/>
				% to kiwisaver, with
				<label
					class="swap border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
				>
					<input type="checkbox" bind:value={income.hasStudentLoan} />
					<div class="swap-on">no student loan</div>
					<div class="swap-off">a student loan</div>
				</label>
				.
			</h3>
			<div class="flex justify-end">
				<a
					href="/calculator"
					class="my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					See breakdown
					<svg
						class="w-3.5 h-3.5 ml-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</a>
			</div>
		</form>
		<div class="grid grid-cols-2 gap-5">
			<div class="col-span-2 item justify-self-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
					/>
				</svg>
			</div>
			<div>
				<h2 class="text-3xl">${takehome.net || '-'}</h2>
			</div>
			<div>
				<h2 class="text-3xl">{takehome.percent || '-'}%</h2>
			</div>
		</div>
	</div>
</main>

<style>
	.t-2xl {
		@apply text-2xl;
	}
</style>
