// equality and unequality
let apple = "apple ";
let upperCase = "APPLE";
let ten = 10;
let twenty =20;
let vegetables =["carrot","potato","tomato"];
console.log("apple is equal to a apple?");
console.log(apple == "apple "); 
console.log("apple is not equal to a apple?");
console.log(apple != "apple "); 

console.log("Is APPLE is equal to apple after covering to lowercase ?");
console.log(upperCase.toLowerCase() == "apple");

console.log("Is APPLE is equal to apple after covering to lowercase ?");
console.log(upperCase.toLowerCase() != "apple");

// numerical test
console.log("ten is equal to twenty?");
console.log(ten == twenty);

console.log("ten is not equal to twenty?");
console.log(ten != twenty);

console.log("ten is greater than zero?");
console.log(ten > 0);

console.log("twenty is less than  10?");
console.log(twenty < 10);

// using greater then, less then ,equal
console.log("ten is greater than or equal to  5?");
console.log(twenty >= 5);

console.log("twenty is less than or equal to  10?");
console.log(twenty <= 10);

// using && and operater
console.log("twenty is not equal to  10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty >10);

console.log("twenty is not equal to  10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty >40);

// using OR || operater
console.log("20 is greater than 50 or 20 is equal to 20?");
console.log(20 > 50 || 20==20);

console.log("20 is greater than 50 or 20 is not equal to 20?");
console.log(20 > 50 || 20!=20);

// test whether an item is include in array 
console.log("potato include in my vegetables array");
console.log(vegetables.includes("potato"));

console.log("potato not include in my vegetables array");
console.log(!vegetables.includes("potato"));




