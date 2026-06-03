// 1)დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს [1,2,3,4,5,6]
// function averageOfEvens(arr) {
//   const evens = arr.filter(num => num % 2 === 0);
//   if (evens.length === 0) return 0;
//   const sum = evens.reduce((acc, curr) => acc + curr, 0);
//   return sum / evens.length;
// }

// console.log("--- Task 1 ---");
// console.log(averageOfEvens([1, 2, 3, 4, 5, 6]));

// 2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.
// let = "I love JavaScript"

// function countWords(sentence) {
//   const words = sentence.trim().split(/\s+/);
//   return words[0] === "" ? 0 : words.length;
// }

// let text = "I love JavaScript";
// console.log("\n--- Task 2 ---");
// console.log(countWords(text));

// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.

// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// console.log("\n--- Task 3 ---");
// console.log(isPrime(7));
// console.log(isPrime(10));

// 4) let words = ["dog", "elephant", "cat", "hippopotamus"] იპოვე ყველაზე გრძელი ისტყვა

// function findLongestWord(wordsArray) {
//   return wordsArray.reduce((longest, current) => {
//     return current.length > longest.length ? current : longest;
//   }, "");
// }

// let words = ["dog", "elephant", "cat", "hippopotamus"];
// console.log("\n--- Task 4 ---");
// console.log(findLongestWord(words));

// 5)let arr = [3, 5, 3, 2, 5, 5, 3, 5] დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ

// function mostFrequentNumber(arr) {
//   const counts = {};
//   let maxCount = 0;
//   let mostFrequent = arr[0];

//   for (let num of arr) {
//     counts[num] = (counts[num] || 0) + 1;
//     if (counts[num] > maxCount) {
//       maxCount = counts[num];
//       mostFrequent = num;
//     }
//   }
//   return mostFrequent;
// }

// let arr = [3, 5, 3, 2, 5, 5, 3, 5];
// console.log("\n--- Task 5 ---");
// console.log(mostFrequentNumber(arr));

// 6)let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია

// function countEvensAndOdds(arr) {
//   let evens = 0;
//   let odds = 0;

//   for (let num of arr) {
//     if (num % 2 === 0) {
//       evens++;
//     } else {
//       odds++;
//     }
//   }

//   return { evens, odds };
// }

// let numsList = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log("\n--- Task 6 ---");
// console.log(countEvensAndOdds(numsList));

// 7)let nums = [10, 2, 33, 5, 7] დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს

// function findMin(arr) {
//   return Math.min(...arr);
// }

// let nums = [10, 2, 33, 5, 7];
// console.log("\n--- Task 7 ---");
// console.log(findMin(nums));