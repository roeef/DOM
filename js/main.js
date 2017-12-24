// listeners and accessing elements with dom
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

// Attributes
let aEl = document.createElement('a');
aEl.setAttribute('href','http://www.elevationacademy.co');
aEl.setAttribute('target','_blank');
aEl.innerHTML = "Elevation's Website"
document.getElementById("p2").appendChild(aEl);


// Styling

document.getElementById('div2').style.backgroundColor = "blue";

// ex1
let origBtnHTML;
function myBtnClick() {
    el = document.getElementById('btn');
    if (el.myState) {
        el.myState = false;
        el.innerHTML = origBtnHTML;
    } else {
        el.myState = true;
        origBtnHTML = el.innerHTML;
        el.innerHTML = "I Was Pressed! Do it again!";
    }
}

function submitForm(){
    let userName = document.getElementById("userName");
    isValidUserName(userName);
    let password = document.getElementById("password");
    isValidPassword(password);
    let passwordVerifi = document.getElementById("passwordVerification");
    isValidPasswordVerification(passwordVerifi);
    let pnumber = document.getElementById("pNumber");
    isValidPhone(pnumber);
    let elementById = document.getElementById("country");
    isValidCountry(elementById);
}


