# Valid Sudoku

_Exercise can be found here: <https://leetcode.com/problems/search-a-2d-matrix/submissions/>_

You are given an `m x n` integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer `target`, return true if `target` is in matrix or false otherwise.

You must write a solution in O(log(m \* n)) time complexity

**Note:**

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

## Example 1

![Example 1](./mat.jpg)

```javascript
Input: (matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
]),
  (target = 3);
Output: true;
```

## Example 2

![Example 1](./mat.jpg)

```javascript
Input: (matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
]),
  (target = 13);
Output: false;
```

## Constraints

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 100`
- `-104 <= matrix[i][j], target <= 104`
