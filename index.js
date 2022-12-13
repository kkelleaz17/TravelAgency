var CPICTURE = 1;

var PICTUREDELAY = false



CHANGEPICTURE(CPICTURE)





function CHANGEPICTURE(I){
    CPICTURE = I;
var A = document.getElementById("EF").childNodes
A.forEach((e)=>{
e.className = "NONSELECTED";

})

let C = document.getElementById("IMG");
const PICS = ["Brazil.jpg","brazil2.jpg","Maui.jpg","Mexico.jpg","NewYork.webp","paris.webp"]
C.src = "./media/"+PICS[I-1];
document.getElementById("T"+I).className = "SELECTED"
}


