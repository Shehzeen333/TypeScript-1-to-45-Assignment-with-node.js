function great_Magicians(megicians:string[]){
    megicians.forEach(name => console.log(name));
}
function show_magicians(megicians:string[]){
    return megicians.map(name => `The great ${name} magician.`);
}
let magicians_names = ["ayan","zainab","saad"]
let copy_magician_names = magicians_names.slice(); 
 
 let copy_great_magicians = show_magicians(copy_magician_names);
// console.log(great_name);
great_Magicians(copy_magician_names);
great_Magicians(copy_great_magicians);