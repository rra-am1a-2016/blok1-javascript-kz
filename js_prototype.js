// Maak een selector voor de knop btn_1
// Koppel daar een onclick event aan die verwijst naar een functie
// Deze functie vuurt een alert af op het scherm
// Dit is een prototype function
function rectangle(length, height, color)
{
   this.length = length;
   this.height = height;
   this.color = color;

   this.rect = function()
   {
      var output = "<div id='div_1' style='background-color: " + this.color + ";" + 
                              " width: " + this.length  + "px;" +
                              " height: " + this.height + "px '>Hallo</div>";
      return output;
   }

   this.changecolor = function(colorchange)
   {
      document.getElementById("div_1").style.backgroundColor = colorchange;
   }
}

var vierkant = new rectangle(100, 100, "yellow");

//console.debug(vierkant);

document.getElementById("btn_1").onclick = function()
{  
   document.write(vierkant.rect());

   document.getElementById("div_1").onclick = function()
   {
      vierkant.changecolor("darkblue");
   }
}





