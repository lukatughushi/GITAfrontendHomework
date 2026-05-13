// 1) გაამრავლე თითოეული ელემენტი 3-ზე.
// Input: [1,2,3] - Output: [3,6,9]

// let arr = [1,2,3,]
// let mapArr = arr.map((num) => num * 3)
// console.log(mapArr)

// 2)გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// let filteredArr = arr.filter((num) => num % 3 ===0)

// console.log(filteredArr)

// 3)დააბრუნე ყველა დადებითი რიცხვის ჯამი
// ვერსია:1
// let arr = [1,2,-3,4,-5,6,-7]
// let filteredArr = arr.filter((num) => num > 0)
// let sum = filteredArr.reduce((tot, curr) => tot + curr ,0)
// console.log(sum)
 
// ვერსია:2
// let arr = [1,2,-3,4,-5,6,-7]
// let sum = arr
// .filter((num) => num > 0)
// .reduce((tot, curr) => tot + curr , 0)
// console.log(sum)




// // 4)მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
// let namesArr = ["giorgi","nika","mariami"]
// let lastSym = namesArr.map((name) => name.slice(0, -1))
// console.log(lastSym)

// 5)გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
// let arr = [2,3,4,5,6,7,8,9,10,11,12]
// let main = arr
// .map((num) => num * 2)
// .filter((num) => num % 3 === 0)
// console.log(main)

// 6) დაალაგე რიცხვები ზრდადობით 
// let numsArr = [1,-1,-2,-10,111,3,2,5]
// let sortedArr = numsArr.sort((a,b) => a-b)
// console.log(sortedArr)

// 7)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.
// let arr = [2,3,4,5,6,7,8,9,10,11,12,15]
// let main = arr
// .map((num) => num * 2)
// .filter((num) => num % 5 === 0)
// console.log(main)

// 8)let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unque = [1,2,3]
// let arr = [1,1,1,1,2,2,3,3,3]
// let unique = [...new Set(arr)]
// console.log(unique)

// 9), დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს 
// let arr = [-1,20,90,4,5,111]
// arr.sort((a,b) => a-b) 
// let sumArr = arr[0] + arr[1]
// console.log(sumArr)