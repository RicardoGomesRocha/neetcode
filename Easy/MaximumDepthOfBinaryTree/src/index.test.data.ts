type TestData = {
  name: string;
  input: [(number | null)[]];
  output: number;
};

export const data: TestData[] = [
  {
    name: 'Test case 1',
    input: [[3, 9, 20, null, null, 15, 7]],
    output: 3,
  },
  {
    name: 'Test case 2',
    input: [[1, null, 2]],
    output: 2,
  }
];
