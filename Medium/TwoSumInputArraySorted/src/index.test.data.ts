type TestData = {
  name: string;
  input: [number[], number];
  output: [number, number];
};

export const data: TestData[] = [
  {
    name: 'Test case 1',
    input: [[2, 7, 11, 15], 9],
    output: [1, 2],
  },
  {
    name: 'Test case 2',
    input: [[2, 3, 4], 6],
    output: [1, 3],
  },
  {
    name: 'Test case 2',
    input: [[-1, 0], -1],
    output: [1, 2],
  },
];
