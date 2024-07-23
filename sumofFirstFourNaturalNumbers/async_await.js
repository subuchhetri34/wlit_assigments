// 1. Find the sum of first 4 natural numbers using callback functions and promises (also with async/await)

// using async/await

async function sumOfFirstNNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

(async () => {
    const result = await sumOfFirstNNaturalNumbers(4);
    console.log("Sum using async/await:", result); 
})();
