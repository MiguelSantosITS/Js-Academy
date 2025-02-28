function checkLeapYear(){
    let year = document.getElementById("userInput").value;
	
    if (isNaN(year) || year <= 0)
        document.getElementById("LeapYear_output").textContent = "Error: Please enter a valid positive number for the year.";
    else if (isLeapYear(year))
        document.getElementById("LeapYear_output").textContent = year + " is a leap year.";
    else
        document.getElementById("LeapYear_output").textContent = year + " is not a leap year.";
}

function isLeapYear(year) {
   return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

function printNewLine() {
    document.getElementById("LeapYear_output").textContent = "ola\n";
 }