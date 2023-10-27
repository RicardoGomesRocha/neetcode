import { groupAnagrams } from '.';
import { data } from './index.test.data';

describe('Valid Palindrome Test suite', () => {
  it.each(data)('$name', ({ name, input, output }) => {
    const result = groupAnagrams(...input);
    expect(result).toEqual(output);
  });
});
