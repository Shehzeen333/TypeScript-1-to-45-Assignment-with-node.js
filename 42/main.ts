function great_Magicians(megicians:string[]){
    megicians.forEach(name => console.log(name));
}
function show_magicians(megicians:string[]){
    return megicians.map(name => `The great ${name} magician.`);
}
let megicians_names = ["ayan","zainab","saad"]
let great_name = show_magicians(megicians_names);
// console.log(great_name);
great_Magicians(great_name);