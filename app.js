
// function deleteSpace(){
//     let start="";
//     let end =text.length-1;
//     for(let i= 0; i<text.length; i++){
//         if(text[i]!==" "){
//             start =i;
//             break;
//         }
//     }
//     for(let i=text.length-1; i>=0;i--){
//         if(text[i]!==" "){
//             end=i;
//             break;
//         }
//     }
//     return text.slice(start,end+1);
// }
// const result5 = deleteSpace("    Hello Dear Teacher    ");



// function reverse(text){
//      let result=text.split(' ').map(word=>{
//         let reverse='';
//         for(let i=0; i>=0; i--){
//           reverse+=word[i];
//         }
//         return reverse;
//      }).join(" ");
   
//      return result;
// }
// const total2 = reverse("Hi Teacher");

// function greeting(n){
//    console.log(`We are in numer ${n}`);
// }
// const list =[1,2,3]
// list.forEach(greeting);


// const price=[120,430,450];
// const tax =0.03;
// const total=price.map(getPrice)
// function getPrice(price){
//     return price *tax+price;

// }

 const list =[1,3,4,5,6,7,,2];
const result3= list.reduce(function(current, item){
      return current*item;
 },0);


 function getNumber(num){
    return num>5
 }
 const result = list.some(getNumber);



 function getResult(item){
    return item<2
 }
 const result2=list.every(getResult);


const number =12.98;
const convertedToText=number.toString();
const [num,ashar]= convertedToText.split(".");