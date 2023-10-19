type TestData = {
  name: string;
  input: [string, string];
  output: boolean;
};

export const data: TestData[] = [
  { name: 'Test case 1', input: ['anagram', 'nagaram'], output: true },
  { name: 'Test case 2', input: ['rat', 'rat'], output: true },
  { name: 'Test case 3', input: ['abc', 'bed'], output: false },
  { name: 'Test case 4', input: ['abc', 'bca'], output: true },
  { name: 'Test case 5', input: ['a', 'b'], output: false },
  { name: 'Test case 6', input: ['b', 'b'], output: true },
  { name: 'Test case 7', input: ['aacc', 'ccac'], output: false },
];
