var originalValue ="";
function onParHover() {
    // Do on hover action
    let myP = document.getElementById("myP");
    originalValue = myP.innerHTML;
    myP.innerHTML = "Thank You!";
}

function onParHoverFinshed (){
    // do hover finished
    let myP = document.getElementById("myP");
    myP.innerHTML=originalValue;
}
