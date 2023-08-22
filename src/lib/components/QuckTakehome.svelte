<script>
	import TakehomeStats from './TakehomeStats.svelte';
	import { newTakehome } from '$lib/takehome.js';
	import PeriodSelector from './PeriodSelector.svelte';

	let income = {
		pay: 61692.8,
		period: 'year',
		kiwiSaver: 3,
		hasStudentLoan: true
	};
	let takehome = newTakehome(income);

	$: takehome = newTakehome(income);
</script>

<main>
	<div class="p-5 flex flex-row gap-5">
		<form class="basis-2/3 p-3">
			<h3 class="text-2xl">
				I make $
				<input
					type="number"
					bind:value={income.pay}
					class="o-text-2xl py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
				/>
				per
				<PeriodSelector bind:selectedPeriod={income.period} />
				and contribute
				<input
					type="number"
					bind:value={income.kiwiSaver}
					class="o-text-2xl py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
				/>
				% to kiwisaver with
				<label
					class="swap py-2.5 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
				>
					<input type="checkbox" bind:checked={income.hasStudentLoan} />
					<div class="swap-on">no student loan</div>
					<div class="swap-off">a student loan</div>
				</label>
				. {income.hasStudentLoan}
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
		<div>
			<TakehomeStats bind:takehome />
		</div>
	</div>
</main>

<style>
	/* Override */
	.o-text-2xl {
		@apply text-2xl;
	}

	/* No arrows: Chrome, Safari, Edge, Opera*/
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
