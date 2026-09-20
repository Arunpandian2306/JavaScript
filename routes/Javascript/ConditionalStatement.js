// if - if a specific condition is true
// else if - a new condition to test, if 1st false
// else - if all the condition is false
let a = 12
if(a>75){
    console.log("Grade A")
}else if(a>50){
    console.log("Grade B")
}else {
    console.log("Fail")
}

// switch - to specify many alternative block of code to be executed
 
let day;
switch (new Date().getDay()){
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3: 
        day = "wednesday";
        break;
    case 4:
        day = "thursday";
        break;
    case 5:
        day = "friday";
        break;
    default:
        day = "saturday"
}
console.log(day)