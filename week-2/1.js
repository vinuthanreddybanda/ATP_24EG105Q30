
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

/*Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"*/
const stock = cart.filter(proObj =>proObj.inStock)
console.log(stock)
//2.
const arr = cart.map((proObj) => 
  {
    return {name: proObj.name,
            totalPrice: proObj.price*proObj.quantity}
  })
console.log(arr)
//3
const grand = cart.reduce((acc,proObj )=>acc+(proObj.price*proObj.quantity),0)
console.log(grand)
//4
const mouseDetails = cart.find(proObj => proObj.name==="Mouse")
console.log(mouseDetails)
//5
const position = cart.findIndex(proObj =>proObj.name==="Keyboard")
console.log(position)


//task-2
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

/*1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/

   //1.
   const pass = students.filter(stuObj => stuObj.marks>=40)
   console.log(pass)

 //2.
 const grade = students.map(stuObj => {
  if(stuObj.marks>=90){
    return "A"
  }
  else if(stuObj.marks>=75){
    return "B"
  }
  else if(stuObj.marks>=60){
    return "C"
  }
  else {
    return "D"
  }
 }) 
 console.log(grade)

 //3.
 const sum = students.reduce((acc,stuObj) =>acc+(stuObj.marks),0)
 const avg = sum/students.length
 console.log(avg)

 //4.
 const score = students.find(stuObj => stuObj.marks===92)
console.log(score)

//5.
const ind = students.findIndex(stuObj => stuObj.name ==="Kiran")
console.log(ind)



//task-3

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
/*
Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/

//1.
const itDep = employees.filter(empObj => empObj.department==="IT")
console.log(itDep)

//2.
const add = employees.map(empObj =>netSalary=empObj.salary + empObj.salary/10)
console.log(add)

//3.
const total = employees.reduce((acc,empObj)=> acc+(empObj.salary),0)
console.log(total)

//4.
const sal = employees.find(stuObj => stuObj.salary===30000)
console.log(sal)

//5.
const neha = employees.findIndex(stuObj => stuObj.name==="Neha")
console.log(neha)



//task-4

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
/*
Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"*/

    //1.
  const sifi = movies.filter(moviesObj => moviesObj.genre==="Sci-Fi")
  console.log(sifi)
  //2.
 const mapped = movies.map(movie => `${movie.title} (${movie.rating})`);
console.log(mapped);

// 3. 
const avgRating = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
console.log(avgRating);

// 4. 
const jokerMovie = movies.find(movie => movie.title === "Joker");
console.log(jokerMovie);

// 5. 
const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log(avengersIndex);


//task-5
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
/* 1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000*/

 
// 1. 
const credits = transactions.filter(transactionObj => transactionObj.type === "credit");
console.log(credits);

// 2. 
const amounts = transactions.map(transactionObj => transactionObj.amount);
console.log(amounts);

// 3.
const balance = transactions.reduce((acc, transactionObj) => {
  return transactionObj.type === "credit" 
    ? acc + transactionObj.amount 
    : acc - transactionObj.amount;
}, 0);
console.log(balance);

// 4. 
const firstDebit = transactions.find(transactionObj => transactionObj.type === "debit");
console.log(firstDebit);

// 5. 
const index10000 = transactions.findIndex(transactionObj => transactionObj.amount === 10000);
console.log(index10000);
