import { ListNode } from './list';

export function reverseList(
  head: ListNode | null,
  prev: ListNode | null = null
): ListNode | null {
  if (!head) return prev;
  const temp = head.next;
  head.next = prev;
  prev = head;
  head = temp;
  return reverseList(head, prev);
}
