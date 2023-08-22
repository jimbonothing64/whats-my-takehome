import { takehomeYear } from './income';
import { convertToYearly, convertfromYearly } from './convert';
import periods from './period';

export function newTakehome(income) {
	const yearlyPay = convertToYearly(income.pay, income.period);
	const yearlyIncome = {
		...income,
		pay: yearlyPay,
		period: periods.year
	};
	const yearlyTakehome = takehomeYear(yearlyIncome);
	return yearlyTakehome;
}

export function convertTakehome(takehome, newPeriod) {
	const oldPeriod = takehome.period;
	const converted = {
		...takehome,
		newPeriod
	};
	for (const [expense, amount] of Object.entries(takehome.expenses)) {
		const yearlyAmount = convertToYearly(amount, oldPeriod);
		takehome.expenses[expense] = convertfromYearly(yearlyAmount, newPeriod);
	}
	return converted;
}
