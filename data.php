<?php
   // Opdracht maak een JSON string met daarin een JS object.
   // Dit jsobject heeft een name property met als waarde je voornaam
   $dataArray = array("name" => "Arjan", "age" => 34);



   $jsonString = json_encode($dataArray);
   echo $jsonString;
?>
