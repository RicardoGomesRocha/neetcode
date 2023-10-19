function massageString(s: string): string {
  return s.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

export function isPalindrome(s: string): boolean {
  s = massageString(s);
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    if (s[leftPointer] !== s[rightPointer]) return false;
    leftPointer++;
    rightPointer--;
  }

  return true;
}
