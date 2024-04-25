let personName = ["urooj","maha","Admin","zainb","hafsa"];
personName.forEach(onePerson =>{
    if(onePerson==="Admin"){
        console.log(`Hello ${onePerson}, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${onePerson}, thank you for login again`);
    }
})