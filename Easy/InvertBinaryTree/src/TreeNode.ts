export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  static fromArray(array: number[], index = 0): TreeNode | null {
    let root = null;
    if (index < array.length) {
      root = new TreeNode(array[index]);
      root.left = this.fromArray(array, 2 * index + 1);
      root.right = this.fromArray(array, 2 * index + 2);
    }
    return root;
  }

  static toArray(root: TreeNode | null): number[] {
    if(!root) return [];
    const queue: (TreeNode | null)[] = [root];
    const result: number[] = [];
    while(queue.length > 0) {
      const length = queue.length;
      for (let i = 0; i< length; i++) {
        const node = queue.shift();
        if(node) {
          result.push(node.val);
          queue.push(node.left);
          queue.push(node.right);
        }
      }
    }
    return result;
  }
}
