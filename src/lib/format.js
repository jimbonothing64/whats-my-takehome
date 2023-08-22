export function formatMoney(number) {
	if (typeof number !== 'number') {
		throw new Error('Input must be a valid number');
	}
	const [integerPart, decimalPart] = number.toFixed(2).split('.');
	const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	const formattedMoney = `$${formattedIntegerPart}.${decimalPart}`;
	return formattedMoney;
}

export function formatPercent(number) {
	if (typeof number !== 'number') {
		throw new Error('Input must be a valid number');
	}
	const rounded = number.toFixed(2);
	const formattedPercent = `${rounded}%`;
	return formattedPercent;
}

export function formatNumber(number, format) {
	switch (format) {
		case formats.money:
			return formatMoney(number);
		case formats.percent:
			return formatPercent(number);
		default:
			return null;
	}
}

const formats = {
	money: 'money',
	percent: 'percent'
};

export default formats;
