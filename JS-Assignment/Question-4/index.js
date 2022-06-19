// Question-4. Check whether the given number is an armstrong number or not. 
let a = parseInt(process.argv[2]);

let x = a % 10;
let y = Math.floor(a / 10);
let z = y % 10;
let ab = Math.floor(y / 10);
let sum = (ab*ab*ab) + (z*z*z) + (x*x*x); 
if(sum === a ){
    console.log("It's a armstrong number");
}else{
    console.log("It's not a prime number");
} 