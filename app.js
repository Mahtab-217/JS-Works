
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


function weather(degree){
    console.log((degree *9/5)+32 + " faranhite");
}
weather(-2);


const fact=(num)=>{
    let total=1;
for(let i=1; i<=num;i++){
    total*=i;
}
console.log(total)
}
fact(5)


const minus=(num)=>{
    let total=1;
for(let i=1; i<=num;i++){
    total+=i;
}
console.log(total)
}
minus(8)


function popular(name, lastName){
 console.log(`Hi there dear! your name is ${name} and your last name is ${lastName}`)
}
popular("Hamta", "Royan");


const star=Number(prompt("Enter how many stars you have"));
const fun =(star)=>{
if(star>=90 && star<=100){
    console.log("Super star");
}
else if(star>=60){
    console.log("alot of start");
}
else{
    console.log("Not alot");
}
}
fun(10);


const tall=Number(prompt("How tall are you?"));
function hieght(){
    if(tall>=1.80 && tall<=200){
        console.log("You are the tallest");
    }else if(tall>=1.60){
        console.log("your hieght is meduim");

    } else{
        console.log("You are not tall")
    }
}
hieght();


function plus(list){
    let total=0;
  for(let i=0; i< list.length; i++){
   total+=list[i];
  }
  return total;
}
console.log(plus([3,2,4,5,6]));


const prime=(a)=>{
 let isPrime = true;
 if(a<=1){
    isPrime=false;
 }
 else{
    for(let i=2;i<math.sqrt(a);i++){
        isPrime =false;
        break;
    }
    
 
 return isPrime;
}
}
console.log(prime(13));


function Anagram(a,b){
let sr1= a.replace(/\s/g, '').toLowerCase();
let sr2= b.replace(/\s/g, '').toLowerCase();
return str1.split("").sort().join("")===str2.split("").sort().join("");
}
const result2=Anagram("eat","tea");


function fruit(a){
    if(a.length>8){
        console.log("Deliciuos");
    }
    else if(a.length<5){
        console.log("Normal");
    }
    else{
        console.log("Not Good");
    }
}
console.log(fruit("banana"));