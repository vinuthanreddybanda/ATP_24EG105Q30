//7.write a function that receives an array and search elements as args and return the index of that search element in the array.it should return "not found"
//when search element not found
function search(a,b){

    for(let i=0;i<a.length;i++){
        if(b==a[i]){
            return i
    }
}
return "search element not found"
}
a=[1,2,3,4]
console.log(search(a,3))