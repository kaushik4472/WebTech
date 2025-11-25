let n1 = parseInt(prompt("Enter first number  : "));
let n2 = parseInt(prompt("Enter last number  : "));
let s = prompt("Enter sign (+, -, /, *) : ");

let ans;

switch (s) {
    case "+":
        ans = n1 + n2;
        break;
    case "-":
        ans = n1 - n2;
        break;
    case "/":
        ans = n1 / n2;
        break;
    case "*":
        ans = n1 * n2;
        break;

    default:
        console.log("Invalid !");
        break;
}

console.log(ans);