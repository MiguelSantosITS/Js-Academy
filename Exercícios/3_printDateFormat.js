let date = new Date();

function printDate(first, second, third, char){
    if (first < 10)
        first = "0" + first;
    if (second < 10)
        second = "0" + second;
    return (first + char + second + char + third);
}

let day = date.getDay()
let month = date.getMonth()
let year = date.getFullYear()

console.log(printDate(month, day, year, '/') + ", " +
            printDate(month, day, year, '-') + ", " + 
            printDate(day, month, year, '/') + ", " +
            printDate(day, month, year, '-') + ", ")