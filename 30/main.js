var personName = ["urooj", "maha", "Admin", "zainb", "hafsa"];
personName.forEach(function (onePerson) {
    if (onePerson === "Admin") {
        console.log("Hello ".concat(onePerson, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(onePerson, ", thank you for login again"));
    }
});
