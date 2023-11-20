type TestData = {
  name: string;
  input: [number[][], number];
  output: boolean;
};

export const data: TestData[] = [
  {
    name: 'Test case 1',
    input: [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      3,
    ],
    output: true,
  },
  {
    name: 'Test case 2',
    input: [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      13,
    ],
    output: false,
  },
  {
    name: 'Test case 2',
    input: [[[1]], 2],
    output: false,
  },
  {
    name: 'Test case 2',
    input: [[[1], [3]], 3],
    output: true,
  },
];
