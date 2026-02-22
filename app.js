
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

//  const list =[1,3,4,5,6,7,,2];
// const result6= list.reduce(function(current, item){
//       return current*item;
//  },1


// );


//  function getNumber(num){
//     return num>5
//  }
//  const result5 = list.some(getNumber);



//  function getResult(item){
//     return item<2
//  }
//  const result56=list.every(getResult);


// const number4 =12.98;
// const convertedToTex54=number.toString();
// const [num4,ashar4]= convertedToText.split(".");

// const reversed5=[12,22,23,24,25];
// const result44=reversed.reverse(reversed);

// const sorte4d=[23,22,21,19];
// const result41=sorted.sort(sorted);
// const result3= list.reduce(function(current, item){
//       return current*item;
//  },1


// );


//  function getNumber(num){
//     return num>5
//  }
//  const result = list.some(getNumber);



//  function getResult(item){
//     return item<2
//  }
//  const result2=list.every(getResult);


// const number =12.98;
// const convertedToText=number.toString();
// const [num,ashar]= convertedToText.split(".");

// const reversed=[12,22,23,24,25];
// const result4=reversed.reverse(reversed);

// const sorted=[23,22,21,19];
// const result1=sorted.sort(sorted);



// // const f = [1,2,3,4,5];
// // function getNumber1(g){
// //    return  g>2;
// // }
// // const total = f.filter(getNumber);

// const number1 = [1,2,3,4,5,6]
// const evenNumber=(n)=>{
//    return  n>2;
// }

// const filterNumber = number1(even)

const elements=document.getElementsByClassName("a");
console.log(elements);
// elements[1].outerHTML="<p> Hello there</p>"
const p=document.createElement("p");
p.textContent="Good Morning";
elements[1].replaceWith(p)