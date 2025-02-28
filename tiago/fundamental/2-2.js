// 1
const ex1 = () => {
  const object = {
    age: 25,
    hair: "long",
    beard: true,
  };
  const goal = {
    hair: "long",
    beard: true,
  };
  if (
    Object.keys(goal).every(
      (key) => object.hasOwnProperty(key) && obj[key] === source[key]
    )
  )
    document.getElementById("match").innerHTML = "Match!";
  else document.getElementById("match").innerHTML = "Don't match!";
};

// 3
const ex3 = () => {
  let csvTo2D = document.getElementById("csvTo2D").value;
  console.log("Início");
  console.log(csvTo2D);
  // csvTo2D = csvTo2D.replace("\\n", "\n");
  csvTo2D = csvTo2D.split("\n");
  console.log("Depois do split");
  console.log(csvTo2D);
  csvTo2D = csvTo2D.map((v) => v.split(","));
  console.log("Depois do map");
  console.log(csvTo2D);
  let i = 0;
  csvTo2D.forEach((element) => {
    i++;
    const ul = document.createElement("ul");
    ul.textContent = `Line ${i}:`;
    element.forEach((element2) => {
      let li = document.createElement("li");
      li.textContent = element2;
      ul.appendChild(li);
    });
    document.getElementById("2Darray").appendChild(ul);
  });
};

// 5
const ex5 = () => {
  let array = [
    {
      x: 100,
      y: 200,
    },
    {
      x: 300,
      y: 400,
      z: 500,
    },
    {
      x: 6,
    },
    {
      y: 7,
    },
  ];
  let variables = Array.from(document.querySelectorAll("#variables input"));
  variables = variables.filter((variable) => variable.checked);
  variables.forEach((variable) => {
    variables[variables.indexOf(variable)] = variable.id;
  });
  let csv = variables.join(",") + "\n";
  console.log(csv);
  array.forEach((object) => {
    variables.forEach((variable) => {
      if (object[variable]) csv += `"${object[variable]}",`;
      else csv += '"",';
      console.log(csv);
    });
    csv.charAt(csv.length - 1) == ","
      ? (csv = csv.slice(0, csv.length - 1))
      : true;
    csv += "\n";
    console.log(csv);
  });
  console.log(csv);
  document.getElementById("csv").innerHTML = csv;
};

// 6
const ex6 = () => {
  const key = document.getElementById("key").value;
  const object = {
    level1: 100,
    level2: 200,
    level3: 300,
  };
  document.getElementById("value").innerHTML = object[key];
};

// 128
const ex128 = () => {
  const toBeConvertedToCurrency = document.getElementById(
    "toBeConvertedToCurrency"
  ).value;
  const currencies = document.getElementById("currencies");
  const curr = currencies.options[currencies.selectedIndex].text.slice(2);
  console.log(curr);
  document.getElementById("converted").innerHTML = Intl.NumberFormat(
    undefined,
    {
      style: "currency",
      currency: curr,
    }
  ).format(toBeConvertedToCurrency);
};
