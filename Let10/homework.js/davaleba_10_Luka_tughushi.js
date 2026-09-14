

// 1. რა განსხვავებაა let, const და var-ს შორის?
// let -> მნიშვნელობის შეცვლა (re-assignment) ნებადართულია. Block Scope.
// const -> მნიშვნელობის შეცვლა აკრძალულია (მუდმივია). Block Scope.

let userScore = 10;
userScore = 20; // ნებადართულია

const maxPoints = 100;
// maxPoints = 150; // შეცდომა: Assignment to constant variable.


// 2. რა განსხვავებაა Primitive და Non-Primitive ტიპებს შორის?
// Primitive (String, Number, Boolean, null, undefined, Symbol, BigInt):
// - ინახავს უშუალოდ მნიშვნელობას stack-ში.
// - ცვლილებისას იქმნება ახალი ასლი.
let name1 = "გიორგი";
let name2 = name1; 
name2 = "ანა"; // name1 კვლავ "გიორგი"-ა

// Non-Primitive (Object, Array, Function):
// - ინახავს მისამართს (Reference) memory heap-ში.
// - ცვლილება აისახება ყველა ცვლადზე, რომელიც ამ მისამართზე მიუთითებს.
let user1 = { name: "გიორგი" };
let user2 = user1;
user2.name = "ანა"; // user1.name-იც გახდა "ანა"!


// 3. რა განსხვავებაა == და === ოპერატორებს შორის?
// == (Abstract Equality) -> ადარებს მხოლოდ მნიშვნელობას (აკეთებს ტიპების გარდაქმნას).
// === (Strict Equality) -> ადარებს მნიშვნელობასაც და ტიპსაც (არ აკეთებს გარდაქმნას).

console.log(5 == "5"); // true (სტრიქონი "5" გარდაიქმნა რიცხვად)
console.log(5 === "5"); // false (Number !== String)


// 4. რა ტიპის არის null?
// typeof null აბრუნებს "object"-ს. ეს არის JavaScript-ის ისტორიული ბაგი (Bug).
// ლოგიკურად null არის პრიმიტიული ტიპი, რომელიც აღნიშნავს "განზრახ ცარიელ მნიშვნელობას".

console.log(typeof null); // "object"


// 5. რა განსხვავებაა function დეკლარაციასა და Arrow Function () => {} შორის?
// 1. სინტაქსი: Arrow function უფრო მოკლეა.
// 2. 'this' კონტექსტი: Arrow function-ს არ აქვს საკუთარი 'this' (იღებს მშობლიური გარემოდან).
// 3. Hoisting: ჩვეულებრივი ფუნქცია ექცევა Hoisting-ში, Arrow function - არა.

// Regular Function
function addNumbers(a, b) {
  return a + b;
}

// Arrow Function
const addNumbersArrow = (a, b) => a + b;


// 6. რას ნიშნავს callback function?
// ქოლბექი არის ფუნქცია, რომელიც არგუმენტის სახით გადაეცემა სხვა ფუნქციას
// იმისათვის, რომ მოგვიანებით (გარკვეული მოქმედების შემდეგ) გაშვითოს.

function greeting(name) {
  console.log(`გამარჯობა, ${name}`);
}

function processUserInput(callback) {
  const name = "დავით";
  callback(name); // callback ტოლია greeting ფუნქციის
}

processUserInput(greeting); // გადავეცით ფუნქცია არგუმენტად


// 7. რა განსხვავებაა map, filter და reduce-ს შორის?
const numbers = [1, 2, 3, 4, 5];

// map -> გარდაქმნის თითოეულ ელემენტს და აბრუნებს იმავე ზომის ახალ მასივს
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// filter -> აბრუნებს ახალ მასივს მხოლოდ იმ ელემენტებით, რომლებიც აკმაყოფილებენ პირობას
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// reduce -> აერთიანებს (აკუმულირებს) მასივის ელემენტებს ერთ საბოლოო მნიშვნელობამდე
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // 15


