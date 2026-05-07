// 1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 5-დან 15-მდე
// let emptyBox = []
// for(let i = 5; i <= 15; i++) {
//       emptyBox.push(i)
// }
// console.log(emptyBox)




// 2) დაბეჭდე მასივის ელემენტები უკუღმა let arr = [1,2,3,4,5]
// vers-1

// let arr = [1,2,3,4,5]
// let arrRevers = arr.reverse()
// console.log(arrRevers)

// vers-2

// let arr = [1,2,3,4,5]
// console.log(arr.reverse())

// 3) იპოვე მასივში მინიმალური რიცხვი let arr = [100,2,3,9]

// let arr = [100,2,3,9]
// let min = arr[0]
// for( let i = 0; i < arr.length ; i++){
//     if (arr[i] < min ){
//         min = arr[i]
//     }
// }
// console.log(min)

// 4) ამოიღე შუა 3 ელემენტი slice-ით.let arr = [1,2,3,4,5,6,7]

// let arr = [1,2,3,4,5,6,7]
// console.log(arr.slice(2,5))

// 5) გააერთიანე ორი მასივი let arr1 = [1,2] let arr2=[3,4]

// vers-1

// let arr1 = [1,2] 
// let arr2=[3,4]
// let allArr = arr1.concat(arr2)
// console.log(allArr)

// vers-2

// let arr1 = [1,2]
// let arr2 = [3,4]
// let allArr = []
// for( let i = 0; i < arr1.length; i++){
//         allArr.push(arr1[i])
// }
// for( let i = 0; i < arr2.length; i++){
//     allArr.push(arr2[i])
// }
// console.log(allArr)

// 6) წაშალე დუბლირებული ელემენტები let arr = [1,2,3,4,5,6,6,7,7]
// let arr = [1,2,3,4,5,6,6,7,7]
// let originArr = []
// for(let i = 0; i <arr.length; i++){
//         if(!originArr.includes(arr[i])){
//             originArr.push(arr[i])
//         }
// }
// console.log(originArr)

// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0  let arr = [1,2,3,4,5,6,7]

// let arr = [1,2,3,4,5,6,7]
// let even = []
// let odd = []
// for( let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//           even.push(arr[i])
//         }else {
//             odd.push(arr[i])
//         }
// }


// console.log(` ლუწი რიცსვები: ${even} კენტი რიცხვები: ${odd}`)

// 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი. let arr = [1,2,3,4,5,6,7,-1,-2,-3,-4]

// let arr = [1,2,3,4,5,6,7,-1,-2,-3,-4]
// let count = 0
// let sum = 0
// for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//           count +=  1
//         }else if(arr[i] < 0){
//           sum += arr[i]
//         }
// }
//   console.log("დადებითირიცხვების რაოდენობა უდრის: " + count)
//   console.log("უარყოფითი რიცხვბეის ჯამი უდროს: " + sum)

// 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])
 
// let arr = [1,-2]
// let arrRev = []
// for( let i = 0; i < arr.length; i++){
 
//         arrRev.push(-arr[i])
// }
// console.log(arrRev)

// 10) let arr = [1,[2,[3]],[4] შენი მიზანია მიიღო [1,2,3,4]

// let arr = [1,[2,[3]],[4]]
// let corectArr = []
// let finalArr = []
// for (let i = 0; i < arr.length; i++){
//     corectArr = corectArr.concat(arr[i])

// }
// for (let i = 0; i < corectArr.length; i++){
//       finalArr = finalArr.concat(corectArr[i])
// }

// console.log(finalArr)

// 11)let fruits = ["apple", "banana", "orange", "kiwi"] წაშალე "banana" მასივიდან splice()-ით
// "orange"-ის წინ დაამატე "mango"
// ბოლოს დაბეჭდე ახალი მასივი.
// splice-მ არ დაგაბნიოთ splice(საიდან დაიწოს,რამდენი წაშალოს,რითიჩაანაცვლოს)

// let fruits = ["apple", "banana", "orange", "kiwi"] 
// fruits.splice(1, 1, "mango")
// console.log(fruits)