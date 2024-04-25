var currentUser = ["zainab", "Hafsa", "Bushra", "shanza", "sadaf"];
var newUser = ["shabana", "hafsa", "maha", "sadaf", "ali"];
newUser.forEach(function (newOneUser) {
    var ourCondition = currentUser.some(function (currentOneUser) { return currentOneUser.toLowerCase() === newOneUser.toLowerCase(); });
    if (ourCondition) {
        console.log("sorry ".concat(newOneUser, " is already taken!"));
    }
    else {
        console.log("This User Name  ".concat(newOneUser, " is Available"));
    }
});
