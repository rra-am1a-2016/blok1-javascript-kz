var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function()
{
   alert(this.readyState + " | " + this.status);
   if (this.readyState == 4 && this.status == 200)
   {
      alert(this.reponseText);
      document.getElementById("ajaxTekst").innerHTML = this.reponseText;
   }
};

xmlhttp.open("GET", "data.php", true);
xmlhttp.send();


