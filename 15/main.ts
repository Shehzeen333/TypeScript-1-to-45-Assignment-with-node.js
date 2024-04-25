let guestlist = ["Zara","Sara","Shoaib","Zainab","Umer"];
let dontcome = guestlist[0];
console.log(dontcome, "i am not come today ");
guestlist.splice(0,1,"Mehwish");
guestlist.forEach(guest => console.log(`Assalamoalikum, ${guest} would you like to dinner with me?`));


