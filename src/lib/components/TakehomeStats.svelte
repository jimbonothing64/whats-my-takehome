<script>
	import PeriodRadio from './PeriodRadio.svelte';
	import Formated from './Formated.svelte';
	import TakehomeGraph from './TakehomeGraph.svelte';
	import { default as formats } from '$lib/format.js';
	import { convertTakehome } from '$lib/takehome.js';
	export let takehome;
	let selectedPeriod = takehome.period;
	$: {
		takehome = convertTakehome(takehome, selectedPeriod);
	}
</script>

<main>
	<div class="stats stats-vertical lg:stats-horizontal shadow">
		<div class="stat">
			<div class="stat-figure text-secondary">
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
			<div class="stat-title">Takehome</div>
			<div class="stat-value">
				<Formated bind:value={takehome.expenses.net} format={formats.money} />
			</div>
			<div class="stat-desc">per {selectedPeriod}</div>
		</div>

		<div class="stat">
			<div class="stat-figure text-primary">
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
						d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
					/>
				</svg>
			</div>
			<div class="stat-title">You keep</div>
			<div class="stat-value">
				<Formated bind:value={takehome.percent} format={formats.percent} />
			</div>
			<div class="stat-desc">of your pay</div>
		</div>
	</div>
	<div>
		<TakehomeGraph bind:takehome />
	</div>
	<div class="flex justify-center p-5">
		<PeriodRadio bind:selectedPeriod />
	</div>
</main>
