// ArrayTasks

// 1)let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop

// let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]];

// function flattenArray(nestedArr) {
//   let flat = [];
//   function rec(element) {
//     if (Array.isArray(element)) {
//       for (let i = 0; i < element.length; i++) {
//         rec(element[i]);
//       }
//     } else {
//       flat.push(element);
//     }
//   }
//   rec(nestedArr);
//   return flat;
// }

// let flatArr = flattenArray(arr);
// let uniqueArr = [];

// for (let i = 0; i < flatArr.length; i++) {
//   if (!uniqueArr.includes(flatArr[i])) {
//     uniqueArr.push(flatArr[i]);
//   }
// }

// for (let i = 0; i < uniqueArr.length; i++) {
//   for (let j = 0; j < uniqueArr.length - 1 - i; j++) {
//     if (uniqueArr[j] > uniqueArr[j + 1]) {
//       let temp = uniqueArr[j];
//       uniqueArr[j] = uniqueArr[j + 1];
//       uniqueArr[j + 1] = temp;
//     }
//   }
// }

// console.log("--- Array Task 1 ---");
// console.log(uniqueArr);

// 2)let products = [
//   { name:"Phone", price:1200, rating:4.5 },
//   { name:"Laptop", price:2500, rating:4.8 },
//   { name:"Book", price:30, rating:4.9 },
//   { name:"TV", price:800, rating:4.0 }
// ]
// იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.

// let products = [
//   { name: "Phone", price: 1200, rating: 4.5 },
//   { name: "Laptop", price: 2500, rating: 4.8 },
//   { name: "Book", price: 30, rating: 4.9 },
//   { name: "TV", price: 800, rating: 4.0 }
// ];

// let filteredProducts = products.filter(product => product.price < 1000);

// let highestRated = filteredProducts.reduce((max, product) => {
//   return product.rating > max.rating ? product : max;
// }, filteredProducts[0]);

// console.log("\n--- Array Task 2 ---");
// console.log(highestRated);

// 3)let sentence = "dog cat dog bird cat dog fish bird"
// რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული

// let sentence = "dog cat dog bird cat dog fish bird";
// let words = sentence.split(" ");

// let wordCounts = words.reduce((acc, word) => {
//   acc[word] = (acc[word] || 0) + 1;
//   return acc;
// }, {});

// let mostFrequentWord = "";
// let maxCount = 0;
// let keys = Object.keys(wordCounts);

// for (let i = 0; i < keys.length; i++) {
//   let word = keys[i];
//   if (wordCounts[word] > maxCount) {
//     maxCount = wordCounts[word];
//     mostFrequentWord = word;
//   }
// }

// console.log("\n--- Array Task 3 ---");
// console.log("Counts:", wordCounts);
// console.log(`Most frequent: "${mostFrequentWord}" repeated ${maxCount} times`);


// ForLoop tasks

// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში. 

// function countLetter(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log("\n--- ForLoop Task 1 ---");
// console.log(countLetter("javascript", "a"));

// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig) 

// function isPalindrome(str) {
//   let cleaned = str.toLowerCase();
//   for (let i = 0; i < cleaned.length / 2; i++) {
//     if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log("\n--- ForLoop Task 2 ---");
// console.log(isPalindrome("ana"));
// console.log(isPalindrome("javascript"));

// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.

// function mergeUniqueSum(arr1, arr2) {
//   let combined = arr1.concat(arr2);
//   let unique = [...new Set(combined)];
//   let sum = unique.reduce((acc, curr) => acc + curr, 0);
//   return { unique, sum };
// }

// console.log("\n--- ForLoop Task 3 ---");
// console.log(mergeUniqueSum([1, 2, 3], [3, 4, 5]));

//  4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად. 

// function factorial(n) {
//   if (n < 0) return undefined;
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log("\n--- ForLoop Task 4 ---");
// console.log(factorial(5));

// 5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]

// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
//   return null;
// }

// console.log("\n--- ForLoop Task 5 ---");
// console.log(twoSum([1, 2, 3, 4, 5, 6, -7, -8], -15));