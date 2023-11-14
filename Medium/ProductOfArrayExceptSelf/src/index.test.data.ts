type TestData = {
  name: string;
  input: [number[]];
  output: number[];
};

export const data: TestData[] = [
  {
    name: 'Test case 1',
    input: [[1, 2, 3, 4]],
    output: [24, 12, 8, 6],
  },
  {
    name: 'Test case 2',
    input: [[-1, 1, 0, -3, 3]],
    output: [0, 0, 9, 0, 0],
  },
];
