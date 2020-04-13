import { CoinCounter } from './../src/coin-counter.js';

describe('CoinCounter', () => {

  let result = [];

  test("should take user's input money and return their amount in broken change with quarters", () => {
    const someMoney = new CoinCounter(1.25);
    expect(someMoney.countQuarters()).toEqual(5)
  });
  test("should take user's input money and return their amount in broken change with Dimes", () => {
    const someMoney = new CoinCounter(1.25);
    expect(someMoney.countDimes()).toEqual()
  });
  test("should take user's input money and return their amount in broken change with nickles", () => {
    const someMoney = new CoinCounter(1.25);
    expect(someMoney.countNickels()).toEqual(25)
  });
  test("should take user's input money and return their amount in broken change with pennies", () => {
    const someMoney = new CoinCounter(1.25);
    expect(someMoney.countPennies()).toEqual()
  });