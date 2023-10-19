import { isPalindrome } from '.';
import { data } from './index.test.data';

describe('Valid Palindrome Test suite', () => {
  it.each(data)('$name', ({ name, input, output }) => {
    const result = isPalindrome(...input);
    expect(result).toBe(output);
  });
});
