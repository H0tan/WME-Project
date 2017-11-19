<?php
require('world_data_parser.php');

$Parser = new WorldDataParser();
$array = $Parser->parseCSV("./world_data_v1.csv");
echo "<pre>";
print_r($array);
echo "</pre>";

?>