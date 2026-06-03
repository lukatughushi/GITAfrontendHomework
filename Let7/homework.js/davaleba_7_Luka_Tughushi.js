// 1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: getPerimeter(), getArea() , isRightTriangle().
// class Triangle {
//   constructor(a, b, c) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }

//   getPerimeter() {
//     return this.a + this.b + this.c;
//   }

//   getArea() {
//     const s = this.getPerimeter() / 2;
//     return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
//   }

//   isRightTriangle() {
//     const sides = [this.a, this.b, this.c].sort((x, y) => x - y);
//     return Math.pow(sides[0], 2) + Math.pow(sides[1], 2) === Math.pow(sides[2], 2);
//   }
// }

// const myTriangle = new Triangle(3, 4, 5);
// console.log("--- 1) Triangle Test ---");
// console.log("Perimeter:", myTriangle.getPerimeter()); 
// console.log("Area:", myTriangle.getArea()); 
// console.log("Is Right Triangle?:", myTriangle.isRightTriangle());

// 2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear. გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore და batteryCapacity, და დაამატე მეთოდი performanceIndex().
// class Smartphone {
//   constructor(brand, model, releaseYear) {
//     this.brand = brand;
//     this.model = model;
//     this.releaseYear = releaseYear;
//   }
// }

// class GamingPhone extends Smartphone {
//   constructor(brand, model, releaseYear, gpuScore, batteryCapacity) {
//     super(brand, model, releaseYear);
//     this.gpuScore = gpuScore;
//     this.batteryCapacity = batteryCapacity;
//   }

//   performanceIndex() {
//     return (this.gpuScore * 0.7) + (this.batteryCapacity * 0.3);
//   }
// }

// const myGamingPhone = new GamingPhone("ASUS", "ROG Phone 8", 2024, 95, 5500);
// console.log("\n--- 2) Smartphone Test ---");
// console.log(`Phone: ${myGamingPhone.brand} ${myGamingPhone.model}`);
// console.log("Performance Index:", myGamingPhone.performanceIndex());

// 3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),

// class CryptoWallet {
//   constructor(initialBalance = 0) {
//     this.balance = initialBalance;
//     this.history = [];
//   }

//   deposit(amount) {
//     this.balance += amount;
//     this.history.push({ type: 'deposit', amount, date: new Date().toLocaleTimeString() });
//     return this.balance;
//   }

//   withdraw(amount) {
//     if (amount > this.balance) {
//       return 'Insufficient funds';
//     }
//     this.balance -= amount;
//     this.history.push({ type: 'withdraw', amount, date: new Date().toLocaleTimeString() });
//     return this.balance;
//   }

//   transfer(amount, recipientWallet) {
//     if (amount > this.balance) {
//       return 'Transfer failed: Insufficient funds';
//     }
//     this.balance -= amount;
//     recipientWallet.deposit(amount);
//     this.history.push({ type: 'transfer', amount, to: recipientWallet.constructor.name, date: new Date().toLocaleTimeString() });
//     return this.balance;
//   }

//   getHistory() {
//     return this.history;
//   }
// }

// const walletA = new CryptoWallet(100);
// const walletB = new CryptoWallet(10);

// console.log("\n--- 3) CryptoWallet Test ---");
// walletA.deposit(50);
// walletA.transfer(30, walletB);
// walletA.withdraw(20);
// console.log("Wallet A Balance:", walletA.balance);
// console.log("Wallet B Balance:", walletB.balance);
// console.log("Wallet A History:", walletA.getHistory());

// 4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()

// class Wishlist {
//   constructor() {
//     this.items = [];
//   }

//   addItem(item) {
//     this.items.push(item);
//     return this.items;
//   }

//   deleteItem(id) {
//     this.items = this.items.filter(item => item.id !== id);
//     return this.items;
//   }

//   updateItem(id, updatedData) {
//     this.items = this.items.map(item => 
//       item.id === id ? { ...item, ...updatedData } : item
//     );
//     return this.items;
//   }
// }

// const myWishlist = new Wishlist();
// console.log("\n--- 4) Wishlist Test ---");
// myWishlist.addItem({ id: 1, name: "Keyboard", price: 100 });
// myWishlist.addItem({ id: 2, name: "Mouse", price: 50 });
// myWishlist.updateItem(1, { price: 85 });
// myWishlist.deleteItem(2);
// console.log("Current Wishlist Items:", myWishlist.items);

// 5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(), რომელიც დათვლის შემოსავალს შესრულებული საათებისა და საათობრივი ტარიფის მიხედვით, დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).

// class Freelancer {
//   constructor(name, hourlyRate) {
//     this.name = name;
//     this.hourlyRate = hourlyRate;
//   }

//   calculateEarnings(hoursWorked, bonusRate = 0) {
//     const regularHours = Math.min(hoursWorked, 160);
//     const overtimeHours = Math.max(0, hoursWorked - 160);
    
//     const regularEarnings = regularHours * this.hourlyRate;
//     const overtimeEarnings = overtimeHours * (this.hourlyRate + bonusRate);
    
//     return regularEarnings + overtimeEarnings;
//   }
// }

// const freelancer = new Freelancer("Luka", 25);
// console.log("\n--- 5) Freelancer Test ---");
// console.log("Earnings (150 hours):", freelancer.calculateEarnings(150, 10));
// console.log("Earnings (180 hours with bonus):", freelancer.calculateEarnings(180, 15));