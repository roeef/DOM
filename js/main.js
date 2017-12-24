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

function submitForm() {

    function validateElement(el, req,minLen,passwordVerification, allowedCountriesList) {
        let value = el.value;

        function getErrorMsgElement(el) {
            return el.parentElement.getElementsByClassName("valMsg")[0];
        }

        function setValidationError(el, s) {
            getErrorMsgElement(el).innerHTML = s;
        }

        function clearValidationError(el) {
            getErrorMsgElement(el).innerHTML ="";
        }

        if (req && !(value)){
            console.log("Validate req - " + req +", value" +value);
            setValidationError(el,'Required');
        } else if (minLen && minLen > value.length){
            setValidationError(el, "Too Short. Use at least " + minLen +" charchters");
        } else if (passwordVerification && passwordVerification!==value){
            setValidationError(el, "Passwords are not the same!");
        } else if (allowedCountriesList && !(value in allowedCountriesList)) {
            setValidationError(el, "Currently we only support " + allowedCountriesList.join(", "));
        }
        else {
            clearValidationError(el);
            return true;
        }
        return false;
    }

    console.log("Submit started")
    let isValid = true;
    const N = null;
    isValid &= validateElement(document.getElementById("userName"),true,5);
    isValid &= validateElement(document.getElementById("email"),true);
    isValid &= validateElement(document.getElementById("password"),true,8);
    isValid &= validateElement(document.getElementById("passwordVerification"),true,N,document.getElementById("password").value);
    isValid &= validateElement(document.getElementById("pNumber"),true,10);
    isValid &= validateElement(document.getElementById("country"),true,N,N,['USA','Israel','London']);
    if (isValid) {
        document.getElementById("validationPass").innerHTML = "Great! Thank you!";
    }
}


