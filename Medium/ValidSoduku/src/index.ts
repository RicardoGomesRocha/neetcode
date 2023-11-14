function isArrayValid(array: string[]): boolean {
  const map = new Map<string, boolean>();
  for (let value of array) {
    if (map.get(value)) return false;
    if (value !== '.') map.set(value, true);
  }
  return true;
}

function checkLines(board: string[][]): boolean {
  for (const line of board) {
    if (!isArrayValid(line)) return false;
  }
  return true;
}

function checkColumns(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    const columns: string[] = [];
    for (let j = 0; j < 9; j++) {
      columns.push(board[j][i]);
    }
    if (!isArrayValid(columns)) return false;
  }
  return true;
}

function checkSquares(board: string[][]): boolean {
  let lineIndex = 0;
  let columnIndex = 0;
  for (let numberOfSquares = 0; numberOfSquares < 9; numberOfSquares++) {
    let square: string[] = [
      board[columnIndex][lineIndex],
      board[columnIndex + 1][lineIndex],
      board[columnIndex + 2][lineIndex],
      board[columnIndex][lineIndex + 1],
      board[columnIndex + 1][lineIndex + 1],
      board[columnIndex + 2][lineIndex + 1],
      board[columnIndex][lineIndex + 2],
      board[columnIndex + 1][lineIndex + 2],
      board[columnIndex + 2][lineIndex + 2],
    ];
    lineIndex += 3;
    if (lineIndex >= 9) {
      lineIndex = 0;
      columnIndex += 3;
    }
    if (!isArrayValid(square)) return false;
  }
  return true;
}

export function isValidSudoku(board: string[][]): boolean {
  if (!checkLines(board)) return false;
  if (!checkColumns(board)) return false;
  if (!checkSquares(board)) return false;
  return true;
}
