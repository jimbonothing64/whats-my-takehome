import periods from '$lib/period.js';

const WEEKS_IN_YEAR = 52;
const FORTNIGHT_IN_YEAR = 26.0714; // TODO: fix
const MONTHS_IN_YEAR = 12;
const HOURS_IN_YEAR = 2080;

export function convertToYearly(pay, period) {
	switch (period) {
		case periods.year:
			return pay;
		case periods.month:
			return pay * MONTHS_IN_YEAR;
		case periods.week:
			return pay * WEEKS_IN_YEAR;
		case periods.fortnight:
			return pay * FORTNIGHT_IN_YEAR;
		case periods.hour:
			return pay * HOURS_IN_YEAR;
		default:
			return -1;
	}
}

export function convertfromYearly(pay, period) {
	switch (period) {
		case periods.year:
			return pay;
		case periods.month:
			return pay / MONTHS_IN_YEAR;
		case periods.week:
			return pay / WEEKS_IN_YEAR;
		case periods.fortnight:
			return pay / FORTNIGHT_IN_YEAR;
		case periods.hour:
			return pay / HOURS_IN_YEAR;
		default:
			return -1;
	}
}
