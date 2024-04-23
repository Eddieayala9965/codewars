// 1. Fizz Buzz
// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz." For numbers which are multiples of both three and five, print "FizzBuzz."

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 7 === 0) {
      console.log("Bang");
    }
  }
};

fizzBuzz();

// 2. Palindrome Checker
// Create a function that checks if a string is a palindrome (a string that reads the same forward and backward). Ignore spaces, punctuation, and case sensitivity in your check.

const palindromeChecker = (str) => {
  const reversedStr = str.split("").reverse().join("");
  console.log(str === reversedStr);
  return str === reversedStr;
};
palindromeChecker("racecar");

// 3. Factorial Finder
// Write a function that returns the factorial of a given number. The factorial of a number is the product of all positive integers less than or equal to the number.

const factorialFinder = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  console.log(result);
  return result;
};
factorialFinder(5);

// 4. Fibonacci Sequence
// Generate a function that returns the first n numbers of the Fibonacci sequence. In this sequence, each number is the sum of the two preceding ones, starting from 0 and 1.

// 5. Sum of Multiples
// Write a program that finds the sum of all the multiples of 3 or 5 below a given number.

// 6. Anagram Detection
// Create a function that determines if two strings are anagrams of each other. Two strings are anagrams if both contain the same letters with the same frequency (order does not matter).

// 7. Find the Missing Number
// You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in the list. One of the integers is missing in the list. Write a program to find it.

// 8. Character Frequency
// Write a function that takes a string and prints the frequency of the characters contained in it. For example, given the string "hello", it should print something like:

// h: 1
// e: 1
// l: 2
// o: 1
// 9. Reverse a String
// Write a function that reverses a string. Try to do this in at least two different ways: using built-in methods and manually.

// 10. Max and Min in a List
// Create a function that takes a list of numbers and returns a tuple containing the smallest and largest numbers in the list.

// 1. Sum of Two Numbers
// Task: Write a function that takes two numbers as arguments and returns their sum.

const SumOfNum = (num1, num2) => {
  return num1 + num2;
};
console.log(SumOfNum(5, 10));

// 3. Array Length
// Task: Write a function that takes an array as an argument and returns the length of the array.

const arrayLength = (arr) => {
  return arr.length;
};
console.log(arrayLength([1, 2, 3, 4, 5]));

// 4. Even or Odd
// Task: Write a function that takes a number as an argument and prints "Even" if the number is even and "Odd" if the number is odd.

const evenOrOdd = (num) => {
  if (num === 0 % 2) {
    console.log("");
  }
  if (num === 0 % 3) {
    console.log("odd");
  }
};

// 5. Max Number
// Task: Write a function that takes two numbers as arguments and returns the larger number.
