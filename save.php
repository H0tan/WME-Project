<?php

require('world_data_parser.php');

$save = new WorldDataParser();
$array = $save->parseCSV("./world_data_v1.csv");
$result = $save->saveXML($array);
if ($result)
         echo "Speichern erfolgreich";
else
	echo "Speichern nicht erfolgreich";

?>

