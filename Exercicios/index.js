console.log("Working");

// Ex1
const infoEx1 = document.getElementById("ex1info");

function currentDayandTime() {
  let date = new Date();
  // Testar data
  //console.log(date);

  // Get day number
  let dayNumber = date.getDay();
  // Testing day number
  //console.log(dayNumber);

  // Day number to Day name
  let day = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday"];
  let dayName = day[date.getDay()];
  // Testing day number
  //console.log(dayName);

  // Day Output
  //console.log(`Today is : ${dayName}.`);
  infoEx1.innerHTML = `Today is: ${dayName}.`;

  // Get Hour, Minutes e Seconds
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let shorthours = 0;
  let shorttext = "";

  if (hours > 12) {
    shorthours = hours - 10;
    shorttext = "PM";
  } else {
    shorthours = hours;
    shorttext = "AM";
  }

  console.log(
    `Current time is : ${shorthours} ${shorttext} : ${minutes} : ${seconds} `
  );
}

// Ex2
function printContent() {
  window.print();
}

// Ex3
const infoEx3 = document.getElementById("ex3info");

function getCurrentDay() {
  let date = new Date();

  //Get Day, Month, Year
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // Output date dd/mm/yyyy
  //console.log(`1st format: ${day}/${month}/${year}`);
  // Output date dd-mm-yyy
  //console.log(`2nd format: ${day}-${month}-${year}`);
  // Output date mm/dd/yyyy
  //console.log(`3rd format: ${month}/${day}/${year}`);
  // Output date mm-dd-yyyy
  //console.log(`4th format: ${month}-${day}-${year}`);
  infoEx3.innerHTML = `1st format: ${day}/${month}/${year} <br/> 2nd format: ${day}-${month}-${year} <br/> 3rd format: ${month}/${day}/${year} <br/> 4th format: ${month}-${day}-${year}`;
}

// Ex4
const infoEx4 = document.getElementById("ex4info");

function areaofTriangle() {
  const side1 = 5;
  const side2 = 6;
  const side3 = 7;

  // Calcutele the area of the triangle using Heron Method
  const perimeter = (side1 + side2 + side3) / 2;

  const area = Math.sqrt(
    perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3)
  );

  //console.log(`The area of the triangle is: ${area.toFixed(2)}`);
  infoEx4.innerHTML = `The area of the triangle is: ${area.toFixed(2)}`;
}

// Ex5
let interval;
const btnEx5Start = document.getElementById("ex5btnStart");
const btnEx5Stop = document.getElementById("ex5btnStop");

function rotateString() {
  let string = "w3resource";
  let array = string.split("");
  // Testing array to string
  console.log(array);

  // Set an interval of 500 ms
  interval = setInterval(() => {
    let lastchar = array.pop();
    array.unshift(lastchar);
    document.getElementById("rotate").innerHTML = array.join("");
  }, 500);
  btnEx5Stop.style.backgroundColor = "#ff9891";
  btnEx5Stop.style.borderColor = "#ff9891";
  btnEx5Stop.style.visibility = "visible";
  btnEx5Stop.style.borderWidth = "thin";
  btnEx5Start.style.backgroundColor = "";
  btnEx5Start.style.visibility = "hidden";
}

const stopRotateString = () => {
  clearInterval(interval);
  btnEx5Start.style.backgroundColor = "#cff7a1";
  btnEx5Start.style.borderColor = "#cff7a1";
  btnEx5Start.style.visibility = "visible";
  btnEx5Start.style.borderWidth = "thin";
  btnEx5Stop.style.backgroundColor = "";
  btnEx5Stop.style.visibility = "hidden";
};

// Ex6
const infoEx6 = document.getElementById("ex6info");

function checkLeapYear() {
  // Get a Use number
  let guest = parseInt(prompt("Insert a year"));

  // Check whether it is
  if (guest % 4 === 0 && guest % 100 === 0 && guest % 400 === 0) {
    //console.log(`${guest} is year is Leap Year`);
    infoEx6.innerHTML = `${guest} is year is Leap Year`;
  } else {
    //console.log(`${guest} is year is not an Leap Year`);
    infoEx6.innerHTML = `${guest} is year is not an Leap Year`;
  }
}

// Ex7
const infoEx7 = document.getElementById("ex7info");
let n = 0;

