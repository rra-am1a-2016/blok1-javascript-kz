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
      var jsonObj = JSON.parse(this.responseText);
      document.getElementById("ajaxTekst").innerHTML = "Mijn naam is: " + jsonObj.name + "<br>Mijn leeftijd is: " + jsonObj.age + "<br>";
   }
};

xmlhttp.open("GET", "data.php", true);

document.getElementById("btn").onclick = function()
{   
   xmlhttp.send();
}


