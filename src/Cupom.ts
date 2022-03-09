export default class Cupom {
  constructor(readonly name: string, readonly amount: number) {
    this.amount = amount;
    this.name = name;
  }
}