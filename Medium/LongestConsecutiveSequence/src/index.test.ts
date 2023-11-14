import { longestConsecutive } from '.';
import { data } from './index.test.data';

describe('Test suite', () => {
  it.each(data)('$name', ({ name, input, output }) => {
    const result = longestConsecutive(...input);
    console.log(result, output);
    expect(result).toEqual(output);
  });
});
