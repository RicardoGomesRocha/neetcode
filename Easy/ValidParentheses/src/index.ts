function isOpenBrackets(char: string): boolean {
  return char === '(' || char === '{' || char === '[';
}

function getOpposite(char: string): string {
  if (char === ')') return '(';
  if (char === ']') return '[';
  if (char === '}') return '{';
  return '';
}

export function isValid(s: string): boolean {
  const array: string[] = [];
  for (let char of s) {
    if (isOpenBrackets(char)) array.push(char);
    else {
      const opposite = getOpposite(char);
      if (array.pop() !== opposite) return false;
    }
  }
  return array.length === 0;
}
