const TAX_BRACKETS = [
	{ min: 0, max: 14000, rate: 0.105 },
	{ min: 14001, max: 48000, rate: 0.175 },
	{ min: 48001, max: 70000, rate: 0.3 },
	{ min: 70001, max: 180000, rate: 0.33 },
	{ min: 180001, max: Infinity, rate: 0.39 }
]; // Anualized.

const ACC_LEVY = 1.53 / 100;

const STUDENT_LOAN_RATE = 12 / 100;
const STUDENT_THRESHOLD = 22828; // Anualized.

class NZIncome {
	constructor(income, kiwiSaver, hasStudentLoan) {
		this.income = income || 0;
		this.kiwiSaver = kiwiSaver / 100 || 0;
		this.hasStudentLoan = hasStudentLoan || false;
		this.taxBrackets = TAX_BRACKETS;
	}

	takehome() {
		const tax = this.calculatePAYE();
		const acc = this.calculateACC();
		const kiwiSaver = this.calculateKiwisaver();
		const studentLoan = this.calculateStudentLoan();
		const net = this.income - kiwiSaver - acc - tax - studentLoan;
		const percent = (net / this.income) * 100;
		return {
			gross: this.income,
			period: 'year',
			net,
			tax,
			acc,
			kiwiSaver,
			studentLoan,
			percent
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

	calculateACC() {
		return this.income * ACC_LEVY;
	}

	calculateKiwisaver() {
		return this.kiwiSaver * this.income;
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

export function takehome(income) {
	const calculator = new NZIncome(income.pay, income.kiwiSaver, income.hasStudentLoan);
	return calculator.takehome();
}