function find1Sunday() {
  for (let year = 2014; year <= 2050; year++) {
    let day = new Date(year, 0, 1).getDay();

    if (day === 0) {
      n++;
      console.log(`${n} -> ${year}`);
      infoEx7.innerHTML += `${n} -> ${year} <br/>`;
    }
  }
}

// Ex8
const generateRandom = () => {
  return Math.floor(Math.random() * 10) + 1;
};

let random = generateRandom();
const button = document.getElementById("ex8btn");
const info = document.getElementById("ex8info");

function guessNumber() {
  // Get the frist number
  let guest = parseInt(document.getElementById("numEx8").value);
  //console.log(typeof random);
  //console.log(typeof guest);

  if (guest == random) {
    info.innerHTML = "Good Work";
    button.innerText = "Restart";
    button.onclick = restartGame;
    info.style.color = "green";
  } else {
    info.innerHTML = "Bad Choice";
    button.innerText = "Try Again";
    info.style.color = "red";
  }
}

const restartGame = () => {
  random = generateRandom();
  button.innerText = "Try Again";
  button.onclick = guessNumber;
  guessNumber();
};

// Ex9
const infoEx9 = document.getElementById("ex9info");

function daystoChristmas() {
  let date = new Date();
  //console.log(`Actual date: ${date}`);
  infoEx9.innerHTML = `Actual date: ${date} <br/>`;

  let year = date.getFullYear();

  // Define christmas date
  let christmas = new Date(year, 11, 25);
  //console.log(`Next Christmas date: ${christmas}`);
  infoEx9.innerHTML += `Next Christmas date: ${christmas} <br/>`;

  // calculate diference between christmas and today
  let timediff = christmas - date;

  let days = parseInt(timediff / (1000 * 60 * 60 * 24));
  // 1000 is ms
  // 60 is seconds
  // 60 minutes
  // 24 hours
  //console.log(`${days} days until Christmas`);
  infoEx9.innerHTML += `${days} days until Christmas <br/>`;
}

//Ex10
function multiply() {
  // Get the frist number
  number1 = document.getElementById("number1").value;

  // Get the second number
  number2 = document.getElementById("number2").value;

  document.getElementById("result10").innerHTML = number1 * number2;
}

function divide() {
  // Get the frist number
  number1 = document.getElementById("number1").value;

  // Get the second number
  number2 = document.getElementById("number2").value;

  document.getElementById("result10").innerHTML = number1 / number2;
}

// Ex11
function celsius() {
  // Get the frist number
  Temp = document.getElementById("Temp").value;
  document.getElementById("result11").innerHTML = ((Temp - 32) * 5) / 9;
}

function fahrenheit() {
  // Get the frist number
  Temp = document.getElementById("Temp").value;
  document.getElementById("result11").innerHTML = (Temp * 9) / 5 + 32;
}

//Ex12
const infoEx12 = document.getElementById("ex12info");

function getCurrentURL() {
  let currentURL = window.location.href;

  //console.log(currentURL);
  infoEx12.innerHTML = `Current URL: ${currentURL}`;
}

//Ex13
const infoeEx13 = document.getElementById("ex13info");

function createVar() {
  //infoeEx13.innerHTML = `Next Christmas date: ${christmas}`;
}

//Ex14
const infoEx14 = document.getElementById("ex14info");

function fileextension() {
  // Get the filename
  //let filename = prompt("Insert a the file name");
  let filename = document.getElementById("textEx14").value;

  if (filename.includes(".")) {
    let extension = filename.split(".").pop();
    //console.log(`The file extension is: ${extension}`);
    infoEx14.innerHTML = `The file extension is: ${extension}`;
    infoEx14.style.color = "";
  } else {
    //console.log(`there is no file extension`);
    infoEx14.innerHTML = `There is no file extension`;
    infoEx14.style.color = "red";
  }
}

//Ex15
const infoEx15 = document.getElementById("ex15info");
const subnumb = 13;

