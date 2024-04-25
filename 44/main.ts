function make_Sandwich(...item: string[]){
    console.log("Making a Sandwich with main item: \n");
    item.forEach(oneitem => console.log(oneitem));
    console.log("\nNow Sandwich is Ready to eat");
}
make_Sandwich("chicken","Bread","mayo & Ketchup");
make_Sandwich("bread","cheese","lettuce","tomato");
make_Sandwich("butter","egg","cucumber","bread");