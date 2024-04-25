var guestlist = ["Zara", "Sara", "Shoaib", "Zainab", "Umer"];
var dontcome = guestlist[0];
console.log(dontcome, "i am not come today ");
guestlist.splice(0, 1, "Mehwish");
guestlist.forEach(function (guest) { return console.log("Assalamoalikum, ".concat(guest, " would you like to dinner with me?")); });