function diffBetween13() {
  // Get the number
  let insnumber = parseInt(document.getElementById("numEx15").value);
  const diff = subnumb - insnumber;
  const doublediff = (insnumber - subnumb) * 2;

  if (insnumber > subnumb) {
    infoEx15.innerHTML = `The insert number is greater than ${subnumb} <br />`;
    infoEx15.innerHTML += `The double of the difference between ${insnumber} and ${subnumb} is ${doublediff}`;
  } else {
    infoEx15.innerHTML = `The difference between ${subnumb} and ${insnumber} is ${diff}`;
  }
}

//Ex16
const infoEx16 = document.getElementById("ex16info");

function SumTwoInt() {
  // Get the 1st number
  let insnumber1 = parseInt(document.getElementById("numEx16.1").value);
  // Get the 2nd number
  let insnumber2 = parseInt(document.getElementById("numEx16.2").value);

  const sum = insnumber1 + insnumber2;
  const triple = 3 * (insnumber1 + insnumber2);

  if (insnumber1 === insnumber2) {
    infoEx16.innerHTML = `The triple sum of ${insnumber1} and ${insnumber2} is ${triple}`;
  } else {
    infoEx16.innerHTML = `The sum of ${insnumber1} and ${insnumber2} is ${sum}`;
  }
}

//Ex17
const infoEx17 = document.getElementById("ex17info");
const subnumbex17 = 19;

function diffBetween19() {
  // Get the number
  let insnumber = parseInt(document.getElementById("numEx17").value);
  const diff = subnumbex17 - insnumber;
  const triplediff = (insnumber - subnumb) * 3;

  if (insnumber > subnumb) {
    infoEx17.innerHTML = `The insert number is greater than ${subnumbex17} <br />`;
    infoEx17.innerHTML += `The triple of the difference between ${insnumber} and ${subnumbex17} is ${triplediff}`;
  } else {
    infoEx17.innerHTML = `The difference between ${subnumbex17} and ${insnumber} is ${diff}`;
  }
}

//Ex18
const infoEx18 = document.getElementById("ex18info");
const checkNumbEx18 = 50;

function sumTwoInt() {
  // Get the 1st number
  let insnumber1 = parseInt(document.getElementById("numEx18.1").value);
  // Get the 2nd number
  let insnumber2 = parseInt(document.getElementById("numEx18.2").value);

  const sum = insnumber1 + insnumber2;

  /*
  if (
    insnumber1 === checkNumbEx18 ||
    insnumber2 === checkNumbEx18 ||
    sum === checkNumbEx18
  ) {
    if (
      insnumber1 === checkNumbEx18 &&
      insnumber2 != checkNumbEx18 &&
      sum != checkNumbEx18
    ) {
      infoEx18.innerHTML = `The 1st number is ${checkNumbEx18}`;
      infoEx18.style.color = "green";
    } else if (
      insnumber2 === checkNumbEx18 &&
      insnumber1 != checkNumbEx18 &&
      sum != checkNumbEx18
    ) {
      infoEx18.innerHTML = `The 2nd number is ${checkNumbEx18}`;
      infoEx18.style.color = "green";
    } else if (insnumber1 === checkNumbEx18 && insnumber2 === checkNumbEx18) {
      infoEx18.innerHTML = `The 1st and the 2nd number is ${checkNumbEx18}`;
      infoEx18.style.color = "green";
    } else if (
      sum === checkNumbEx18 &&
      insnumber1 != checkNumbEx18 &&
      insnumber2 != checkNumbEx18
    ) {
      infoEx18.innerHTML = `The sum of ${insnumber1} and ${insnumber2} is ${sum}`;
      infoEx18.style.color = "green";
    } else if (sum === checkNumbEx18 && insnumber1 === checkNumbEx18) {
      infoEx18.innerHTML = `The 1st number is ${checkNumbEx18}<br/>`;
      infoEx18.innerHTML += `The sum of ${insnumber1} and ${insnumber2} is ${sum}`;
      infoEx18.style.color = "green";
    } else if (sum === checkNumbEx18 && insnumber2 === checkNumbEx18) {
      infoEx18.innerHTML = `The 2nd number is ${checkNumbEx18}<br/>`;
      infoEx18.innerHTML += `The sum of ${insnumber1} and ${insnumber2} is ${sum}`;
      infoEx18.style.color = "green";
    }
  } else {
    infoEx18.innerHTML = `Neither number nor the sum of ${insnumber1} and ${insnumber2} is equal to ${checkNumbEx18}`;
    infoEx18.style.color = "red";
  }
    */
  infoEx18.innerHTML = "";

  if (insnumber1 === checkNumbEx18) {
    infoEx18.innerHTML = `The 1st number is ${checkNumbEx18}<br/>`;
    infoEx18.style.color = "green";
  }
  if (insnumber2 === checkNumbEx18) {
    infoEx18.innerHTML += `The 2nd number is ${checkNumbEx18}<br/>`;
    infoEx18.style.color = "green";
  }
  if (sum === checkNumbEx18) {
    infoEx18.innerHTML += `The sum of ${insnumber1} and ${insnumber2} is ${sum}<br/>`;
    infoEx18.style.color = "green";
  }
  if (
    insnumber1 != checkNumbEx18 &&
    insnumber2 != checkNumbEx18 &&
    sum != checkNumbEx18
  ) {
    infoEx18.innerHTML = `Neither number nor the sum of ${insnumber1} and ${insnumber2} is equal to ${checkNumbEx18}`;
    infoEx18.style.color = "red";
  }
}

