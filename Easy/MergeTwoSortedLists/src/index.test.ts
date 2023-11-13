import { mergeTwoLists } from '.';
import { data } from './index.test.data';
import { ListNode } from './list';

describe('Valid parentheses Test suite', () => {
  it.each(data)('$name', ({ name, input, output }) => {
    const result = ListNode.toArray(
      mergeTwoLists(ListNode.fromArray(input[0]), ListNode.fromArray(input[1]))
    );
    expect(result).toEqual(output);
  });
});
