const sen ="   Hi there dear friends  ";
const splited=sen.split(' ');
if(sen.startsWith('Hi')){
    console.log("It is correct");
}
else{
    console.log("it is uncorrect");
}
if(sen.endsWith('Bey')){
    console.log("You are polite")
}
else{
    console.log("You are rude");
}
const trimed=sen.trim();
const fixed =sen.replaceAll(" ",".");
const funny= "Ha";
const repeated =funny.repeat( 4);
const name="mahtab";
name.substring(0,1).toUpperCase()+name.substring(1);