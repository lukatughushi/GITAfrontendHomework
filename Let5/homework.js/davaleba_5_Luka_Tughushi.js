// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა
// function countdown(sec) {
//     const timer = setInterval(() => {
//         console.log(sec);
//         if (sec === 0) {
//             clearInterval(timer);
//             console.log("დრო ამოიწურა!");
//         }
//         sec--;
//     }, 1000);
// }

// countdown(5)



// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს

// function matchRandomNumber(targetNumber) {
//     let randomNumber;
    
//     while (randomNumber !== targetNumber) {
//         randomNumber = Math.floor(Math.random() * 10) + 1;
//         console.log(`დაგენერირდა: ${randomNumber}`);
//     }
    
//     console.log(`გილოცავ! რიცხვები დაემთხვა: ${targetNumber}`);
// }

// matchRandomNumber(7);

// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია

// function checkAge(n, callback) {
//     if (n > 27) {
//         callback(); 
//     } else {
//         console.log(`${n} ნაკლებია 27-ზე`);
//     }
// }

// checkAge(35, () => {
//     console.log("ეს ნამდვილად მეტია 27-ზე!");
// });

// checkAge(18, () => {});

// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await

// function fetchUsersWithThen(apiUrl) {
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             const firstFour = data.slice(0, 4);
//             console.log("Then/Catch იუზერები:", firstFour);
//         })
//         .catch(error => {
//             console.error("შეცდომა მონაცემების წამოღებისას:", error);
//         });
// }

// fetchUsersWithThen("https://jsonplaceholder.typicode.com/users");

// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
// let people = [
//   { name: "Giorgi", age: 25 },
//   { name: "Nika", age: 15 },
//   { name: "Mariam", age: 30 },
//   { name: "Luka", age: 18 }
// ];

// let groupedByAge = people.reduce((acc, person) => {
//     if (person.age > 10) {
//         acc.over10.push(person);
//     }
//     if (person.age < 20) {
//         acc.under20.push(person);
//     }
//     return acc;
// }, { over10: [], under20: [] });

// console.log(groupedByAge);

// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".

// function compareNumbers(num1, num2, callback) {
//     if (num1 > num2) {
//         callback("მეტია");
//     } else {
//         console.log("ნაკლები ან ტოლია");
//     }
// }

// compareNumbers(15, 7, (message) => {
//     console.log(message);
// });

// compareNumbers(5, 10, (message) => {
//     console.log(message);
// });

// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და 
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
// let products = [
//   { name: "Mouse", price: 15 },
//   { name: "Keyboard", price: 45 },
//   { name: "USB Cable", price: 7 },
//   { name: "Headphones", price: 29.9 },
//   { name: "Webcam", price: 52 }
// ];

// let groupedProducts = products.reduce((acc, product) => {
//     if (product.price > 20) {
//         acc.expensive.push(product);
//     } else {
//         acc.cheap.push(product);
//     }
//     return acc;
// }, { expensive: [], cheap: [] });

// console.log(groupedProducts);