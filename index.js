function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(work = "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(part1 = "*") {
    return function(part2 = 'special'){
        return `You are ${part1}${part2}${part1}!`
            
    }
}


