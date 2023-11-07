type TestData = {
  name: string;
  input: [number[], number];
  output: number;
};

export const data: TestData[] = [
  {
    name: 'Test case 1',
    input: [[-1, 0, 3, 5, 9, 12], 9],
    output: 4,
  },
  {
    name: 'Test case 2',
    input: [[-1, 0, 3, 5, 9, 12], 2],
    output: -1,
  },
  {
    name: 'Test case 3',
    input: [[-1, 0, 5, 9, 12], 9],
    output: 3,
  },
  {
    name: 'Test case 4',
    input: [[-1, 0, 5, 9, 12], -1],
    output: 0,
  },
  {
    name: 'Test case 5',
    input: [[-1, 0, 5, 9, 12], 12],
    output: 4,
  },
  {
    name: 'Test case 6',
    input: [[-1, 0, 5, 7, 9, 12], -1],
    output: 0,
  },
  {
    name: 'Test case 7',
    input: [[-1, 0, 5, 7, 9, 12], 12],
    output: 5,
  },
];
