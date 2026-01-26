function hi(name){
    console.log("Hi dear" + name)
}
hi(" Ali");
const bye= function(name){
    console.log("Good bye dear " +name)
}
bye("Ahmad");

const sum=(a,b)=>{
    console.log(a*b);
}
sum(5,12);
const jum =(a,b=32)=>{
   console.log(a+b);
}
jum(15)