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
		return {
			pay: this.income - kiwiSaver - tax - studentLoan,
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
		return this.kiwiSaver ? 0 : this.kiwiSaver * this.income;
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

export default {
	NZIncome,
	TAX_BRACKETS
};
