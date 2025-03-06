// code your solution here
function saturdayFun(activity="roller-skate"){//    function that accepts an activity
    return `This Saturday, I want to ${activity}!`//return string  
}
function mondayWork(activity="go to the office"){//    function that accepts an activity
    return `This Monday, I will ${activity}.`//return string
}
function wrapAdjective(flair="*"){
    return function(adjective="special"){
        return `You are ${flair}${adjective}${flair}!`
    }
}
