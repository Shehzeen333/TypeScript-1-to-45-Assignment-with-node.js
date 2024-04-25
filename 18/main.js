var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making an array of visit countries and print order 
var visitLocation = ["china", "America", "south africa ", "brazil"];
console.log("original order:", visitLocation);
// print array in Alphabetical order without modifying the actual array list
console.log("Alphabetical order : ", __spreadArray([], visitLocation, true).sort());
// show that your array is still in its original printing 
console.log("still in original order:", visitLocation);
// reverse the order of your list 
console.log("reverse order :", __spreadArray([], visitLocation, true).reverse());
//  show that your array is still in its original printing 
console.log("still in original order:", visitLocation);
// we have change the original array reversed
console.log("original array reversed:", visitLocation.reverse());
// print array to show that it's back to its original order 
console.log("back to original order :", visitLocation.reverse());
// print array to show that it's order has been  change  in alphabetical  order 
console.log("sorted in alphabetical order :", visitLocation.sort());
// we have change again  the original array order 
console.log("original array reversed again :", visitLocation.reverse());
