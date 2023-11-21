type TestData = {
  name: string;
  input: [number[]];
  output: number[];
};

export const data: TestData[] = [
  {
    name: 'Test case 1',
    input: [[4, 2, 7, 1, 3, 6, 9]],
    output: [4, 7, 2, 9, 6, 3, 1],
  },
  {
    name: 'Test case 2',
    input: [[2, 1, 3]],
    output: [2, 3, 1],
  },
  { name: 'Test case 3', input: [[]], output: [] },
];
