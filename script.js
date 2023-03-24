const hide = setTimeout(opacity, 7000);
function opacity() {
        document.getElementById("bg").style.display = "none";
        document.getElementById("hero").style.display = "block";
        document.getElementById("content").style.display = "block";
}