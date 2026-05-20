let marks = [90,78,65,98];
let smallest;
for(let i=0;i<=3;i++){
    if(smallest>marks[i]){
        smallest=marks[i];
    }
}
console.log(smallest);