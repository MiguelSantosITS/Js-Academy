let time =  new Date();
let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

console.log("Today is : " + weekDays[time.getDay()])

const parsedHours = (hours = time.getHours()) => {
    if (hours > 12)
        return((hours - 12) + " PM ")
    return (hours + " AM ");

    //edge cases missing
}

console.log("Current time is : " + parsedHours() + " : " + time.getMinutes() + " : " + time.getSeconds())