//spread operator (create the copies of arrays and objects)

//let originalObj = {a:10,b:20}
//let copyObj = {...originalObj}
let Person = {
    name:"ravi",
    address:{
        city:"hyd",
        pincode:7777
    }
}
Person.name="aravind"
Person.address.city = 'pune'
let copyPerson={...Person}
console.log(Person)
console.log(copyPerson)
let copyObj = structuredClone(Person)
Person.address.city = 'banglore'

console.log(Person)
console.log(copyObj)