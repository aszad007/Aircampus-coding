// Question-7. Check whether the given number is equal to its reverse number or not.

let num = parseInt(process.argv[2]);
let rev = 0;

let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

console.log("Reverse number : "+rev); 