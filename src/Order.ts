import Cupom from './Cupom';
import Item from './Item';

export default class Order {

  private price: number = 0;

  constructor(readonly items:Item[], readonly cupom?: Cupom){
    this.items = items;
    if (cupom) this.cupom = cupom;
  }

  public calculatePrice(): number{
    for (const item of this.items){
      this.price += item.price * item.quantity; 
    }
    const discount = this.calculateDiscount();
    return this.price - discount;
  }

  public calculateDiscount(): number{
    if(!this.cupom) return 0
    return this.price * this.cupom?.amount;
  }

  public addItem(item: Item): void{
    this.items.push(item);
  }

}