// 8. რა არის Promise?
// Promise არის ობიექტი, რომელიც წარმოადგენს ასინქრონული ოპერაციის
// მომავალ შედეგს (წარმატებას ან წარუმატებლობას).
// აქვს 3 მდგომარეობა: Pending (ლოდინი), Fulfilled (შესრულებული), Rejected (უარყოფილი).

const myPromise = new Promise((resolve, reject) => {
  let isSuccess = true;
  if (isSuccess) {
    resolve("მონაცემები წარმატებით წამოვიდა!");
  } else {
    reject("დაფიქსირდა შეცდომა.");
  }
});

myPromise
  .then(data => console.log(data))
  .catch(error => console.error(error));


// 9. რა განსხვავებაა Promise.all, Promise.race და Promise.any-ს შორის?
// Promise.all -> ელოდება ყველა Promise-ის წარმატებით დასრულებას. თუ ერთი მაინც გაფუჭდა, ვარდება reject.
// Promise.race -> აბრუნებს იმ Promise-ის შედეგს, რომელიც ყველაზე სწრაფად მორჩება (წარმატებით თუ შეცდომით).
// Promise.any -> აბრუნებს იმ Promise-ის შედეგს, რომელიც ყველაზე სწრაფად მორჩება წარმატებით (იგნორირებას უკეთებს შეცდომებს).


// 10. რას ნიშნავს async/await და რატომ ვიყენებთ?
// async/await არის "სინტაქსური შაქარი" (Syntactic Sugar) Promise-ებისთვის.
// ის საშუალებას გვაძლევს ასინქრონული კოდი დავწეროთ სინქრონული სტილით (.then()-ების გარეშე).

async function fetchData() {
  try {
    // await აჩერებს ფუნქციის შესრულებას, სანამ Promise არ გადაწყდება
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("შეცდომა:", error);
  }
}


// 11. რა განსხვავებაა Class-სა და Object-ს შორის?
// Class -> არის შაბლონი (blueprint) ობიექტების შესაქმნელად.
// Object -> არის ამ შაბლონით შეიქმნილი რეალური ეგზემპლარი (instance).

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}

const myCar = new Car("BMW", "შავი"); // myCar არის ობიექტი, Car არის კლასი


// 12. რას აკეთებს constructor კლასში?
// constructor არის სპეციალური მეთოდი, რომელიც ავტომატურად იძახება `new` სიტყვის გამოყენებისას.
// მისი დანიშნულებაა ობიექტის საწყისი თვისებების (properties) ინიციალიზაცია.


// 13. რა განსხვავებაა Memory Heap-სა და Memory Stack-ს შორის?
// Call Stack -> სწრაფი, სტრუქტურირებული მეხსიერება. ინახავს პრიმიტიულ ტიპებს და ფუნქციის გამოძახების ჩანაწერებს.
// Memory Heap -> დიდი, არასტრუქტურირებული მეხსიერების არეალი. ინახავს ობიექტებს, მასივებსა და ფუნქციებს.


// 14. რა არის ქოლსტეკი (Call Stack)?
// Call Stack არის JavaScript ძრავის მექანიზმი, რომელიც ადევნებს თვალყურს,
// თუ რომელი ფუნქციებია გამოძახებული და რა თანმიმდევრობით უნდა შესრულდეს.
// მუშაობს LIFO (Last In, First Out) პრინციპით.


// 15. რა არის ივენთ ლუპი (Event Loop)?
// JavaScript არის single-threaded (ერთნაკადიანი). 
// Event Loop არის მექანიზმი, რომელიც მუდმივად ამოწმებს Call Stack-ს.
// თუ Call Stack ცარიელია, მას გადააქვს ასინქრონული ოპერაციების ქოლბექები 
// (Callback Queue-დან ან Microtask Queue-დან) Call Stack-ში შესასრულებლად.