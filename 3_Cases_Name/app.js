var person_Name = "Shehzeen Ishaque";
console.log(person_Name.toLowerCase());
console.log(person_Name.toUpperCase());
console.log(person_Name.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
