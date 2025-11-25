let n = prompt("Enter number = ");

function isPrime(n){
    for(let i=2; i<n; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

if(isPrime(n)){
    alert(n+" is prime number.");
}
else{
    alert(n+" is not a prime number.")
}