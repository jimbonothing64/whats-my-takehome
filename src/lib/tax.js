const TAX_BRACKETS = [
	{ min: 0, max: 14000, rate: 0.105 },
	{ min: 14001, max: 48000, rate: 0.175 },
	{ min: 48001, max: 70000, rate: 0.3 },
	{ min: 70001, max: 180000, rate: 0.33 },
	{ min: 180001, max: Infinity, rate: 0.33 }
]; // Anualized.

const STUDENT_LOAN_RATE = 0.12;
const STUDENT_THRESHOLD = 22828; // Anualized.

class NZIncome {
	constructor(income, kiwiSaver, hasStudentLoan) {
		this.income = income;
		this.taxBrackets = TAX_BRACKETS;
		this.kiwiSaver = kiwiSaver / 100;
		this.hasStudentLoan = hasStudentLoan;
	}

	takehome() {
		const tax = this.calculatePAYE();
		const kiwiSaver = this.calculateKiwisaver();
		const studentLoan = this.calculateStudentLoan();
		const net = this.income - kiwiSaver - tax - studentLoan;
		console.log(this);
		return {
			gross: this.income,
			net,
			tax,
			kiwiSaver,
			studentLoan
		};
	}

	calculatePAYE() {
		let taxAmount = 0;

		for (const bracket of this.taxBrackets) {
			if (this.income > bracket.max) {
				taxAmount += (bracket.max - bracket.min + 1) * bracket.rate;
			} else if (this.income > bracket.min) {
				taxAmount += (this.income - bracket.min + 1) * bracket.rate;
				break;
			}
		}

		return taxAmount;
	}

	calculateKiwisaver() {
		return this.kiwiSaver ? this.kiwiSaver * this.income : 0;
	}

	calculateStudentLoan() {
		const loanableIncome = this.income - STUDENT_THRESHOLD;
		let loanAmount = 0;
		if (this.hasStudentLoan && loanableIncome > 0) {
			loanAmount = loanableIncome * STUDENT_LOAN_RATE;
		}
		return loanAmount;
	}
}

const convertToYearly = (pay, period) => {
	const weeksInYear = 52.1775;
	const monthsInYear = 12;
	switch (period) {
		case 'year':
			return pay;
		case 'month':
			return pay * monthsInYear;
		case 'week':
			return pay * weeksInYear;
		default:
			return -1;
	}
};

export function yearlyTakehome(income) {
	const yearlyPay = convertToYearly(income.pay, income.period);
	const calculator = new NZIncome(yearlyPay, income.kiwiSaver, income.hasStudentLoan);
	console.log(calculator.takehome());
	return calculator.takehome();
}
