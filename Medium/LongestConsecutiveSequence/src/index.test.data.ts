type TestData = {
  name: string;
  input: [number[]];
  output: number;
};

export const data: TestData[] = [
  {
    name: 'Test case 6',
    input: [[1, 0, -1]],
    output: 3,
  },
  {
    name: 'Test case 1',
    input: [[100, 4, 200, 1, 3, 2]],
    output: 4,
  },
  {
    name: 'Test case 2',
    input: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]],
    output: 9,
  },
  {
    name: 'Test case 3',
    input: [[1, 3, 5, 7]],
    output: 1,
  },
  {
    name: 'Test case 4',
    input: [[]],
    output: 0,
  },
  {
    name: 'Test case 5',
    input: [[0, -1]],
    output: 2,
  },
];
