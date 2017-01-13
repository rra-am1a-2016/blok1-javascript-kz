//alert("Hallo wereld");

document.getElementsByTagName("button")[0].onclick =  function(){
   var firstname = document.getElementsByName("firstname")[0].value;
   var infix = document.getElementsByName("infix")[0].value;
   var lastname = document.getElementsByName("lastname")[0].value;
   var age = document.getElementsByName("age")[0].value;
   
   
   //alert("De ingevoerde waarde is: " + firstname + infix + lastname);

   

   var xmlhttp = new XMLHttpRequest();

   xmlhttp.onreadystatechange = function(){
      if ( xmlhttp.readyState == 4 && xmlhttp.status == 200)
      {
         document.getElementsByTagName("p")[0].innerHTML = xmlhttp.responseText;
         
      }
   }

   xmlhttp.open("GET", "http://localhost/2016-2017/am1a/javascript-kz/ajax_insert_data.php?firstname=" + firstname + 
                       "&infix=" + infix + "&lastname=" + lastname + "&age=" + age, true);
   xmlhttp.send();
}
