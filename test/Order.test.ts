import Cupom from '../src/Cupom';
import Item from '../src/Item';
import Order from '../src/Order'
describe('Order', () => {

  test('should calculate the price of a order without cupom', () => {
    const items: Item[] = [
      new Item('Monitor', 1000, 1),
      new Item('Teclado', 250, 1),
      new Item('Memoria Ram 8gb', 327, 3),
    ]
    const order = new Order(items);
    const price = order.calculatePrice()

    expect(price).toBe(2231);
  })
  test('should calculate the price of a order with cupom', () => {
    const items: Item[] = [
      new Item('Monitor', 1000, 1),
      new Item('Teclado', 250, 1),
      new Item('Memoria Ram 8gb', 327, 3),
    ]
    const cupom = new Cupom('20Perc', 0.20);
    const order = new Order(items, cupom);
    const price = order.calculatePrice()

    expect(price).toBe(1784.8);
  })

})
