function countFrequency(arr) {
  const map = new Map();

  for (const item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  return map;
}
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const map = new Map();
  for (const char of str1) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (const char of str2) {
    if (!map.has(char)) return false;
    map.set(char, map.get(char) - 1);
    if (map.get(char) < 0) return false;
  }
  return true;
}
console.log("isAnagram('listen', 'silent')", isAnagram('listen', 'silent')); // true
console.log("isAnagram('hello', 'world')", isAnagram('hello', 'world')); // false
console.log("isAnagram('aab', 'ab')", isAnagram('aab', 'ab')); // false
console.log("isAnagram('aab', 'aba')", isAnagram('aab', 'aba')); // true
function sameFrequencyArray(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const map = new Map();

  for (const item of arr1) {
    map.set(item, (map.get(item) ?? 0) + 1);
  }

  for (const item of arr2) {
    if (!map.has(item)) return false;

    map.set(item, map.get(item) - 1);

    if (map.get(item) < 0) return false;
  }

  return true;
}
console.log(
  'sameFrequencyArray([1, 2, 2, 3], [2, 1, 3, 2])',
  sameFrequencyArray([1, 2, 2, 3], [2, 1, 3, 2]),
); // true
console.log(
  'sameFrequencyArray([1, 2, 2, 3], [1, 2, 3])',
  sameFrequencyArray([1, 2, 2, 3], [1, 2, 3]),
); // false
console.log(
  "sameFrequencyArray(['a', 'b', 'a'], ['b', 'a', 'a'])",
  sameFrequencyArray(['a', 'b', 'a'], ['b', 'a', 'a']),
); // true
console.log(
  "sameFrequencyArray(['a', 'b', 'a'], ['a', 'b', 'b'])",
  sameFrequencyArray(['a', 'b', 'a'], ['a', 'b', 'b']),
); // false
console.log('sameFrequencyArray([], [])', sameFrequencyArray([], [])); // true
function mostFrequent(arr) {
  if (arr.length === 0) return null;

  const map = new Map();

  let maxItem = null;
  let maxCount = 0;

  for (const item of arr) {
    const count = (map.get(item) ?? 0) + 1;

    if (count > maxCount) {
      maxCount = count;
      maxItem = item;
    }
    map.set(item, count);
  }

  return maxItem;
}
console.log('mostFrequent([1, 2, 2, 3, 3, 3])', mostFrequent([1, 2, 2, 3, 3, 3]));
// 3

console.log(
  "mostFrequent(['a', 'b', 'a', 'c', 'b', 'a'])",
  mostFrequent(['a', 'b', 'a', 'c', 'b', 'a']),
);
// "a"

console.log('mostFrequent([5])', mostFrequent([5]));
// 5

console.log('mostFrequent([])', mostFrequent([]));
// null

console.log('mostFrequent([1, 1, 2, 2])', mostFrequent([1, 1, 2, 2]));
// 1 hoặc 2 đều có thể chấp nhận, tùy rule

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const needed = target - num;

    if (map.has(needed)) {
      return [map.get(needed), i];
    }

    map.set(num, i);
  }

  return null;
}
console.log('twoSum([2, 7, 11, 15], 9)', twoSum([2, 7, 11, 15], 9));
// [0, 1]

console.log('twoSum([3, 2, 4], 6)', twoSum([3, 2, 4], 6));
// [1, 2]

console.log('twoSum([3, 3], 6)', twoSum([3, 3], 6));
// [0, 1]

function firstUniqueChar(str) {
  const map = new Map();

  for (const char of str) {
    // count frequency
    const count = map.get(char) ?? 0;
    map.set(char, count + 1);
  }

  for (const char of str) {
    // find first char with count === 1
    if (map.get(char) === 1) return char;
  }

  return null;
}
console.log("firstUniqueChar('leetcode')", firstUniqueChar('leetcode'));
// "l"

console.log("firstUniqueChar('loveleetcode')", firstUniqueChar('loveleetcode'));
// "v"

console.log("firstUniqueChar('aabb')", firstUniqueChar('aabb'));
// null

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log('removeDuplicates([1, 2, 2, 3, 1, 4])', removeDuplicates([1, 2, 2, 3, 1, 4]));
// [1, 2, 3, 4]

console.log("removeDuplicates(['a', 'b', 'a', 'c'])", removeDuplicates(['a', 'b', 'a', 'c']));
// ["a", "b", "c"]

console.log('removeDuplicates([])', removeDuplicates([]));
// []
function removeDuplicatesById(users) {
  const seen = new Set();
  const result = [];

  for (const user of users) {
    // nếu id chưa xuất hiện
    // add id vào seen
    // push user vào result
    if (!seen.has(user.id)) {
      seen.add(user.id);
      result.push(user);
    }
  }

  return result;
}
console.log(
  "removeDuplicatesById([{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'A updated' }, { id: 3, name: 'C' }])",
  removeDuplicatesById([
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 1, name: 'A updated' },
    { id: 3, name: 'C' },
  ]),
);

// [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 3, name: "C" }
// ]

function groupByStatus(items) {
  const result = {};

  for (const item of items) {
    const key = item.status;
    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
}
const tasks = [
  { id: 1, title: 'A', status: 'todo' },
  { id: 2, title: 'B', status: 'done' },
  { id: 3, title: 'C', status: 'todo' },
  { id: 4, title: 'D', status: 'in-progress' },
];
console.log('groupByStatus(tasks)', groupByStatus(tasks));
// {
//   todo: [
//     { id: 1, title: "A", status: "todo" },
//     { id: 3, title: "C", status: "todo" }
//   ],
//   done: [
//     { id: 2, title: "B", status: "done" }
//   ],
//   "in-progress": [
//     { id: 4, title: "D", status: "in-progress" }
//   ]
// }
function groupBy(items, key) {
  const result = {};

  for (const item of items) {
    const field = item[key];
    if (!result[field]) {
      result[field] = [];
    }

    result[field].push(item);
  }

  return result;
}
const users = [
  { id: 1, name: 'A', role: 'admin' },
  { id: 2, name: 'B', role: 'user' },
  { id: 3, name: 'C', role: 'admin' },
];
console.log('groupBy(users, "role");', groupBy(users, 'role'));
