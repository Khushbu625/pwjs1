/* Data types are of two types
 1. primitive
 2. reference (non-primitive)
 
 primitive data types(STACK)
 string
 number
 undefined
 null
 bigint
 symbol
 boolean
 */
  const name ="khushbu"
  const age = 20
  const score = 300.02 //we can write decimal number also
  let loggedin = false
  const nodeversion = null
  let bankbalance = undefined
  const buttonid = symbol("id")
  const areallylongnumber = 57689974311123098765432  

//   reference (primitive)-objects(HEAP)
/*
 array 
 objects
 function
 */
const number = [1,2,3,4,5]
const heroes =[
     "superman", 
     "batman",
     "spiderman", 
     "ironman",
      true,
      123
    ]
const userobjects = {
    name:"khushbu",
    age: 20,
    isloggedin:true,
}
// functions
 const sayhello = function() {
        console.log("khushbu")
 }
  const registerauser = function(){}
  const loginuser = function(){}
