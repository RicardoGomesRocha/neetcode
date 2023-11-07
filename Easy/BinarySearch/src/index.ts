export function search(
  nums: number[],
  target: number,
  startIndex: number = 0,
  endIndex: number = nums.length - 1
): number {
  if (endIndex - startIndex < 0) return -1;
  const midIndex = Math.trunc((endIndex - startIndex) / 2) + startIndex;
  if (nums[midIndex] === target) return midIndex;
  if (nums[midIndex] > target)
    return search(nums.slice(startIndex, midIndex), target, startIndex, midIndex - 1);
  return search(nums.slice(midIndex), target, midIndex + 1, endIndex);
}
