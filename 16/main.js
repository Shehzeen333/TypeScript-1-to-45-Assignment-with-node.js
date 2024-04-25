// creating a guest list array 
var guestlist = ["Zara", "Sara", "Shoaib", "Zainab", "Umer"];
// Making variable for those  guest who can't come 
var dontcome = guestlist[0];
// print the name of guest who can't come 
console.log(dontcome, "i am not come today ");
// add or remove values from guest list  array 
guestlist.splice(0, 1, "Mehwish");
// message print for bigger table 
console.log("Good News ! we have found a bigger table for dinner.");
// adding a  new guest  at starting index of array 
guestlist.unshift("Shahzaib");
// adding a new guest  at ending index of array 
guestlist.push("Muzzamil");
// Get a new guest  at middle index of array 
var middleIndex = Math.floor(guestlist.length / 2);
//  adding  a new guest  at middle index of array 
guestlist.splice(middleIndex, 0, "yusra");
// print message of updated list 
console.log("updated list of our guests");
// sending a invitation message to our guests one by one with their names 
guestlist.forEach(function (oneguest) { return console.log("Assalam o Alikum, ".concat(oneguest, " would you like to dinner with me ")); });
