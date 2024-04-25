// Making an array of visit countries and print order 
let visitLocation = ["china","America","south africa ","brazil"];
console.log("original order:", visitLocation);

// print array in Alphabetical order without modifying the actual array list
console.log("Alphabetical order : ", [...visitLocation].sort());

// show that your array is still in its original printing 
console.log("still in original order:", visitLocation);

// reverse the order of your list 
console.log("reverse order :", [...visitLocation].reverse());

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



