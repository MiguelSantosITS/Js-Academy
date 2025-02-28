
function countDaysToChristmas(){
	let Today = new Date();//not working??
	
	console.log(Today.getFullYear() + "/" + Today.getMonth() + "/" + Today.getDay());
	let string = "Christmas is in " + getDays(Today.getMonth(), Today.getDay()) + " days!";
	document.getElementById("daysTillChristmas_output").textContent = string;
}

function getDays(month, day){
	return (((11 - month) * 30) + (25 - day));
}