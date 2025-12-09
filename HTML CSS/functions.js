function crossSum(n) {
    return String(n)
        .replace(/\D/g, '')
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
}


console.log(crossSum(30294));