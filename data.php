<?php
   // Opdracht maak een JSON string met daarin een JS object.
   // Dit jsobject heeft een name property met als waarde je voornaam
   
   // Dit zijn de servercredentials
   $serverName = "localhost";
   $userName = "root";
   $password = "";
   $dbName = "am1a_2016_ajax";

   // Maak met de bovenstaande credentials verbinding met de server
   $conn = mysqli_connect($serverName, $userName, $password, $dbName);
   
   // Maak een zoekvraag
   $query = "SELECT * FROM `users` WHERE `id` = 2";

   // Verstuur de zoekvraag naar de server
   $result = mysqli_query($conn, $query);

   // Wat je terugkrijgt is een resource, die is niet zomaar uitleesbaar. 
   // Maar je kunt er wel heel makkelijk een een associatief array van maken. 
   $record = mysqli_fetch_array($result, MYSQLI_ASSOC);

   var_dump($record);

   $jsonStr = json_encode($record);
   echo $jsonStr;



   $dataArray = array("name" => "Arjan", "age" => 34);



   $jsonString = json_encode($dataArray);
   echo $jsonString;
?>
