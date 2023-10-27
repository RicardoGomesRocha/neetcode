type TestData = {
  name: string;
  input: [string[]];
  output: string[][];
};

export const data: TestData[] = [
  {
    name: 'Test case 1',
    input: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
    output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']],
  },
  { name: 'Test case 2', input: [['']], output: [['']] },
  { name: 'Test case 3', input: [['a']], output: [['a']] },
  {
    name: 'Test case 3',
    input: [['ddddddddddg', 'dgggggggggg']],
    output: [['ddddddddddg'], ['dgggggggggg']],
  },
];
