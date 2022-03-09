export default class Item{

  constructor(readonly name: string, readonly price: number, readonly quantity: number){
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}