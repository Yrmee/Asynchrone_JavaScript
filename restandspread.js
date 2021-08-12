// Opdracht: Rest Parameters and Spread Operator

// Functie 1: Optellen van meerdere cijfers met Rest Parameter

function optellen(...numbers) {
    return numbers.reduce(function(prev, current) {
        return prev + current;
    })
}

console.log(optellen(1, 2, 3, 4, 5, 6));

// Functie 2: Optellen van meerdere cijfers met Spread Operator

function optellen2(num1, num2, num3) {
    return num1 + num2 + num3;
}

const nums = [1, 2, 3];

console.log(optellen2(...nums));