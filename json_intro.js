// Maak een JSON string.
var jsonString = '{"firstname": "Arjan", ' + 
                  '"infix": "de", ' + 
                  '"lastname": "Ruijter", ' + 
                  '"hairlength": 66.78, ' +    //kommagetal
                  '"shoesize": 10, ' + 
                  '"rich": false, ' +          //boolean
                  '"favoriteColor": ["geel", "blauw", "rood"], ' + //array
                  '"auto": {"merk": "Mercedes", "kenteken": "51-HB-ZP"}}'; //object

// Zet deze JSON string om naar een Javascript object
var objFromJsonString = JSON.parse(jsonString);

console.debug(objFromJsonString);
// Lees het Javascriptobject uit en zet het in de html tags
document.getElementById("p_tag").innerHTML = 
"Mijn naam is: " + objFromJsonString.firstname + " "
                 + objFromJsonString.infix + " "
                 + objFromJsonString.lastname + "<br>"
                 + "Mijn haarlengte is " + objFromJsonString.hairlength + "cm<br>"
                 + "Rijk? : " + objFromJsonString.rich  + "<br>"
                 + "Mijn schoenmaat is " + objFromJsonString.shoesize + "<br>"
                 + "Mijn favoriet kleur is " + objFromJsonString.favoriteColor[0] + "<br>"
                 + "Mijn automerk is " + objFromJsonString.auto.merk + "<br>"
                 + "Mijn kenteken is " + objFromJsonString.auto.kenteken + "<br>";
                 

// Maak een array die drie objecten bevat. 
// Elk object heeft een naam en leeftijd property
