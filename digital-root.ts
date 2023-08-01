function digitalRoot(input: number): number {
  let digits: string = input.toString();
  if (digits.length === 1) {
    return parseInt(digits);
  } else {
    let digitArray: number[] = [];

    // function createDigitArray()
    for (let i: number = 0; i < digits.length; i++) {
        digitArray.push(parseInt(digits[i]));
    }

    while (digitArray.length !== 1) {

    }

    console.log(digitArray);
    return 3;
  }
}

console.log(digitalRoot(237));
