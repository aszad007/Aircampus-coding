//Question -2. Print the sum of all even numbers in a range from a to b. (Including a,b)
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
for(let i=a; i<=b; i++){
    if(i%2==0){
        console.log(i);
    }
}