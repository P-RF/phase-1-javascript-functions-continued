// code your solution here
// Function declaration for saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  console.log(saturdayFun("bathe my dog!"));

// Define mondayWork function
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// Define wrapAdjective function
function wrapAdjective(style = '*') {
    return function(adjective) {
        if (style === '*') {
            return `You are ${style}${adjective}${style}!`;
        }   else if (style === '||') {
            return `You are ${style}${adjective}${style}!`;
        }
    }
}