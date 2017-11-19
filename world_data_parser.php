<?php

class WorldDataParser
{
         function parseCSV(string $path)
         {
		 // csv öffnen
   		 $handle = @fopen( $path, "r");

  		  $result = [];

  		  // erste Zeile lesen
  		  $first = strtolower( fgets( $handle, 4096 ) );
  		  // Keys
  		  $keys = str_getcsv( $first );

  		  // bis zum Ende der Datei laufen
  		  while ( ($buffer = fgets( $handle, 4096 )) !== false ) {

  		      // nächster EIntrag
  		      $array = str_getcsv ( $buffer );
  		      if ( empty( $array ) ) continue;

   		     $row = [];
   		     $i=0;
		
   		     // Zahlen mit Werten aus Keys ersetzen
   		     foreach ( $keys as $key ) {
    		        $row[ $key ] = $array[ $i ];
    		        $i++;
  		      }

   		     
    		    $result[] = $row;
  		  }

    		fclose( $handle );
  		  return $result;
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

         function printXML(string $path1, string $path2)
         {
		$xml = new DOMDocument();
		$xml->loadXML($path1); 

		$xsl = new DOMDocument();
		$xsl->load($path2);

		$xsltp = new XSLTProcessor();
		$xsltp->importStyleSheet($xsl);
		return $xsltp->transformToXML($xml);
         }
}
?>