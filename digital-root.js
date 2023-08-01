"use strict";
function digitalRoot(input) {
    let digits = input.toString();
    if (digits.length === 1) {
        return parseInt(digits);
    }
    else {
        let digitArray = [];
        for (let i = 0; i < digits.length; i++) {
            digitArray.push(parseInt(digits[i]));
        }
        console.log(digitArray);
        return 3;
    }
}
console.log(digitalRoot(237));
