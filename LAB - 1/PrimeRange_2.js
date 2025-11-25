let n1 = prompt("Enter first number of range : ");
let n2 = prompt("Enter last number of range : ");

for (let j = n1; j <= n2; j++) {
    if (isPrime(j)) {
       console.log(j);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}