# Valid Palindrome

_Exercise can be found here: <https://leetcode.com/problems/group-anagrams/>_

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Example 1

```javascript
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]is a palindrome
```

## Example 2

```javascript
Input: strs = [""]
Output: [[""]] is not a palindrome.
```

## Example 2

```javascript
Input: strs = ['a'];
Output: [['a']];
```

## Constraints

- `1 <= strs.length <= 104`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.
