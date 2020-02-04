// var today = new Date();
// console.log(today);
// var hourNow = today.getHours();
// console.log(hourNow);

var hourNow = prompt("what is the time now ?");
console.log(hourNow);
var greeting; 
 
if (hourNow > 18 && hourNow<24   ) {     
    greeting = 'Good evening, Class!';   
} 
else if (hourNow > 12 && hourNow <=18) {     
    greeting = 'Good afternoon, Class!';   
} else if (hourNow >= 0 && hourNow <=12) {     
    greeting = 'Good morning!';   
} else {     
    greeting = 'Something went wrong!';   
} 

document.write('<h3>'+greeting+'</h3>');