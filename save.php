<?php

require('world_data_parser.php');

$save = new WorldDataParser();
$array = $save->parseCSV();
%result = $save->saveXML($array);
if ($result)
         echo;

?>

