// first task
const number=-5
if(number>0 ){
 console.log("this is a positive number")
}
else if(number<0){
console.log("this number is nagtive")
}
else{
    console.log("this number equals to 0")
}
// second task
const num=42;
if(num%2===0){
    console.log("this an even number");
}
else{
    console.log("the number is odd");
}
// third task
const age=17;
if(age>18){
    console.log("you are able to vote");
}
else{
    console.log("you're unable to vote");
}
// fourth task
const letters="e";
const lower=letters.toLocaleLowerCase();
if(isNaN(letters) &&letters.length==1){
    if(lower=="a"||lower=="e"|| lower=="i" ||lower=="o" ||lower=="u"){
        console.log("the letter is a vowel letter")
    }
    
    else{
    console.log("the number is not a vowel letter")
}
}

// fifth task
const time=23;
if(time<12){
    console.log("Good morning");
}
else if(time<14){
    console.log("Good afternoon");
}
else if(time<18){
    console.log("Good evening");
}
else{
    console.log("Good night");
}
// sixth task
const int=12;
if(int<5){
    console.log("5");
}
else if(int==12){
    console.log(12);
}
else{
    console.log("8")
}
// seventh task
const grade=84;
if(grade>90 && grade<100){
    console.log("Group A");
}
else if(grade<90){
    console.log("Group B");
}
else if(grade<80){
    console.log("Group C");
}
else if(grade<70){
    console.log("Group D");
}
else {
    console.log("Group F")
}
// eighth task
const color ="red";
if(color=="red"){
    console.log("Stop");
}
else if(color=="green"){
    console.log("Just Go");
}
else if(color=="yellow"){
    console.log("Slow Down");
}
// ninth task
const weather=8;
if(weather==35){
    console.log("Today the weather is very hot");
}
else if(weather<34 && weather>20){
    console.log("Today the weather is very Good");
}
else if(weather<10){
    console.log("Today the weather is very cold");
}
// tenth task

// eleventh task
const devision=20;
if(devision%5==0){
    console.log(`${devision }بر پنچ بخش پذیر است`);
}
else if(devision%0){
    console.log("impossible to be devided");
}
else{
    console.log(`${devision }بر پنچ بخش پذیر نیست`);
}
// twelfth task
const cal=15;
if(cal/0){
   console.log("Can't devide 15 on zero");
}
// thirteen task

let userChoice = prompt("سنگ، کاغذ یا قیچی را انتخاب کن").toLowerCase();
let randomNum = Math.floor(Math.random() * 3);
let computerChoice;
if (randomNum === 0) {
    computerChoice = "سنگ";
} else if (randomNum === 1) {
    computerChoice = "کاغذ";
} else {
    computerChoice = "قیچی";
}
console.log("انتخاب شما: " + userChoice);
console.log("انتخاب کامپیوتر: " + computerChoice);

if (userChoice === computerChoice) {
    console.log("مساوی!");
} else if (
    (userChoice === "سنگ" && computerChoice === "قیچی") ||
    (userChoice === "کاغذ" && computerChoice === "سنگ") ||
    (userChoice === "قیچی" && computerChoice === "کاغذ")
) {
    console.log("شما بردید!");
} else {
    console.log("کامپیوتر برد!");
}

// switch practices
const fruits=prompt("choose your favorite fruit");
const fruit=fruits.toLowerCase();
switch(fruit){
    case "banana":
        console.log("Yellow")
        break;
        case "orange":
            console.log("Orange");
            break;
            case "apple":
                console.log("Red/Yellow");
                break;
                case "pomygranet":
                    console.log("Red");
                    break;  
}