const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

let copy = {...user}
copy.name = "raju"
console.log(user)
copy.preferences.theme = "light"
console.log(user)
console.log(copy)
//output:of theme is not changed because it is reference(shallow copy)