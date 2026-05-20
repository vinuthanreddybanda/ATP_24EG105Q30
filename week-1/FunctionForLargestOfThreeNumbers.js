function big(a,b,c){
    if(a>b && a>c){
    return ("a is greater");
}
else if(b>c && b>a){
    return("b  is greater");
}
else{
    return("c is greater");
}
}

console.log(big(12,23,34))