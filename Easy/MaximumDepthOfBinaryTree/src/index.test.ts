import { maxDepth } from '.';
import { data } from './index.test.data';
import { TreeNode } from './TreeNode';

describe('Test suite', () => {
  it.each(data)('$name', ({ name, input, output }) => {
    const result = maxDepth(TreeNode.fromArray(...input));
    expect(result).toEqual(output);
  });
});
