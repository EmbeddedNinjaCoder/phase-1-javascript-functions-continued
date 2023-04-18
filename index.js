function saturdayFun(activity = "roller-skate") {
  
   let outputString = `This Saturday, I want to ${activity}!`
  
   return(outputString)
}


const mondayWork = function (activityMonday = "go to the office") {

    let outputString = `This Monday, I will ${activityMonday}.`

    return(outputString)
  }

  function wrapAdjective(highlight = "*") {
    return function (param1 = "special") {
        return `You are ${highlight}${param1}${highlight}!`
        }
    }
   
  
