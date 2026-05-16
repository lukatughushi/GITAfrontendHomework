//  1) გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
// const laptops = [
//   { model: "Dell XPS 13", price: 1800 },
//   { model: "MacBook Pro 14", price: 2499 },
//   { model: "Lenovo ThinkPad X1", price: 2100 },
//   { model: "Asus Zephyrus G14", price: 1999 },
// ];

// const mostExpensive = laptops.reduce((highest, current) => {
//   return current.price > highest.price ? current : highest;
// });

// console.log(mostExpensive); 



// 2)შექმენი ობიექტი, რომელსაც ექნება width, height და getArea() მეთოდი, რომელიც დააბრუნებს ფართობს.
// const rectangle = {
//   width: 10,
//   height: 5,
//   getArea() {
//     return this.width * this.height;
//   }
// };

// console.log(rectangle.getArea()); 



// 3)დაბეჭდე მხოლოდ იმ სტუდენტების სახელები, რომელთაც passed === true.
// const students = [
//   { name: "Giorgi", score: 85, passed: true },
//   { name: "Nika", score: 50, passed: false },
//   { name: "Mariam", score: 92, passed: true },
//   { name: "Luka", score: 60, passed: false }
// ];

// const passedStudentsNames = students
//   .filter(student => student.passed) 
//   .map(student => student.name);

// console.log(passedStudentsNames); 


// 4)გაფილტრე ისეთი პროდუქტები, რომლებიც 10$-ზე იაფია და დააბრუნე მხოლოდ მათი სათაურების მასივი.

// const products = [
//   { title: "Pencil", price: 2 },
//   { title: "Notebook", price: 5 },
//   { title: "Backpack", price: 35 },
//   { title: "Ruler", price: 3 },
//   { title: "Calculator", price: 40 }
// ];

// const cheapProducts = products
//   .filter(product => product.price < 10)
//   .map(product => product.title);

// console.log(cheapProducts); 


// 5)დაალაგე ზრდადობით rating-ის მიხედვით

// const movies = [
//   { title: "Inception", rating: 9 },
//   { title: "Avatar", rating: 7.5 },
//   { title: "Joker", rating: 8.2 },
//   { title: "Tenet", rating: 6.9 }
// ];

// const sortedMovies = movies.toSorted((a, b) => a.rating - b.rating);

// console.log(sortedMovies);




// 6)იპოვე ყველაზე იაფი ტელეფონი და გამოიტანე მხოლოდ მისი model

// const phones = [
//   { model: "iPhone 15", price: 1200 },
//   { model: "Samsung Galaxy S24", price: 950 },
//   { model: "Xiaomi Redmi 13", price: 250 },
//   { model: "Pixel 8", price: 800 }
// ];

// const cheapestPhone = phones.reduce((lowest, current) => current.price < lowest.price ? current : lowest)

// console.log(cheapestPhone.model)

// 7)დაბეჭდე 300- გვერდიანზე მეტი 

// const books = [
//   { title: "Harry Potter", pages: 500 },
//   { title: "The Little Prince", pages: 120 },
//   { title: "Lord of the Rings", pages: 700 },
//   { title: "Animal Farm", pages: 250 },
// ];

// const longBooks = books.filter(book => book.pages > 300);
// console.log(longBooks);



// 8)დაალაგე ზრდადობით და შეკრიბე ფასი

// const phones = [
//   { model: "iPhone 15", price: 1200 },
//   { model: "Samsung Galaxy S24", price: 950 },
//   { model: "Xiaomi Redmi 13", price: 250 },
//   { model: "Pixel 8", price: 800 }
// ];


// const sortedPhones = phones.toSorted((a, b) => a.price - b.price);
// console.log("ზრდადობით:", sortedPhones);

// const totalSum = phones.reduce((sum, phone) => sum + phone.price, 0);
// console.log("ჯამური ფასი:", totalSum);
