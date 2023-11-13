type TestData = {
  name: string;
  input: [number[], number[]];
  output: number[];
};

export const data: TestData[] = [
  {
    name: 'Test case 1',
    input: [
      [1, 2, 4],
      [1, 3, 4],
    ],
    output: [1, 1, 2, 3, 4, 4],
  },
  {
    name: 'Test case 2',
    input: [[], []],
    output: [],
  },
  { name: 'Test case 3', input: [[], [0]], output: [0] },
];
