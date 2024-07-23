// 1. Find the sum of first 4 natural numbers using callback functions and promises (also with async/await)

// using promises

function sumofFirstNaturalNumbers(n){
    return new Promise((resolve,reject) =>{
        let sum=0;
        for(let i=1;i<=n;i++){
        sum +=i;
    }
    resolve(sum);
    });
}

sumofFirstNaturalNumbers(4).then(result =>{
    console.log("Sum using promises:",result);
});