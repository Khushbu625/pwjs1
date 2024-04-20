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