type TestData = {
  name: string;
  input: [string];
  output: number;
};

export const data: TestData[] = [
  {
    name: 'Test case 1',
    input: ['abcabcbb'],
    output: 3,
  },
  {
    name: 'Test case 2',
    input: ['bbbbb'],
    output: 1,
  },
  {
    name: 'Test case 3',
    input: ['pwwkew'],
    output: 3,
  },
];
