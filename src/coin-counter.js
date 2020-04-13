// export class CoinCounter {
const coins = [25, 10, 5, 1];



function CoinCounter(amount) {
  let result = [];
  let index = 0;
  let newAmount = amount;
  function countQuarters() {
    let quarters = newAmount / 25;
    let newAmount = newAmount % 25;
    return function countDimes(newAmount) {

    }
  }
  function countDimes(newAmount) {
    let dimes = countQuarters();
    return
  }
  function countNickle() {
    return
  }
  function countPennies() {
    return
  }
}
}
//







// public class CoinPurse
// {
//   public static List<int> Coins = new List<int>(4) { 500, 100, 25, 10, 5, 1 };
//   public static List<int> MakeChange(int monies) //monies = 120
//   {
//     List<int> results = new List<int>(1);
//     int index = 0;
//     int newMonies = monies; //newMonies = 120 
//     while (newMonies > 0)
//     {
//       if (newMonies >= Coins[index])
//       {
//         newMonies -= Coins[index]; //newMonies = 20
//         results.Add(Coins[index]); // add 100 to results 
//       }
//       else if (newMonies <= Coins[index])
//       {
//         index++;
//       }
//       else
//       {
//         break;
//       }
//     }
//     return results;
//   }
// }

  //array of denom
  //taking input number
  //while loop to check if current number is equal to any denom
  //return total denom array

