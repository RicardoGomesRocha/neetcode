function getMap(nums: number[]): Map<number, boolean> {
  const map = new Map<number, boolean>();
  for (const num of nums) {
    map.set(num, true);
  }
  return map;
}

export function longestConsecutive(nums: number[]): number {
  const map = getMap(nums);
  let longest = 0;
  for (let [key, value] of map) {
    if (value) {
      map.set(key, false);
      let sequence = 1;
      let index = key - 1;
      let value = map.get(index) ?? false;
      while (value) {
        map.set(index, false);
        index -= 1;
        value = map.get(index) ?? false;
        sequence++;
      }
      index = key + 1;
      value = map.get(index) ?? false;
      while (value) {
        map.set(index, false);
        index += 1;
        value = map.get(index) ?? false;
        sequence++;
      }
      longest = Math.max(longest, sequence);
    }
  }

  return longest;
}
