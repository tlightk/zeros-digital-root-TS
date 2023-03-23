function digitalRoot(input: number):number {
    let digits:string = input.toString();
    if (digits.length === 1) {
        return parseInt(digits);
    }
    return 3;
}

console.log(digitalRoot(7));