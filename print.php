<?php
require('world_data_parser.php');

$Parser = new WorldDataParser();
$array = $Parser->parseCSV("./world_data_v1.csv");
$Parser->saveXML($array);
$Parser->printXML("./world_data.xml", "./table.xslt");
?>