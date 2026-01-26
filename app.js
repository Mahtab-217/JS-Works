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

const rested=(...b)=>{
    console.log(b)
}
rested(3,2,4,5,2,1,44,56)

function lot(...a){
    let total=0;
    for(let i=0; i<a.length; i++){
        total= total+a[i];
    }
    console.log(total);
}
lot(4,2,6)