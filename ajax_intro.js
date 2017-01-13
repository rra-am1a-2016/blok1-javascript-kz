// Van internet afgehaalt.
/*
document.onreadystatechange = function () {
     if (document.readyState == "complete") {
     // document is ready. Do your stuff here
   }
 }
*/


// Maak een object van de XMLHttpRequest prototype in de browser
var xmlhttp = new XMLHttpRequest();

// Koppel het onreadystatechange event aan dit object
xmlhttp.onreadystatechange = function()
{
   // check de readyState (moet 4 zijn) en de status(moet 200 zijn)
   if (this.readyState == 4 && this.status == 200)
   {
      //alert(xmlhttp.responseText);
      var jsonObj = JSON.parse(this.responseText);
      //console.debug(jsonObj);
      document.getElementById("ajaxTekst").innerHTML = "Mijn naam is: " + jsonObj.firstname + 
                                                       "<br>Mijn leeftijd is: " + jsonObj.age + 
                                                       "<br>Mijn id is: " + jsonObj.id + "<br>";
   }
};


var divs = document.getElementsByTagName("div");

for ( var i = 0; i < divs.length; i++)
{
  divs[i].onmouseover = function()
  {
    //alert("Hoi" + this.innerHTML);
    xmlhttp.open("POST", "data.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("id=" + this.innerHTML);
  }
}


