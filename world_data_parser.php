<?php

class WorldDataParser
{
         function parseCSV()
         {
         }

         function saveXML($data_array)
         {
                 $xml_data = new SimpleXMLElement('<?xml version="1.0"?><data></data>');
                 foreach( $data_array as $key => $value ) {
                         if( is_numeric($key) ){
                                 $key = 'item'.$key; //dealing with <0/>..<n/> issues
                         }
                         if( is_array($value) ) {
                                 $subnode = $xml_data->addChild($key);
                                 array_to_xml($value, $subnode);
                         } else {
                                 $xml_data->addChild("$key",htmlspecialchars("$value"));
                         }
                 }
                 $result = $xml_data->asXML('/world_data.xml');
                 return $result;
         }

         function printXML()
         {
         }
}
?>