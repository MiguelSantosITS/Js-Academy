//1
const date = new Date();
const ex1 = () => {
  return (
    "Today is : " +
    date.getDate() +
    "\n" +
    `Current time is : ${
      date.getHours() <= 12
        ? date.getHours() + " AM "
        : date.getHours() - 12 + " PM "
    } : ${date.getMinutes()} : ${date.getSeconds()}`
  );
};

//2
const ex2 = () => {
  window.print();
};

//3
const mmddyyy = (date) =>
  `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date
    .getDate()
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
const mmddyyy2 = (date) =>
  `${(date.getMonth() + 1).toString().padStart(2, "0")}-${date
    .getDate()
    .toString()
    .padStart(2, "0")}-${date.getFullYear()}`;
const ddmmyyyy = (date) =>
  `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
const ddmmyyy2 = (date) =>
  `${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getFullYear()}`;
const ex3 = () => {
  const dateStr = document.getElementById("dateInputted").value;
  console.log(dateStr);
  if (!dateStr) {
    alert("Please insert a valid date!");
    return;
  }
  const date = new Date(dateStr);
  console.log(date);
  document.getElementById("dateFormatted").innerHTML = `
      ${mmddyyy(date)}                  
      ${mmddyyy2(date)}                  
      ${ddmmyyyy(date)}                  
      ${ddmmyyy2(date)}
    `;
};

//4
const ex4 = () => {
  const side1 = document.getElementById("side1").value;
  const side2 = document.getElementById("side2").value;
  const side3 = document.getElementById("side3").value;
  const semiPerimeter = (side1 + side2 + side3) / 2;
  document.getElementById("triangleArea").innerHTML =
    Math.sqrt(
      semiPerimeter *
        (semiPerimeter - side1) *
        (semiPerimeter - side2) *
        (semiPerimeter - side3)
    ) + " m2";
};

//5
let interval;
const ex5run = () => {
  let text = document.getElementById("rotatingString").value;
  interval = setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    document.getElementById("resultString").innerHTML = text;
  }, 100);
};
const ex5stop = () => {
  document.getElementById("resultString").innerHTML = "";
  clearInterval(interval);
};

// 6
const ex6 = () => {
  const year = document.getElementById("yearInputted").value;
  const element = document.getElementById("isGreg");
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
    element.innerHTML = year + " is gregorian!";
  else element.innerHTML = year + " is not gregorian!";
};

// 7
const ex7 = () => {
  const year1 = document.getElementById("year1").value;
  const year2 = document.getElementById("year2").value;
  const list = document.getElementById("years");
  for (let i = year1; i <= year2; i++) {
    const jan1st = new Date(i, 0, 1);
    if (jan1st.getDay() == 0) {
      const li = document.createElement("li");
      li.textContent = i + " is a Jan1st Sunday year!\n";
      list.appendChild(li);
    }
  }
};

// 8
const ex8 = () => {
  const userNum = prompt("Guess a number between 1 and 10");
  const randomNum = Math.ceil(Math.random() * 10);
  const element = document.getElementById("match");
  if (userNum == randomNum) element.innerHTML = "Good Work";
  else element.innerHTML = "Not matched! My number was " + randomNum;
};

// 9
const today = new Date();
const christmas = new Date(today.getFullYear(), 11, 25);
if (
  today.getMonth() == christmas.getMonth() &&
  today.getDay > christmas.getDay()
)
  christmas.setFullYear(today.getFullYear() + 1);
const ex9 = () => {
  const daysInMill = christmas - today;
  const oneDayInMill = 1000 * 60 * 60 * 24;
  const days = daysInMill / oneDayInMill;
  document.getElementById("daysChristmas").innerHTML =
    Math.ceil(days) + " days until Christmas!";
};

// 10
const ex10multiply = () => {
  const num1 = document.getElementById("fn").value;
  const num2 = document.getElementById("sn").value;
  document.getElementById("result").innerHTML = num1 * num2;
};
const ex10divide = () => {
  const num1 = document.getElementById("fn").value;
  const num2 = document.getElementById("sn").value;
  document.getElementById("result").innerHTML = num1 / num2;
};

//11
const ex11celsius = () => {
  const tempInF = document.getElementById("f").value;
  document.getElementById("c").value = ((tempInF - 32) / 9) * 5;
};
const ex11fahrenheit = () => {
  const tempInC = document.getElementById("c").value;
  document.getElementById("f").value = (tempInC * 9) / 5 + 32;
};

//12
const ex12 = () => {
  alert(document.URL);
};

//13
const ex13 = () => {
  const varName = "var";
  const varValue = 1;
  this[varName] = varValue;
  document.getElementById("varValue").innerHTML = this[varName];
};

//20
const ex20 = () => {
  const num1 = document.getElementById("n1").value;
  const num2 = document.getElementById("n2").value;
  const element = document.getElementById("negAndPos");
  if ((num2 > 0 && num1 < 0) || (num1 > 0 && num2 < 0))
    element.innerHTML = "true";
  else element.innerHTML = "false";
};

//23
const ex23 = () => {
  let string = document.getElementById("swapString").value;
  const first = string[0];
  const last = string[string.length - 1];
  string = last + string.substring(1, string.length - 1) + first;
  document.getElementById("swapped").innerHTML = string;
};

// 41
const ex41 = () => {
  const num1 = document.getElementById("number1").value;
  const num2 = document.getElementById("number2").value;
  const num3 = document.getElementById("number3").value;
  const element = document.getElementById("returnedNumber");
  if (num1 === num2)
    if (num2 == num3) element.innerHTML = "30";
    else element.innerHTML = "40";
  if (num1 === num3 || num2 === num3) element.innerHTML = "40";
  else element.innerHTML = "20";
};

// 51
const ex51 = () => {
  let number = document.getElementById("numberInMinutes").value;
  if (number < 0 || number > 1440) {
    alert("Please input a number between 0 and 1440!");
    document.getElementById("numberInMinutes").value = "";
  } else {
    let quotient = Math.ceil(number / 60);
    let remainder = number % 60;
    const inHoursAndMinutes = `${quotient
      .toString()
      .padStart(2, "0")}:${remainder.toString().padStart(2, "0")}`;
    document.getElementById("hMin").innerHTML = `${inHoursAndMinutes}h`;
  }
};

//52
const ex52 = () => {
  const string = document.getElementById("toSort").value;
  let chars = string.split("").sort();
  document.getElementById("resultStr").innerHTML = "Result: " + chars.join("");
};

//69
const ex69 = () => {
  let array = document.querySelectorAll("#array input");
  let sum = 0;
  array.forEach((element) => {
    sum += Number(element.value);
  });
  document.getElementById("arraysResult").innerHTML = sum;
};

// 127
const ex127 = () => {
  let number = Number(document.getElementById("numberInputted").value);
  number = number.toString(2);
  number = number.split("").reverse().join("");
  number = parseInt(number, 2);
  document.getElementById("resultNumber").innerHTML = number;
};
