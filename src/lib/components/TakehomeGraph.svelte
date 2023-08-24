<script context="module">
	import { browser } from '$app/environment';
	let apexCharts;

	if (browser) {
		import('apexcharts').then((apex) => (apexCharts = apex.default));
	}

	export { apexCharts as ApexCharts };
</script>

<script>
	// import ApexCharts from 'apexcharts';
	import { onMount, onDestroy } from 'svelte';

	export let takehome = {
		period: 'year',
		percent: 69.22427764666217,
		expenses: {
			gross: 61692.8,
			net: 42706.39516000001,
			tax: 11527.945,
			acc: 943.8998400000002,
			kiwiSaver: 1850.784,
			studentLoan: 4663.776
		}
	};
	let chart;
	let chartDiv;
	let series;
	let prevOptions;
	let prevSeries;
	let animate = true;

	function generateSeries(takehome) {
		let series = [];
		for (const [name, amount] of Object.entries(takehome.expenses)) {
			if (name === 'gross') {
				continue;
			}
			const titleName = titleCase(name);
			const roundedAmount = Math.round((amount + Number.EPSILON) * 100) / 100;
			const dataset = {
				name: titleName,
				data: [roundedAmount]
			};
			series.push(dataset);
		}
		series.sort((a, b) => (a.data[0] < b.data[0] ? 1 : -1));
		return series;
	}

	function titleCase(camel) {
		const result = camel.replace(/([A-Z])/g, ' $1');
		const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
		return finalResult;
	}

	const options = {
		chart: {
			type: 'bar',
			stacked: true,
			stackType: '100%',
			toolbar: {
				show: false
			}
		},
		xaxis: {
			categories: [''],
			show: false,
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			show: false,
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		grid: {
			show: false
		},

		legend: {
			position: 'bottom'
		},
		tooltip: {
			enabled: true // todo make pretier
		}
	};

	$: series = generateSeries(takehome);

	$: {
		if (chart !== undefined) {
			if (options !== undefined && options !== prevOptions) {
				chart.updateOptions({ ...options, series }, true, animate);
			} else if (series !== undefined && series !== prevSeries) {
				chart.updateSeries(series, animate);
			}
		}
		prevOptions = options;
		prevSeries = series;
	}

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		chart = new ApexCharts(chartDiv, { ...options, series });
		chart.render();
	});

	onDestroy(() => {
		chart?.destroy();
	});
</script>

<main>
	<div bind:this={chartDiv} style="width: 500px; height: 311px;" />
</main>