//Ex19
const infoEx19 = document.getElementById("ex19info");
const subNumb1Ex19 = 100;
const subNumb2Ex19 = 400;
const subCompNumbEx19 = 20;

function CheckInteger() {
  // Get the number
  let insnumber = parseInt(document.getElementById("numEx19").value);

  const diff100 = subNumb1Ex19 - insnumber;
  const diff400 = subNumb2Ex19 - insnumber;

  if (diff100 <= subCompNumbEx19 && diff400 > subCompNumbEx19) {
    infoEx19.innerHTML = `The difference between ${subNumb1Ex19} and ${insnumber} is within ${subCompNumbEx19}<br/>`;
    infoEx19.innerHTML += `The difference between ${subNumb2Ex19} and ${insnumber} is greater ${subCompNumbEx19}`;
  } else if (diff400 <= subCompNumbEx19 && diff100 > subCompNumbEx19) {
    infoEx19.innerHTML = `The difference between ${subNumb1Ex19} and ${insnumber} is greater ${subCompNumbEx19}<br/>`;
    infoEx19.innerHTML += `The difference between ${subNumb2Ex19} and ${insnumber} is within ${subCompNumbEx19}`;
  } else if (diff400 <= subCompNumbEx19 && diff100 <= subCompNumbEx19) {
    infoEx19.innerHTML = `The difference between ${subNumb1Ex19} and ${insnumber} is within ${subCompNumbEx19}<br/>`;
    infoEx19.innerHTML += `The difference between ${subNumb2Ex19} and ${insnumber} is within ${subCompNumbEx19}`;
  } else {
    infoEx19.innerHTML = `The difference between ${subNumb1Ex19} and ${insnumber} is greater ${subCompNumbEx19}<br/>`;
    infoEx19.innerHTML += `The difference between ${subNumb2Ex19} and ${insnumber} is greater ${subCompNumbEx19}`;
  }
}

//Ex20
const infoEx20 = document.getElementById("ex20info");
const checkNumbEx20 = 0;

function checkIntPosorNeg() {
  // Get the 1st number
  let insnumber1 = parseInt(document.getElementById("numEx20.1").value);
  // Get the 2nd number
  let insnumber2 = parseInt(document.getElementById("numEx20.2").value);

  if (insnumber1 > checkNumbEx20 && insnumber2 < checkNumbEx20) {
    infoEx20.innerHTML = `The 1st number is Positive <br/>`;
    infoEx20.innerHTML += `The 2nd number is Negative`;
    infoEx20.style.color = "green";
  } else if (insnumber1 < checkNumbEx20 && insnumber2 > checkNumbEx20) {
    infoEx20.innerHTML = `The 1st number is Negative <br/>`;
    infoEx20.innerHTML += `The 2nd number is Positive`;
    infoEx20.style.color = "green";
  } else if (insnumber1 > checkNumbEx20 && insnumber2 > checkNumbEx20) {
    infoEx20.innerHTML = `Boths numbers are Positive`;
    infoEx20.style.color = "red";
  } else if (insnumber1 < checkNumbEx20 && insnumber2 < checkNumbEx20) {
    infoEx20.innerHTML = `Boths numbers are Negative`;
    infoEx20.style.color = "red";
  }
}
