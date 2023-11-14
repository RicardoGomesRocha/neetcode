export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;

  const map = new Map<string, number>();
  let leftIndex = 0;
  let rightIndex = 0;
  let max = 1;

  while (rightIndex < s.length) {
    if (map.get(s[rightIndex])) {
      map.set(s[leftIndex], (map.get(s[leftIndex]) ?? 1) - 1);
      leftIndex++;
    } else {
      map.set(s[rightIndex], (map.get(s[rightIndex]) ?? 0) + 1);
      rightIndex++;
    }
    max = Math.max(max, rightIndex - leftIndex);

  }
  return max;
}
