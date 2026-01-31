const text="  In the name of God ";
console.log(text.length);
console.log(text.toLocaleLowerCase());
console.log(text.toUpperCase());
console.log(text.split(" "));

const jumla="My friends are great"
console.log(jumla.trim());
console.log(jumla.charAt(4));

const para="God is the kindest"
console.log(para.charCodeAt(0));
console.log(para.indexOf("t"));
console.log(para.lastIndexOf("t"));

const aziz="Dear classmates be in touch";
console.log(aziz.includes("be"));
console.log(aziz.startsWith("Dear"));
console.log(aziz.endsWith(" "));

const sen="Hello ";
 console.log(sen.repeat(5));
 console.log(sen.slice(0,3));
 console.log(sen.concat("JS"));

 const sentence="Ali Ahmadi";
 console.log(sentence.localeCompare("d"));


 const number=6;
 console.log(number.padStart(3,"0"))
