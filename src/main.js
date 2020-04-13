public class CoinPurse {
  public static List<int> Coins = new List<int>(4) { 500, 100, 25, 10, 5, 1 };
  public static List < int > MakeChange(int monies) //monies = 120
{
  List < int > results = new List<int>(1);
  int index = 0;
  int newMonies = monies; //newMonies = 120 
  while (newMonies > 0) {
    if (newMonies >= Coins[index]) {
      newMonies -= Coins[index]; //newMonies = 20
      results.Add(Coins[index]); // add 100 to results 
    }
    else if (newMonies <= Coins[index]) {
      index++;
    }
    else {
      break;
    }
  }
  return results;
}
}

