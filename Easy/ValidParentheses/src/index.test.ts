import { isValid } from '.';
import { data } from './index.test.data';

describe('Valid parentheses Test suite', () => {
  it.each(data)('$name', ({ name, input, output }) => {
    const result = isValid(...input);
    expect(result).toBe(output);
  });
});
