export function searchMatrix(
  matrix: number[][],
  target: number,
  column = 0,
  line = 0,
  visited: boolean[][] = []
): boolean {
  if (column >= matrix.length || line >= matrix[0].length) return false;
  if (!visited[column]) visited[column] = [];
  if (visited[column][line]) return false;
  visited[column][line] = true;
  if (matrix[column][line] > target) return false;
  if (matrix[column][line] === target) return true;
  if (searchMatrix(matrix, target, column, line + 1, visited)) return true;
  if (searchMatrix(matrix, target, column + 1, line, visited)) return true;
  return false;
}
