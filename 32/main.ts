let currentUser = ["zainab","Hafsa","Bushra","shanza","sadaf"];
let newUser =["shabana","hafsa","maha","sadaf","ali"];
newUser.forEach(newOneUser =>{
    let ourCondition = currentUser.some(currentOneUser =>currentOneUser.toLowerCase() ===newOneUser.toLowerCase())
    if(ourCondition){
        console.log(`sorry ${newOneUser} is already taken!`)
    }
    else{
        console.log(`This User Name  ${newOneUser} is Available`)
    
    }
})