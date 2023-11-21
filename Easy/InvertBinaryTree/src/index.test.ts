import { invertTree } from '.';
import { data } from './index.test.data';
import { TreeNode } from './TreeNode';

describe('Test suite', () => {
  it.each(data)('$name', ({ name, input, output }) => {
    const result = TreeNode.toArray(invertTree(TreeNode.fromArray(...input)));
    expect(result).toEqual(output);
  });
});
