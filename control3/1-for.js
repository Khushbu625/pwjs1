
/*for(let index=0;index<10;index++)
{
    const element = array[index]
}
for([initialexpresseion/Declaration];[Condition];[changer])
{
    // body
}
*/
// if score hits 5 then dont print after that
// if score hits 5 skip 5 but rest should be printed

 
 /* let userScore = 10
  const minvalue = 0
  for(userScore; userScore >= minvalue; userScore = userScore-1)
  {
    console.log(`userScore is ${userScore}`);
  }
  */

  let userScore = 1
  const maxvalue= 10
  for(userScore; userScore <= maxvalue; userScore = userScore+1){
  
  
    // if(userScore == 5){
        // break }
        if(userScore == 5){
            continue
        }
    
    console.log(`userScore is ${userScore}`);

    console.log(userScore);
    }
  
