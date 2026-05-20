//6.write a function that receives an array as args and return their sum.
function sumArray(a){
    sum=0;
    for(let i=0;i<=2;i++){
        sum+=a[i];
    }
    return sum;
}

a=[1,2,7];
console.log(sumArray(a));