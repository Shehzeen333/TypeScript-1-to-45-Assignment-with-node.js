function great_Magicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
function show_magicians(megicians) {
    return megicians.map(function (name) { return "The great ".concat(name, " magician."); });
}
var megicians_names = ["ayan", "zainab", "saad"];
var great_name = show_magicians(megicians_names);
// console.log(great_name);
great_Magicians(great_name);
