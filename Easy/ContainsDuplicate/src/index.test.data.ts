type TestData = {
  name: string;
  input: [number[]];
  output: boolean;
};

export const data: TestData[] = [
  { name: 'Test case 1', input: [[1, 2, 3, 1]], output: true },
  { name: 'Test case 2', input: [[1, 2, 3, 4]], output: false },
  {
    name: 'Test case 3',
    input: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]],
    output: true,
  },
];
