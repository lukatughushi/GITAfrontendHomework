//1) let fullName = "Lika Mamaladze" - საბოლოო პასუხი "L.M."
// let fullName = "Lika Mamaladze"
// let splitName = fullName.split(" ")
// console.log(splitName[0][0] + "." + splitName[1][0] + ".")

//სხვა მეთოდი
// let fullName = "Lika Mamaladze"
// let splitName = fullName.split("")
// console.log(splitName[0][0] + "." + splitName[5][0] + ".")


//2) let email = " EXAMPLE@MAIL.COM " - გაწმინდე (trim) და გადაიყვანე lowercase-ში. გადაამოწმე, შეიცავს თუ არა "@"
// let email = " EXAMPLE@MAIL.COM "
// let emailFix = email.trim(" ")
// console.log(emailFix)
// let emailLow =emailFix.toLowerCase()
// console.log(emailLow)
// let emailInclude = emailLow.includes("@")
// console.log(emailInclude)


//3) let str = "luka" ამოიღეთ ბოლო ასო და გადააქციეთ upperCase-ად
// let str = "luka"
// let strLast = str[str.length - 1]
// console.log(strLast)
// let strLastHuge = strLast.toUpperCase()
// console.log(strLastHuge)


//4)გამოიყენე for ლუპი 1-დან 100-მდე რიცხვებზე.
// თუ რიცხვი იყოფა 3-ზე დააბრუნე - "Foo"
// თუ იყოფა 5-ზე დააბრუნე - "Bar"
// თუ იყოფა ორივეზე დააბრუნე - "FooBar"
// თუ არა დააბრუნე - უბრალოდ რიცხვი
// for(let i=1; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("FooBar")
//     }else if ( i % 3 === 0){
//         console.log("Foo")
//     }else if ( i % 5 === 0){
//         console.log("Bar")
//     }else{
//         console.log(i)
//     }
// }


//5)let text = "JS is stupid but sometimes cool" - სიტყვა "stupid" შეცვალე "s****d"-ით.
// let text = "JS is stupid but sometimes cool"
// let  textRep = text.replace("stupid","s****d")
// console.log(textRep)

// -თეორია-

// 1)რამდენი ცვლადი გვაქვს ჯავასკრიპტში.(პასუხი თეორიულად გაეცი)
// ჩვენ გვაქვს სამი ძირითადი თეგი ცვლადის გამოსაძახებლად
// 1. var ცვლადი ES6-მდე. მას თანამედრო პროექტებშ აღარ ვიყენებთ.
// 2. let ეს არის თანამედროვე გზა ცვლადის გამოსაძახებლად.
// 3. const გამოიყენება მუსმივობისთვის.

// 2)რამდენიტიპი გვაქვს ჯავასკრიპტში.(ჩამოთვალე)(პასუხი თეორიულად გაეცი)
// 1.string - ეს არის ტექსტი
// 2.Number - რიცხვი
// 3.Boolean - ლოგიკური ოპერატორი true or false
// 4.undefined - მნიშვნელობის გარეშე, მაგრამ მიღებული
// 5.Null -ცარიელი მნიშვნელობა,მაგრა საჭიროებისამებრ
// 6.bigint - დიდი მთელი რიცხვი
// 7.symbol - ერთადერთი იდენტიფიკატორი
// 8.object - ობიექტები და მასივები ასევე ფინქციები აქ ერთიანდება.

// 3) რომელი მეთოდი აქცევს სტრინგს მასივად.(პასუხი თეორიულად გაეცი)
// სტრინგს მასივად აქცევს Split მეთოდი
// 4) სტრინგი პრიმიტიული ტიპია თუ არა ? .(პასუხი თეორიულად გაეცი)
// სტრინგი პრიმიტიული ტიპია,მაგრამ ჯავასკრიპტს შეუძლია ის გადააქციოს ობიექტად
// 5)ჩამოთვალე რა მეთოდები ვისწავლეთ მაგ -> length(პასუხი თეორიულად გაეცი)
// ჩვენ ვისწავლეთ: 
// .length
// .includes(),
// .indexOf(),
// .charAt(),
// .toUpperCase(),
// .toLowerCase(),
// .trim(),
// .slice(),
// .split(),
// .replace(),
// .replaceAll(),
// .concat().