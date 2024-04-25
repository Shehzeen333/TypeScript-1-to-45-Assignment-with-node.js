var storeNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, storeNumber_1 = storeNumber; _i < storeNumber_1.length; _i++) {
    var oneNum = storeNumber_1[_i];
    var ordinalNumber = void 0;
    if (oneNum === 1) {
        ordinalNumber = "st";
    }
    else if (oneNum === 2) {
        ordinalNumber = "nd";
    }
    else if (oneNum === 3) {
        ordinalNumber = "rd";
    }
    else if (oneNum === 4) {
        ordinalNumber = "th";
    }
    else {
        ordinalNumber = "th";
    }
    console.log("".concat(oneNum).concat(ordinalNumber));
}
