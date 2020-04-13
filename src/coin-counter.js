
function CoinCounter(amount) { // amount = 1.25
  const newAmount = amount * 100; // amount = 125
  console.log(newAmount);
  const result = [];
  // const index = 0;
  // return newAmount;
  // rcountQuarters(newAmount);
  return function countQuarters(newAmount) {
    const quarters = newAmount / 25;  //quarters = 5
    const newQuarters = newAmount % 25; //newAmount = 0
    console.log("newQuarters:", newQuarters);
    console.log("quarters:", quarters);
    result.push(quarters);
    console.log("result", result);
    return function countDimes(newQuarters) {
      const dimes = newQuarters / 10; //dimes = 0
      const newDimes = newAmount % 10; //
      console.log("newDimes", newDimes);
      result.push(dimes);
      console.log("result", result);
      return function countNickles(newDimes) {
        const nickels = newDimes / 5;
        const newPennies = newAmount % 5;
        result.push(nickels);
        console.log("result", result);
        return function countPennies(newPennies) {
          // const pennies = newAmount / 1;
          // const newAmount = newAmount % 1;
          result.push(newPennies);
          console.log("result", result);
          return result;
        }
      }
    }
  }
  return result; // [5,0,0,0]
}


CoinCounter(1.25)(125)(0)(0)(0);

const quarters = CoinCounter(1.25);
const dimes = quarters(125);
const nickles = dimes(0);
const pennies = nickles(0);
const returnArray = pennies(0);





