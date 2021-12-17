function myKeyEvent() {
    let value = document.getElementById("name").value;
    console.log("Searched Value: " + value);
}

function myFocusEvent() {
    document.getElementById("name").style.backgroundColor = "red";
}

function myBlurEvent() {
    document.getElementById("name").style.backgroundColor = "yellow";
}