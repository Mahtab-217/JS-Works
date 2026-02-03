// const text="  In the name of God ";
// console.log(text.length);
// console.log(text.toLocaleLowerCase());
// console.log(text.toUpperCase());
// console.log(text.split(" "));

// const jumla="   My friends are great    "
// console.log(jumla.trim());
// console.log(jumla.charAt(4));

// const para="God is the kindest"
// console.log(para.charCodeAt(0));
// console.log(para.indexOf("t"));
// console.log(para.lastIndexOf("t"));
// console.log(para.replace("God","Allah"));

// const aziz="Dear classmates be in touch";
// console.log(aziz.includes("be"));
// console.log(aziz.startsWith("Dear"));
// console.log(aziz.endsWith(" "));

// const sen="Hello ";
//  console.log(sen.repeat(5));
//  console.log(sen.slice(0,3));
//  console.log(sen.concat("JS"));
//  console.log(sen.substring(1,3));

//  const sentence="Ali Ahmadi";
//  console.log(sentence.localeCompare("Ahmadi"));

//  const number=6;
//  console.log(number.padStart(3,"0"  ))
// function find(...number){
//     let count=0;
//     let total=0;
//     for(let i=0; i<number.length;i++)
// {
//     if(number[i]>0){
//         count++;
//         total+=number[i];
//     }
// }
// return total/count;
// }
// console.log(find(1,2,4,5,-4));

// function getText(test){
// let result="";
// for(let i=0; i<Text.length; i++){
//     if(text[i]>="a" && text[i]<="z" ||text[i]>="A" && text[i]<="Z"){
//         result+=text[i];
//     }
// }
// return result;
// }
// const outcome= getText("Hell33o");


// function snake(a){
//     let result="";
//     for(let i=0; i<a.length;i++){
//         if(a[i]>="A" && a[i]<="Z"){
//             result += "_"+ a[i].toLowerCase();

//         }
//         else
//         {
//             result +=a[i];
//         }
//     }
//     return result;
// }
// console.log(snake("lastName"));
// console.log(snake("fatherName"));
// // father_name

function deleteSpace(text){
 let start="";
 let end =text.length-1;
  for(let i=0; i<text.length; i ++){
    if(text[i]!==" "){
        start =i;
        break;
    }
  }
}
deleteSpace("    Hello Dear Teacher   ")