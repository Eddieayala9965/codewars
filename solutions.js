function reverseCount(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

function printEvenNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

function printStars(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function printMultiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

function countCharacter(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function divisibleBy3And5(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
}

const findMax = (arr) => {
  return Math.max(...arr);
};
console.log(findMax([1, 5, 2, 8, 3])); // Answer: 8

const sumArray = (arr) => {
  return arr.reduce((acc, num) => acc + num, 0);
};
console.log(sumArray([1, 2, 3, 4, 5])); // Answer: 15

const containsNumber = (arr, num) => {
  return arr.includes(num);
};
console.log(containsNumber([1, 2, 3, 4], 3)); // Answer: true

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 3, 2, 1])); // Answer: [1, 2, 3]

const findAverage = (arr) => {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
};
console.log(findAverage([10, 20, 30, 40])); // Answer: 25

const reverseArray = (arr) => {
  return arr.reverse();
};

console.log(reverseArray([1, 2, 3, 4])); // Answer: [4, 3, 2, 1]

const findMin = (arr) => {
  return Math.min(...arr);
};
console.log(findMin([4, 2, 8, 1, 5])); // Answer: 1

const mergeArrays = (arr1, arr2) => {
  const merged = arr1.concat(arr2);
  return [...new Set(merged)];
};
console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // Answer: [1, 2, 3, 4, 5]

const toUpperCase = (arr) => {
  return arr.map((str) => str.toUpperCase());
};
console.log(toUpperCase(["hello", "world"])); // Answer: ["HELLO", "WORLD"]

const filterOdds = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

console.log(filterOdds([1, 2, 3, 4, 5])); // Answer: [2, 4]
