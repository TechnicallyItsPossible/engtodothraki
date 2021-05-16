  
var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

var serverurl = "https://api.funtranslations.com/translate/dothraki.json"

function gettranslated(input) {
    return serverurl + "?" + "text=" + input
}

function errorhandling(error){
    console.log("error occured", error);
    alert("Bloody hell mate! This wasn't expected. Maybe try again in sometime later?")
}

function clickeventhandler() {
    console.log("clicked");
    console.log("input:" + txtinput.value);
    var inputtext = txtinput.value;
    fetch(gettranslated(inputtext))
        .then(response => response.json())
        .then(json => {
            var translation = json.contents.translated;
            outputdiv.innerText = translation;
        })
        .catch(errorhandling)
};


btnTranslate.addEventListener("click", clickeventhandler)