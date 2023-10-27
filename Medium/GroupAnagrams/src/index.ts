type AnagramHashTable = { [key: string]: number };
type GroupAnagramHashTable = { [key: string]: string[] };

function getDefaultHash(): AnagramHashTable {
  return {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    y: 0,
    x: 0,
    z: 0,
  };
}

function getHashTable(str: string): AnagramHashTable {
  const hash: AnagramHashTable = getDefaultHash();
  for (const s of str) hash[s] += 1;
  return hash;
}

function getKey(s: string): string {
  const hash = getHashTable(s);
  let key = '';
  for (const char in hash) key = `${key},${hash[char]}${char}`;
  return key;
}

function getGroupedAnagrams(hash: GroupAnagramHashTable): string[][] {
  const array = new Array<Array<string>>();
  for (let key in hash) array.push(hash[key]);
  return array;
}

export function groupAnagrams(strs: string[]): string[][] {
  const hash: GroupAnagramHashTable = {};
  for (const str of strs) {
    const key = getKey(str);
    if (!hash[key]) hash[key] = [];
    hash[key].push(str);
  }
  return getGroupedAnagrams(hash);
}
