function checkJanFirst(){
    let JanFirst = new Date(0, 1, 1, 0, 0, 0);
	let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	if (document.getElementById("JanFirst_output").textContent.length === 0)
	{
		for (let i = 2014; i <= 2050 ; i++){
			JanFirst.setFullYear(i);
			if (weekDays[JanFirst.getDay()] === "Sunday")
				document.getElementById("JanFirst_output").textContent += "January 1st will be a Sunday in " + i + "\n";
		}
	}
	else
		document.getElementById("JanFirst_output").textContent = "January 1st will not be a Sunday between 2014 and 2050";
}