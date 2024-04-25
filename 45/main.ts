function car(menufacturing,model,...options){
let car ={
    menufacturing: menufacturing,
    model: model

};
options.forEach(option => {
    let[key ,value]= option.split(":");
    car[key.trim()]=value.trim();
});
return car;

}
let myCar = car("Toyota","civic","color: white","sunroof:true");
console.log(myCar);