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
console.log(sameFrequencyArray([1, 2, 2, 3], [2, 1, 3, 2])); // true
console.log(sameFrequencyArray([1, 2, 2, 3], [1, 2, 3])); // false
console.log(sameFrequencyArray(['a', 'b', 'a'], ['b', 'a', 'a'])); // true
console.log(sameFrequencyArray(['a', 'b', 'a'], ['a', 'b', 'b'])); // false
console.log(sameFrequencyArray([], [])); // true
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
console.log('mostFrequent', mostFrequent([1, 2, 2, 3, 3, 3]));
// 3

console.log('mostFrequent', mostFrequent(['a', 'b', 'a', 'c', 'b', 'a']));
// "a"

console.log('mostFrequent', mostFrequent([5]));
// 5

console.log('mostFrequent', mostFrequent([]));
// null

console.log('mostFrequent', mostFrequent([1, 1, 2, 2]));
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
console.log('twoSum', twoSum([2, 7, 11, 15], 9));
// [0, 1]

console.log('twoSum', twoSum([3, 2, 4], 6));
// [1, 2]

console.log('twoSum', twoSum([3, 3], 6));
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
console.log('firstUniqueChar', firstUniqueChar('leetcode'));
// "l"

console.log('firstUniqueChar', firstUniqueChar('loveleetcode'));
// "v"

console.log('firstUniqueChar', firstUniqueChar('aabb'));
// null

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log('removeDuplicates', removeDuplicates([1, 2, 2, 3, 1, 4]));
// [1, 2, 3, 4]

console.log('removeDuplicates', removeDuplicates(['a', 'b', 'a', 'c']));
// ["a", "b", "c"]

console.log('removeDuplicates', removeDuplicates([]));
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
  'removeDuplicates',
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
