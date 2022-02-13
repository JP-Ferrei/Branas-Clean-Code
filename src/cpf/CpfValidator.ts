export class CpfValidator {

	public isCpfvalid(cpf: string): boolean {
		if (cpf === null || cpf === undefined) return false;
		if (cpf.length < 11 || cpf.length > 14) return false;

		const {number, digit, cpfUnified} = this.sanatizeCpf(cpf);
		const numberWithFristDigit = cpfUnified.substring(0,cpfUnified.length - 1)

		const firstDigit = this.checkSecondDigit(number, 10);
		const secondDigit = this.checkSecondDigit(numberWithFristDigit, 11);

		const combinedDigit = firstDigit.toString() + secondDigit.toString();
		
		if(digit !== parseFloat(combinedDigit)) false;

		return true;

	}

	private sanatizeCpf(cpf: string): cpfObject {
		const cpfUnified = cpf.replace('.', '')
			.replace('.', '')
			.replace('-', '')
			.replace(' ', '');

		const number = cpfUnified.substring(0,8);
		const digit = parseFloat(cpfUnified.substring(8));
		return {  number, digit, cpfUnified };
	}

	private checkFirstDigit(cpf: string): number{
		let cpfNumberIterator: number = 10;
		let sum: number = 0;
		for(let i = 0; i<= cpf.length; i++){
			const number: number = parseFloat(cpf.charAt(i));
			const result: number = number * cpfNumberIterator;
			sum += result;
			cpfNumberIterator--;
		}

		const rest = sum % 11;

		if(rest < 2) return 0;

		return 11 - rest;
	}

	private checkSecondDigit(cpf: string, cpfNumberIterator: number): number{
		let sum: number = 0;
		for(let i = 0; i<= cpf.length; i++){
			const number: number = parseFloat(cpf.charAt(i));
			const result: number = number * cpfNumberIterator;
			sum += result;
			cpfNumberIterator--;
		} 

		const rest = sum % 11;

		if(rest < 2) return 0;
		return 11 - rest;

	}
}
// console.log(validate("111.111.111-11"));
// console.log(validate("123.456.789-99"));
// console.log(validate("935.411.347-80"));

interface cpfObject {
	number: string,
	digit: number,
	cpfUnified: string
}