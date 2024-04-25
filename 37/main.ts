function make_shirt(shirt_size:string = "Large", printMessage: string = "I LOVE Typescript"){
    console.log(`creating a ${shirt_size} shirt with ${printMessage} print on shirt.`);

}
make_shirt();
make_shirt("medium");
make_shirt("small","I Love javascript");