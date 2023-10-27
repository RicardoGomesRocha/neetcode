type AnagramHashTable = { [key: string]: number };
type GroupAnagramHashTable = { [key: string]: string[] };

function getHashTable(str: string): AnagramHashTable {
  const hash: AnagramHashTable = {};
  for (const s of str) {
    if (!hash[s]) hash[s] = 0;
    hash[s]++;
  }
  return hash;
}

function isAnagram(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;

  const hash1: AnagramHashTable = getHashTable(s1);
  const hash2: AnagramHashTable = getHashTable(s2);

  for (const key in hash1) {
    if (hash1[key] != hash2[key]) return false;
  }

  return true;
}

function anagramExistsInHashTable(
  hash: GroupAnagramHashTable,
  str: string
): string | null {
  for (const s in hash) if (isAnagram(s, str)) return s;
  return null;
}

function getGroupedAnagrams(hash: GroupAnagramHashTable): string[][] {
  const array = new Array<Array<string>>();
  for (let key in hash) array.push(hash[key]);
  return array;
}

export function groupAnagrams(strs: string[]): string[][] {
  const hash: GroupAnagramHashTable = {};
  for (const str of strs) {
    const anagramKey = anagramExistsInHashTable(hash, str);
    if (anagramKey === null) hash[str] = [str];
    else hash[anagramKey].push(str);
  }
  return getGroupedAnagrams(hash);
}
