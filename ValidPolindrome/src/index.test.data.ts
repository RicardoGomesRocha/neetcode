type TestData = {
  name: string;
  input: [string];
  output: boolean;
};

export const data: TestData[] = [
  {
    name: 'Test case 1',
    input: ['A man, a plan, a canal: Panama'],
    output: true,
  },
  { name: 'Test case 2', input: ['race a car'], output: false },
  { name: 'Test case 3', input: [' '], output: true },
];
