type HashTable = { [key: string]: boolean };

export function containsDuplicate(nums: number[]): boolean {
  const hash: HashTable = {};
  for (const num of nums) {
    if (hash[num]) return true;
    hash[num] = true;
  }
  return false;
}
