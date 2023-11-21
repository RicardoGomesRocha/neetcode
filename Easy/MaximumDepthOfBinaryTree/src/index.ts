import { TreeNode } from './TreeNode';

export function maxDepth(root: TreeNode | null, level = 1): number {
  if (!root) return level - 1;
  const left = maxDepth(root.left, level + 1);
  const right = maxDepth(root.right, level + 1);
  return Math.max(left, right);
}
