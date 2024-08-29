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
function wrapAdjective(special = '*') {
    return function(adjective) {
        if (special === '*') {
            return `You are ${special}${adjective}${special}!`;
        }   else if (special === '||') {
            return `You are ${special}${adjective}${special}!`;
        }
    }
}