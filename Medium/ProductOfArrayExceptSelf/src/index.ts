function getProduct(nums: number[]): { product: number; zero: number } {
  let zero = nums[0] === 0 ? 1 : 0;
  const product = nums.reduce((prev, current) => {
    if (current === 0) zero += 1;
    return (prev === 0 ? 1 : prev) * (current === 0 ? 1 : current);
  });
  return { product, zero };
}

export function productExceptSelf(nums: number[]): number[] {
  const { product, zero } = getProduct(nums);
  return nums.map((value) => {
    if (zero > 1) return 0;
    else if (zero === 1) return value === 0 ? product : 0;
    else return product / value;
  });
}
