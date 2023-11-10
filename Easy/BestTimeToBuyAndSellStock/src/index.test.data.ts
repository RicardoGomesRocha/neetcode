type TestData = {
  name: string;
  input: [number[]];
  output: number;
};

export const data: TestData[] = [
  { name: 'Test case 1', input: [[7, 1, 5, 3, 6, 4]], output: 5 },
  { name: 'Test case 2', input: [[7, 6, 5, 4, 1]], output: 0 },
];
