function myHouse() {
    document.getElementById("more").addEventListener("click", placeThis);
    document.getElementById("four").addEventListener("click", placeThis);
    document.getElementById("dt").addEventListener("click", placeThis);
    document.getElementById("non").addEventListener("change", placeThis);
    document.getElementById("five").addEventListener("click", placeThis);
}

function placeThis(e){
//    e.preventDefault();
    var a = document.getElementById("more");
    var b = document.getElementById("four");
    var c = document.getElementById("dt");
    var d = document.getElementById("non");
    var g = document.getElementById("five");

    if ((a.checked === true) && (c.checked === true)){
      console.log ("hey");
      document.getElementById("suggestions").style.display = "block";
      document.getElementById("output").innerHTML =
      " It is very difficult to find an apartment larger than 51/2 in downtown";
    }
    else if ((c.checked === true) && ((b.checked === true) || (g.checked ===true)) && ((d.value == "500&minus;1000")||(d.value =="less500" ))){
      console.log("wohoo");
    document.getElementById("suggestions").style.display = "block";
    document.getElementById("output").innerHTML =
    " Normally an apartment of 41/2 and above costs more than 1000$ in downtown area";}
    else {
      console.log("whatsup");
    }
}


window.addEventListener("load", myHouse, false);
