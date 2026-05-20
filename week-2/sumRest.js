function sumAll(...args) {
  return args.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll(10, 20, 30));       
console.log(sumAll(1,2,3));   
console.log(sumAll());               
