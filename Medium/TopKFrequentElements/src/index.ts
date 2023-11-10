type Hashtable = { [key: number]: number };
type NumFrequency = {n: number, frequency: number}

function addElementInOrder(nums: NumFrequency[], numberToAdd: NumFrequency): NumFrequency[] {
  for(let i = 0; i < nums.length; i++) {
    if(nums[i].frequency < numberToAdd.frequency) {
      nums.splice(i, 0, numberToAdd);
      return nums;
    }
  }
  nums.push(numberToAdd);
  return nums;
}

export function topKFrequent(nums: number[], k: number): number[] {
  if(k === 0) return [];

  const hash:Hashtable = {};
  let result: NumFrequency[] = [];

  for(const num of nums) {
    if (!hash[num]) hash[num] = 1;
    else hash[num]++;
  }

  for (const num in hash) {
    const numFrequency: NumFrequency = { n: +num, frequency: hash[num] };
    if (result.length === 0) {
      result.push(numFrequency);
    } else {
      result = addElementInOrder(result, numFrequency);
    }
  }

  return result.slice(0, k).map((value) => value.n);
}
