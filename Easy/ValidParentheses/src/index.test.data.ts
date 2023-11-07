type TestData = {
  name: string;
  input: [string];
  output: boolean;
};

export const data: TestData[] = [
  { name: 'Test case 1', input: ['()'], output: true },
  { name: 'Test case 2', input: ['()[]{}'], output: true },
  { name: 'Test case 3', input: ['((()))'], output: true },
  { name: 'Test case 4', input: ['([({()})])'], output: true },
  { name: 'Test case 5', input: ['(]'], output: false },
  { name: 'Test case 6', input: ['([({()})])([]])'], output: false },
];
