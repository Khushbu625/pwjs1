let temperature=26

if(temperature<20){
    console.log("its really cold");
} else {
    console.log("its really hot");
}
 console.log("its really cold");

 
 console.log("welcome to pw game");

  let score = 110
  let life = 3
  let bullets = 1000

  if(score>99){
    console.log("you gained a life");
    score = score - 100;
    life = life+1;
    let bullets = 2000
    console.log(`your bullets is ${bullets}`);
    console.log("you lost a life");
}
console.log(`your score is ${score} and your life is ${life} and your bullets is ${bullets}` );
//  we can write it as below also
let balance = 500
 if (balance>100) 
  console.log("balance is above 100 ");

let getStarFromUser = "5"
let starInNumber = parseInt(getStarFromUser)

if (starInNumber==1){
 console.log("poor");
}else if(starInNumber==2){
console.log("ok");
}else if(starInNumber==3){
console.log("average");
}else if(starInNumber==4){
console.log("cool")
}else if(starInNumber==5){
console.log("great");
}else if(starInNumber==6){
console.log("awesome");
}else if(starInNumber==7){
console.log("nailed it");
}
else {
    console.log("i don't know the rating");
}

// if email is present ask for password and if email is not present then ask for email

// const email = "khushbu@123"

// if (email == "khushbu@123"){
//     console.log("please enter your password");
// }else {
//     console.log("please enter your email");
// }
// if (email ){
//     console.log("please enter your password");
// }else {
//     cpnsole.log("please enter your email");
// }
// if (email != ""){
//     console.log("please enter your password");
// }else {
//     c0nsole.log("please enter your email");
// }
// console.log(Boolean(email));
// /*
// truthy falsy values
// falsy
// 0
// null
// ""
// undefined
// NaN */

const email= "khushbu"
const password = "12345"

if (email){
    if(password){
        console.log("welcome to the app");
    }
    else{
        console.log("please enter your password");
    }
}
else{
    console.log("please enter your email");

 }

 if (email&&password){
        console.log("welcome to the app");
    }
    else{
        console.log("please enter email and password")
    }

    const googlelogintoken = ""
    const githublogintoken = ""

    if(googlelogintoken || githublogintoken ){
        console.log("welcome to the app");
    }
    else{
        console.log("please login to view your account");
    }

    let age = 19 
    const willyougetdrivinglicence = false

    (age>=18)? willyougetdrivinglicence=true: willyougetdrivinglicence=false 
    
    const getdrivinglicence = age>=18 ? "true part" :" false"

let loading = false
if (loading){
    return "loading...."
}
console.log("show the cards to user");

loading ? "show loading spinner": "show card to user"