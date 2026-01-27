// function hi(name){
//     console.log("Hi dear" + name)
// }
// hi(" Ali");
// const bye= function(name){
//     console.log("Good bye dear " +name)
// }
// bye("Ahmad");

// const sum=(a,b)=>{
//     console.log(a*b);
// }
// sum(5,12);
// const jum =(a,b=32)=>{
//    console.log(a+b);
// }
// jum(15)

// const rested=(...b)=>{
//     console.log(b)
// }
// rested(3,2,4,5,2,1,44,56)

// function lot(...a){
//     let total=0;
//     for(let i=0; i<a.length; i++){
//         total= total+a[i];
//     }
//     console.log(total);
// }
// lot(4,2,6);

// function multiply(...b){
//      let result=1;
//      for(let i=1; i<b.length; i++){
//         result= result-b[i];
//      }
//      console.log(result)
// }
// multiply(3,5,9,90)
const num=( num1, num2)=>{
   if(num1==num2){
    console.log("Equal")
   }
   else if(num1 >num2){
    console.log("number one is greater")

   }
   else{
    console.log("number two is greater")
   }
}
num(34,43)
num(21, 12)
num(22,22)
function module(a){
if(a%2==0){
    console.log("Even")
}
else{
    console.log("Odd")
}
}
module(13)
function string(text){
let reverse="";
for(let i= text.length-1;i>=0; i--){
    reverse +=text[i];
}
console.log (reverse);
}
const newtext=string("مهتاب");