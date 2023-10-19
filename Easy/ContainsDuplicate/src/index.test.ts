import { containsDuplicate } from '.';
import { data } from './index.test.data';

describe('Valid Anagram Test suite', () => {
  it.each(data)('$name', ({ name, input, output }) => {
    const result = containsDuplicate(...input);
    expect(result).toBe(output);
  });
});
