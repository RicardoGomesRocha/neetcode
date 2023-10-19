type HashTable = { [key: string]: number };

export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const hashS = getHashTable(s);
  const hashT = getHashTable(t);
  return containsHashTable(hashS, hashT);
}

function getHashTable(s: string): HashTable {
  const hash: HashTable = {};
  for (let char of s) {
    if (!hash[char]) hash[char] = 0;
    hash[char] += 1;
  }
  return hash;
}

function containsHashTable(hash1: HashTable, hash2: HashTable): boolean {
  for (const char in hash1) {
    if (hash1[char] !== hash2[char]) return false;
  }
  return true;
}
