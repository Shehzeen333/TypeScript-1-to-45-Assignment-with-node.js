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
// adding a new guest  //at ending index of array 
guestlist.push("Muzzamil");
// Get a new guest  at middle index of array 
var middleIndex = Math.floor(guestlist.length / 2);
//  adding  a new guest  at middle index of array 
guestlist.splice(middleIndex, 0, "yusra");
// print message of updated list 
console.log("updated list of our guests");
// sending a invitation message to our guests one by one with their names 
guestlist.forEach(function (oneguest) { return console.log("Assalam o Alikum, ".concat(oneguest, " would you like to dinner with me ")); });
// inform that only two guests can be invited for dinner 
console.log("unfortunately, the new dinner table won't arrive on time , so i can only invite two guest to dinner with me ?");
// using while.loop to remove guests from the array until only two name remain 
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("Sorry, ".concat(removedGuest, " i can't invite you to dinner ."));
}
// sending a invitation to the last  two guest on the  list 
console.log("invitation to the last 2 guests");
guestlist.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, "you are still invited ")); });
guestlist.pop();
guestlist.pop();
console.log("empty list :", guestlist);
