export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static fromArray(array: number[]): ListNode | null {
    if (array.length === 0) return null;
    const head = new ListNode(array.shift());
    let pointer = head;
    while (array.length > 0) {
      pointer.next = new ListNode(array.shift());
      pointer = pointer.next;
    }
    return head;
  }

  static toArray(listNode: ListNode | null): number[] {
    if (!listNode) return [];
    const array: number[] = [];
    while (listNode !== null) {
      array.push(listNode.val);
      listNode = listNode.next;
    }
    return array;
  }
}
