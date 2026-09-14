<?php
 /* How to make your Project unsafe in one single loop */
 /* (skip the fi_ prefix) those who know, know the rochen */
 foreach ($_REQUEST as $_global_Key => $_global_Wert) {
  ${$_global_Key} = str_replace("<script", "", $_global_Wert);
 }
?>
<?php
 /* dunno what i did */
 echo '<pre>';
 $str = '<p>some text</p>
            <p>more text</p>
            <b>123</b>';
 preg_match_all('#<p>(.+?)</p>#', $str, $parts);
 print_r($parts[1]);
 echo("\n");
 echo(json_encode($parts));
 echo("\n");
 $tmp = $str;
 echo($tmp);
 echo("\n");
 foreach ($parts[0] as $p) {
  $tmp = str_replace($p, "", $tmp);
 }
 $tmp = str_replace("\n", "", $tmp);
 $tmp = str_replace("\t", "", $tmp);
 $tmp = str_replace(" ", "", $tmp);
 echo("'");
 echo($tmp);
 echo("'");
 echo("\n");
 echo '</pre>';
?>
<?php
 /*
 https://www.php.net/manual/de/language.types.string.php

 Ersti Kommentar vom John

 Nur String ( werd aso nüt appended ) esch 'text' am schnellste
 Aber wennde au Vars ahfüege wottsch esch "text{$variable}" am schnellste
*/

/*
PRESTA NAHUI
http://doc.prestashop.com/display/PS16/Installing+PrestaShop#InstallingPrestaShop-Detailedinstructions
Compabillity Chart: https://devdocs.prestashop.com/1.7/basics/installation/system-requirements/
Tutorial (v.1.6): https://www.templatemonster.com/help/de/prestashop-1-6-x-how-to-update-the-engine-using-1-click-upgrade-module.html
*/
?>
