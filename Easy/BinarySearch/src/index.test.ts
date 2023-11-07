import { search } from '.';
import { data } from './index.test.data';

describe('Binary Search Tree Test suite', () => {
  it.each(data)('$name', ({ name, input, output }) => {
    const result = search(...input);
    expect(result).toBe(output);
  });
});
