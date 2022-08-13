'use strict'

const bills = [1283, 384, 5733];

function calcTips(bill) {
    const tip = bill * 0.35;
    return tip;
}

function calcSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const bons = [];
for (let i = 0; i < bills.length; i++) {
    const bon = bills[i] + calcTips(bills[i]);
    // bons[i] = bon;
    bons.push(bon);
}


console.log(`the total is ${bons}`);
console.log(`the sum is ${calcSum(bons)}`);