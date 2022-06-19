// Question-3. Write a program to read the first and last digit of a number

let a = parseInt(process.argv[2]);

let first = a;
while (first >= 10) {

    first = Math.floor(first / 10);

}

let last =  a % 10;

console.log("First number is : " +first + " and " + "Last number is : " + last ); 