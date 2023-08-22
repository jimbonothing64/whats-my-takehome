const WEEKS_IN_YEAR = 52;
const FORTNIGHT_IN_YEAR = 26.0714; // TODO: fix
const MONTHS_IN_YEAR = 12;
const HOURS_IN_YEAR = 2080;

// const timeConversions = {
//     WEEKS_IN_YEAR,
//     MONTHS_IN_YEAR,
//     HOURS_IN_YEAR
// }

const periods = {
	hour: 'hour',
	fortnight: 'fortnight',
	week: 'week',
	month: 'month',
	year: 'year',
	names: ['hour', 'week', 'fortnight', 'month', 'year']
};

// const periods = {
//     hour: 1,
//     week: 2,
//     fortnight: 3,
//     month: 4,
//     year: 5
// }

export default periods;

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
		case 'hour':
			return pay / HOURS_IN_YEAR;
		default:
			return -1;
	}
}
