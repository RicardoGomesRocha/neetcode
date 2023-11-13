import { ListNode } from './list';

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;
  if (!list1 && list2) return null;
  let mergedList;
  if (list1?.val < list2?.val) {
    mergedList = new ListNode(list1.val);
    list1 = list1.next;
  } else {
    mergedList = new ListNode(list2.val);
    list2 = list2.next;
  }
  const head = mergedList;
  while (list1 || list2) {
    if (!list1) {
      mergedList.next = list2;
      break;
    } else if (!list2) {
      mergedList.next = list1;
      break;
    } else if (list1?.val < list2?.val) {
      mergedList.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      mergedList.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    mergedList = mergedList.next;
  }
  return head;
}
