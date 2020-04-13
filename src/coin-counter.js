export function CoinCounter(amount) { // amount = 1.25
  let newAmount = amount * 100; // amount = 125
  let result = [];
  // let index = 0;
  function countQuarters(newAmount) {
    let quarters = newAmount / 25;  //quarters = 5
    let newAmount = newAmount % 25; //newAmount = 0
    results.Append(quarters); //result[0] = 5
    function countDimes(newAmount) {
      let dimes = newAmount / 10; //dimes = 0
      let newAmount = newAmount % 10; //
      results.Append(dimes);
      function countNickles(newAmount) {
        let nickels = newAmount / 5;
        let newAmount = newAmount % 5;
        results.Append(nickels);
        function countPennies(newAmount) {
          let pennies = newAmount / 1;
          let newAmount = newAmount % 1;
          result.Append(pennies);
        }
      }
    }
  }
  return result; // [5,0,0,0]
}








