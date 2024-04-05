
 const myArray = [1,2,3,4,5]

 const myNewArray = new Array(1,2,3,4,5)
 console.log(myArray[1]);
 
 const dcheros = ["batman","superman","flash","gl","arrow"]
 console.log(dcheros.length)
 dcheros.push("wonder women")
  dcheros[dcheros.length]="wonder women"
console.log(dcheros);
dcheros.pop();

 const lasthero = dcheros.pop()
 console.log(dcheros);
 dcheros.unshift("aquaman")
 console.log(dcheros);
 console.log(dcheros.toString());
 console.log(dcheros.join("-"));
console.log(dcheros.slice(1,3));
console.log(dcheros);
console.log(dcheros.splice(1,3));
console.log(dcheros);


