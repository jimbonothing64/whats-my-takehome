<script>
	// replace with https://apexcharts.com/
	// import { Chart as ChartJS, registerables } from 'chart.js';
	import Chart from 'chart.js/auto'; // TODO: fix
	import { onMount } from 'svelte';
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
	let canvas;
	let data;
	let myChart;

	function generateData(takehome) {
		let newData = {
			labels: [''],
			datasets: []
		};
		for (const [name, amount] of Object.entries(takehome.expenses)) {
			const roundedAmount = Math.round((amount + Number.EPSILON) * 100) / 100;
			const dataset = {
				label: name,
				data: [roundedAmount]
			};
			newData.datasets.push(dataset);
		}
		console.log(newData);
		return newData;
	}

	$: {
		config.data = generateData(takehome);
		if (myChart) {
			myChart.update();
		}
	}

	const config = {
		type: 'bar',
		data: data,
		options: {
			legend: {
				display: false
			},
			responsive: true,
			scales: {
				x: {
					stacked: true,
					border: {
						display: false
					}
				},
				y: {
					stacked: true,
					border: {
						display: false
					}
				}
			}
		}
	};

	onMount(() => {
		myChart = new Chart(canvas, config);
	});
</script>

<main>
	<div style="width: 500px; height: 350px"><canvas bind:this={canvas} /></div>
</main>
