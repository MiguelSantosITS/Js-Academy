function showTriangleArea(a, b, c){
    return (0.25 * Math.sqrt((a + b + c) * (-a + b + c) *
	(a - b + c)  * (a + b - c) ));
	
	console.log(showTriangleArea(5, 6, 7));
}