type TestData = {
  name: string;
  input: [number[], number];
  output: number[];
};

export const data: TestData[] = [
  {
    name: 'Test case 1',
    input: [[1,1,1,2,2,3], 2],
    output: [1,2],
  },
  { name: 'Test case 2', input: [[1], 1], output: [1] },
];
