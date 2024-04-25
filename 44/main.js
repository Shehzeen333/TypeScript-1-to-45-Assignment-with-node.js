function make_Sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Making a Sandwich with main item: \n");
    item.forEach(function (oneitem) { return console.log(oneitem); });
    console.log("\nNow Sandwich is Ready to eat");
}
make_Sandwich("chicken", "Bread", "mayo & Ketchup");
make_Sandwich("bread", "cheese", "lettuce", "tomato");
make_Sandwich("butter", "egg", "cucumber", "bread");
