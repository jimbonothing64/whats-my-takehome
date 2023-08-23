<script>
	import { formatNumber } from '$lib/format.js';

	export let value = 0;
	export let format;
</script>

<main>
	{formatNumber(value, format)}
</main>
