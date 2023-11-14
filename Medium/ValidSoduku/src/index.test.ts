import { isValidSudoku } from '.';
import { data } from './index.test.data';

describe('Valid Palindrome Test suite', () => {
  it.each(data)('$name', ({ name, input, output }) => {
    const result = isValidSudoku(...input);
    console.log(result, output);
    expect(result).toEqual(output);
  });
});
