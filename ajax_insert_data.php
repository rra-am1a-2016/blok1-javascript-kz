<?php
   if (!empty($_GET))
   {
      $name = $_GET["firstname"]." ".$_GET["infix"]." ".$_GET["lastname"];
   }
   else
   {
      $name = "Geen naam meegegeven";
   }

   $servername = "localhost";
   $username = "root";
   $password = "";
   $databasename = "am1a_2016_ajax";

   $conn = mysqli_connect($servername, $username, $password, $databasename);

   $query = "INSERT INTO `users` (`id`,
                                  `firstname`,
                                  `infix`,
                                  `lastname`,
                                  `age`)
             VALUES              (NULL,
                                  '".$_GET["firstname"]."',
                                  '".$_GET["infix"]."',
                                  '".$_GET["lastname"]."',
                                  ".$_GET["age"].")";
   $result = mysqli_query($conn, $query);

   if ($result)
   {
      echo "Het record ".$name." is opgeslagen!";
   }
?>