// 1) function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// console.log("one")
// block()
// console.log("two")
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი

// function block() {
//     return new Promise((resolve) => {
        
//         setTimeout(() => {
//             for (let i = 1; i < 100000000; i++) {} 
//             console.log("ფუნქცია block() დასრულდა")
//             resolve();
//         }, 0);
//     });
// }

// console.log("one")


// block();

// console.log("two")


// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.


// const successfulPromise = new Promise((resolve) => {
//     resolve("წარმატება: მონაცემები მოვიდა!")
// });

// const failedPromise = new Promise((resolve, reject) => {
//     reject("შეცდომა: კავშირი გაწყდა!");
// });


// successfulPromise
//     .then((result) => console.log("ცალკე (წარმატებული):", result))
//     .catch((error) => console.error("ცალკე (შეცდომა):", error));

// failedPromise
//     .then((result) => console.log("ცალკე (წარმატებული):", result))
//     .catch((error) => console.error("ცალკე (შეცდომა):", error))


// Promise.allSettled([successfulPromise, failedPromise])
//     .then((results) => {
//         console.log("ჯგუფური შედეგი (AllSettled):", results)
//     });

// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული


// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p1 დარეჯექთდა 1 წამში"), 1000)
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p2 წარმატებით შესრულდა 2 წამში! "), 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p3 წარმატებით შესრულდა 0.5 წამში! "), 500)
// });

// const p4 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p4 დარეჯექთდა 0.1 წამში"), 100)
// });

// Promise.any([p1, p2, p3, p4])
//     .then((firstResolved) => {
//         console.log("პირველი დარესოლვებული პრომისი:", firstResolved)
//     })
//     .catch((error) => {
//         console.error("ყველა პრომისი ჩაიშალა:", error)
//     });

// 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი


// const p1 = Promise.resolve("წარმატება 1")
// const p2 = Promise.reject("შეცდომა 1") 
// const p3 = Promise.resolve("წარმატება 2")
// const p4 = Promise.reject("შეცდომა 2")


// Promise.allSettled([p1, p2, p3, p4])
//     .then((results) => {
      
//         const stats = results.reduce((acc, currentPromise) => {
//             if (currentPromise.status === "fulfilled") {
//                 acc.successful++
//             } else if (currentPromise.status === "rejected") {
//                 acc.failed++
//             }
//             return acc
//         }, { successful: 0, failed: 0 }); // საწყისი მნიშვნელობა

//         console.log("შედეგი:", stats)
//     });



// 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები

// const p1 = Promise.resolve("წარმატება 1")
// const p2 = Promise.reject("შეცდომა 1 (სერვერი გათიშულია)")
// const p3 = Promise.resolve("წარმატება 2")
// const p4 = Promise.reject("შეცდომა 2 (არასწორი პაროლი)")
// const p5 = Promise.resolve("წარმატება 3")


// Promise.allSettled([p1, p2, p3, p4, p5])
//     .then((results) => {
   
//         const failedPromises = results.filter(currentPromise => currentPromise.status === "rejected")

//         console.log("მხოლოდ წარუმატებელი პრომისები:", failedPromises)
//     })

// 6)api1 = https://jsonplaceholder.typicode.com/users
// api2 = https://jsonplaceholder.typicode.com/posts
// გაუშვი ეს ორი API ერთდროულად


// async function fetchMultipleAPIs() {
//     const api1 = "https://jsonplaceholder.typicode.com/users"
//     const api2 = "https://jsonplaceholder.typicode.com/posts"

//     try {

//         const [usersResponse, postsResponse] = await Promise.all([
//             fetch(api1),
//             fetch(api2)
//         ]);

     
//         const [users, posts] = await Promise.all([
//             usersResponse.json(),
//             postsResponse.json()
//         ]);

//         console.log("მომხმარებლები (users):", users.slice(0, 2))
//         console.log("პოსტები (posts):", posts.slice(0, 2))

//     } catch (error) {
//         console.error("მონაცემების წამოღებისას მოხდა შეცდომა:", error)
//     }
// }

// fetchMultipleAPIs();