export function maxProfit(prices: number[]): number {
  let profit = 0;
  let cursorLeft = 0;
  let cursorRight = 0;
  while (cursorRight < prices.length) {
    if (prices[cursorLeft] < prices[cursorRight]) {
      const margin = prices[cursorRight] - prices[cursorLeft];
      profit = Math.max(profit, margin);
    } else cursorLeft = cursorRight;
    cursorRight++;
  }
  return profit;
}
