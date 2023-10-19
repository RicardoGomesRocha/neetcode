import { isAnagram } from '.';
import { data } from './index.test.data';

describe('Valid Anagram Test suite', () => {
  it.each(data)('$name', ({ name, input, output }) => {
    const result = isAnagram(...input);
    expect(result).toBe(output);
  });
});
