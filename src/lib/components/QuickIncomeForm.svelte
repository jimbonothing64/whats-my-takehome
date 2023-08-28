<script>
	import PeriodSelector from './PeriodSelector.svelte';
	export let income;
	$: income;
</script>

<form class="p-3">
	<h3 class="text-xl">
		I make $
		<input
			type="number"
			bind:value={income.pay}
			class="o-text-2xl w-32 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
		/>
		per
		<PeriodSelector bind:selectedPeriod={income.period} />
		and contribute
		<input
			type="number"
			bind:value={income.kiwiSaver}
			class="o-text-2xl py-2.5 w-7 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
		/>
		% to kiwisaver with
		<label
			class="swap py-2.5 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
		>
			<input type="checkbox" bind:checked={income.hasStudentLoan} />
			<div class="swap-off">a student loan</div>
			<div class="swap-on">no student loan</div>
		</label>
		.
	</h3>
	<div class="flex justify-end p-5">
		<!-- <a href="/calculator" class="btn">
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
		</a> -->
	</div>
</form>

<style>
	/* Override */
	.o-text-2xl {
		@apply text-xl;
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
