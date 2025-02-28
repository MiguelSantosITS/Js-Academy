function animateString(target){
    let str = document.getElementById(target);
    let text = str.childNodes[0].data;

    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        str.childNodes[0].data = text;
    }, 400);
}