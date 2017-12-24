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


var elCount=1;

function onListClick() {
    let textNode = document.createTextNode("Added Element   " + elCount++);
    let newChild = document.createElement("li");
    newChild.appendChild(textNode);
    document.getElementById("itemList").appendChild(newChild);
}
