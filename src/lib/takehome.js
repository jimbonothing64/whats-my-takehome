import { takehome as takehomeIncome } from './income';
import { convertToYearly, convertfromYearly } from './convert';

export function newTakehome(income, period) {
	const yearlyPay = convertToYearly(income.pay, period);
	const periodPay = convertfromYearly(yearlyPay, period);
	const periodIncome = {
		...income,
		pay: periodPay
	};
	return takehomeIncome(periodIncome, period);
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
