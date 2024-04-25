function great_Magicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
function show_magicians(megicians) {
    return megicians.map(function (name) { return "The great ".concat(name, " magician."); });
}
var magicians_names = ["ayan", "zainab", "saad"];
var copy_magician_names = magicians_names.slice();
var copy_great_magicians = show_magicians(copy_magician_names);
// console.log(great_name);
great_Magicians(copy_magician_names);
great_Magicians(copy_great_magicians);
