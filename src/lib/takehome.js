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
		period: newPeriod
	};
	for (const [expense, amount] of Object.entries(converted.expenses)) {
		const yearlyAmount = convertToYearly(amount, oldPeriod);
		converted.expenses[expense] = convertfromYearly(yearlyAmount, newPeriod);
	}
	return converted;
}
