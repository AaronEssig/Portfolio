let a= -44;
let b= 46;



function crossSum(a) {
    return String(Math.abs(a))
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
}


function isEven(a){
    return (a % 2 == 0)
}

function add(a,b){
    return a + b;
}



console.log("a = ",a);
console.log("B = ",b);

console.log("Quersumme a = ",crossSum(a));
console.log("ist a Gerade ? ",isEven(a));
console.log("Summe von a und b = ",add(a,b));


let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 201) - 100);
console.log("Zufällige Zahlen:", numbers);


let crossSums = numbers.map(n => crossSum(n));
console.log("Quersummen:", crossSums);

let areEven = numbers.filter(n => n % 2 !== 0);
console.log("Gerade:", areEven);

let addAll = numbers.reduce((sum, num) => sum + num, 0);
console.log("Summe:", addAll);

//let print = numbers.forEach(n => console.log(n));
console.log("Alle Zahlen:");
numbers.forEach(n => console.log(n));

let check = numbers.some(n => n >= 10 && n <=30);
let checkPrint = numbers.filter(n => n >= 10 && n <=30);

console.log("Es gibt eine Zahl zwischen 10 und 30 ",check);
if(check){
    console.log("Die lautet: ",checkPrint);
}





