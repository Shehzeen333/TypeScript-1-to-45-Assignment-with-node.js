var personName = ["urooj", "maha", "Admin", "zainb", "hafsa"];
personName = [];
if (personName.length === 0) {
    console.log("your array in empty we need to find some users!");
}
else {
    personName.forEach(function (onePerson) {
        if (onePerson === "Admin") {
            console.log("Hello ".concat(onePerson, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(onePerson, ", thank you for login again"));
        }
    });
}
