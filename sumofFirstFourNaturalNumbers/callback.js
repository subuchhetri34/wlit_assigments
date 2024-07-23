// 1. Find the sum of first 4 natural numbers using callback functions and promises (also with async/await)

// using callback funtions

function sumofFirstNaturalNumbers(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum +=i;
    }
    return sum
}
function compute(callback,n){
    return callback(n)
}

console.log(compute(sumofFirstNaturalNumbers,4));