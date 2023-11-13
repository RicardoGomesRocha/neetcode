import { reverseList } from '.';
import { data } from './index.test.data';
import { ListNode } from './list';

describe('Valid parentheses Test suite', () => {
  it.each(data)('$name', ({ name, input, output }) => {
    const result = ListNode.toArray(reverseList(ListNode.fromArray(input[0])));
    expect(result).toEqual(output);
  });
});
