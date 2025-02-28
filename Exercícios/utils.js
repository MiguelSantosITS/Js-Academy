function animateTitles(){
	let titles = document.querySelectorAll(".title");
	
	titles.forEach((title, index) => {
		setTimeout(() => {
			title.style.opacity = 1;
			title.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
		}, index * 100);
	});
}

//see <nav>