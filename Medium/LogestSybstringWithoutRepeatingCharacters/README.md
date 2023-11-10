# Top K Frequent Elements

_Exercise can be found here: <https://leetcode.com/problems/longest-substring-without-repeating-characters/description/>_

Given a string s, find the length of the longest substring without repeating characters.

## Example 1

```javascript
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

## Example 2

```javascript
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

## Example 3

```javascript
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Constraints

- `1 <= nums.length <= 105`
- `-104 <= nums[i] <= 104`
- k is in the range [1, the number of unique elements in the array].
- It is guaranteed that the answer is unique.
