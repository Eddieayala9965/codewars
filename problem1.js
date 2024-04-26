// // 1. Fizz Buzz
// // Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz." For numbers which are multiples of both three and five, print "FizzBuzz."

// const fizzBuzz = () => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 7 === 0) {
//       console.log("Bang");
//     }
//   }
// };

// // fizzBuzz();

// // 2. Palindrome Checker
// // Create a function that checks if a string is a palindrome (a string that reads the same forward and backward). Ignore spaces, punctuation, and case sensitivity in your check.

// const palindromeChecker = (str) => {
//   const reversedStr = str.split("").reverse().join("");
//   return str === reversedStr;
// };

// console.log(palindromeChecker("racecar"));

// // 3. Factorial Finder
// // Write a function that returns the factorial of a given number. The factorial of a number is the product of all positive integers less than or equal to the number.

// const factorialFinder = (num) => {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   console.log(result);
//   return result;
// };
// // factorialFinder(5);

// // 4. Fibonacci Sequence
// // Generate a function that returns the first n numbers of the Fibonacci sequence. In this sequence, each number is the sum of the two preceding ones, starting from 0 and 1.

// // 5. Sum of Multiples
// // Write a program that finds the sum of all the multiples of 3 or 5 below a given number.

// // 6. Anagram Detection
// // Create a function that determines if two strings are anagrams of each other. Two strings are anagrams if both contain the same letters with the same frequency (order does not matter).

// // 7. Find the Missing Number
// // You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in the list. One of the integers is missing in the list. Write a program to find it.

// // 8. Character Frequency
// // Write a function that takes a string and prints the frequency of the characters contained in it. For example, given the string "hello", it should print something like:

// // h: 1
// // e: 1
// // l: 2
// // o: 1
// // 9. Reverse a String
// // Write a function that reverses a string. Try to do this in at least two different ways: using built-in methods and manually.

// // 10. Max and Min in a List
// // Create a function that takes a list of numbers and returns a tuple containing the smallest and largest numbers in the list.

// // 1. Sum of Two Numbers
// // Task: Write a function that takes two numbers as arguments and returns their sum.

// const SumOfNum = (num1, num2) => {
//   return num1 + num2;
// };
// // console.log(SumOfNum(5, 10));

// // 3. Array Length
// // Task: Write a function that takes an array as an argument and returns the length of the array.

// const arrayLength = (arr) => {
//   return arr.length;
// };
// // console.log(arrayLength([1, 2, 3, 4, 5]));

// // 4. Even or Odd
// // Task: Write a function that takes a number as an argument and prints "Even" if the number is even and "Odd" if the number is odd.

// const evenOrOdd = (num) => {
//   if (num % 2 === 0) {
//     return console.log("Even");
//   } else {
//     return console.log("Odd");
//   }
// };

// // 5. Max Number
// // Task: Write a function that takes two numbers as arguments and returns the larger number.

// const maxNum = (num1, num2) => {
//   return num1 + num2;
// };

// // 6. Convert Minutes into Seconds
// // Task: Write a function that takes a number representing minutes and returns the equivalent number of seconds.

// const convertMinToSec = (min) => {
//   return console.log(min * 60);
// };
// convertMinToSec(5);

// // 7. Reverse a String
// // Task: Write a function that takes a string and returns it reversed.

// const reverseString = (str) => {
//   return console.log(str.split("").reverse().join(""));
// };
// reverseString("read");

// // 8. Find the Largest Number in an Array
// // Task: Write a function that takes an array of numbers and returns the largest number.

// const numberArr = [1, 3, 4, 20, 21, 45, 34];
// const largeNum = (arr) => {
//   return Math.max(...arr);
// };
// console.log(largeNum(numberArr));

// // 9. Check for Leap Year
// // Task: Write a function that determines whether a given year is a leap year.

// const leapYear = (year) => {
//   if (year % 400 === 0) {
//     return true;
//   }
//   if (year % 100 === 0) {
//     return false;
//   }
//   return year % 4 === 0;
// };

// // 10. Simple Temperature Conversion
// // Task: Write two functions: one that converts Celsius to Fahrenheit and another that converts Fahrenheit to Celsius.

// const tempConverstion = (cel) => {
//   return cel * 1.8 + 32;
// };
// const tempConverstion2 = (feh) => {
//   return feh - 32 / 1.8;
// };
// console.log(tempConverstion2(104));

// console.log(tempConverstion(40));

// Sum of numbers from 1 to N:
// Challenge: Write a function that returns the sum of all numbers from 1 to a given number n.

const sumToN = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += 1;
  }
  return sum;
};

// console.log(sumToN(2));

// Print numbers in reverse order:
// Challenge: Write a function that prints numbers from n down to 1.
// Solution:

const reverseOrder = (n) => {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
};

// reverseOrder(10);

// Print even numbers from 1 to N:
// Challenge: Write a function that prints all even numbers from 1 to n.

const evenNum = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
evenNum(10);

// Print a pattern of stars:
// Challenge: Write a function that prints a pattern of stars up to n lines, such as:

const starPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
};
starPattern(5);

// Find the factorial of a number:
// Challenge: Write a function that returns the factorial of a given number n.

// Print multiplication table:
// Challenge: Write a function that prints the multiplication table for a given number n.

const multiplication = (n) => {
  for (let i = 0; i <= n; i++) {
    console.log(`${n} + ${i} = ${i * n}`);
  }
};
multiplication(2);

// Count occurrences of a character in a string:
// Challenge: Write a function that counts the occurrences of a given character char in a string str.

const string = (string) => {
  for (let i = 0; i <= string.length; i++) {
    console.log(i);
  }
};
string("hello world");

// Check if a number is prime:
// Challenge: Write a function that checks whether a given number n is a prime number.

// Print numbers that are divisible by 3 and 5:
// Challenge: Write a function that prints numbers from 1 to n that are divisible by both 3 and 5.

const fiveThree = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
};

// Challenge 1: Find the maximum number in an array

const maxNum = (arr) => {
  return Math.max(...arr);
};
console.log([3, 10, 234, 4, 56, 76, 64, 74, 23, 53]);

// Challenge 2: Calculate the sum of all numbers in an array

// Challenge 3: Check if an array contains a specific number

// Challenge 4: Remove duplicates from an array

// Challenge 5: Find the average of numbers in an array

// Challenge 6: Reverse an array

// Challenge 7: Find the smallest number in an array

// Challenge 8: Merge two arrays and remove duplicates

// Challenge 9: Convert an array of strings to uppercase

// Challenge 10: Filter out odd numbers from an array
