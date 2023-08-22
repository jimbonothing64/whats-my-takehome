<script>
	import { formatNumber } from '$lib/format.js';

	export let value = 0;
	export let format;

	let formated;
	$: formated = formatNumber(value, format);
</script>

<main>
	{formated}
</main>
