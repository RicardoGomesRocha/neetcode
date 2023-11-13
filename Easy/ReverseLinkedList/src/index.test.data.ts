type TestData = {
  name: string;
  input: [number[]];
  output: number[];
};

export const data: TestData[] = [
  {
    name: 'Test case 1',
    input: [[1, 2, 3, 4, 5]],
    output: [5, 4, 3, 2, 1],
  },
  {
    name: 'Test case 2',
    input: [[1, 2]],
    output: [2, 1],
  },
  { name: 'Test case 3', input: [[]], output: [] },
];
