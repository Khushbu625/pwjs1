
const user = {
    name:"khushbu",
    Username:"kt",
    email: "khushbuthakur@kt",
    age:20,
    isAdmin:true,
    isloggedin:false,
    tea: ["lemon","peach","ginger"],
    address: {
        city:"jabalpur",
        state:"mp",
    }
}
const anotheruser = user

//  console.log(user.age);
//  console.log(user['age']);
//  console.log(user.tea[0]);
//  console.log(user.address.state);
//  console.log(user["address"]["state"]);

 user.email = "kt@123"
//  console.log(user);
//  console.log(anotheruser);
  
 delete user.isAdmin
 console.log(user);

 const userlistfromdatabase = [{},{},{}]
 console.log(user.hasOwnProperty('tea'));
  console.log(Object.entries(user));

