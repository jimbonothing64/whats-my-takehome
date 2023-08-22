import { takehome as takehomeIncome } from './income';
import { convertToYearly, convertfromYearly } from './convert';

export function takehome(income, period) {
	const yearlyPay = convertToYearly(income.pay, period);
	const periodPay = convertfromYearly(yearlyPay, period);
	const periodIncome = {
		...income,
		pay: periodPay
	};
	return takehomeIncome(periodIncome, period);
}
