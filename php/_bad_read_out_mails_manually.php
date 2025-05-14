<?php

/*

TL;DR copy mails from outlook (.msg)
into target "From" Folder

and run this script

btw this code is never going to work flawlessly
but its a good example of "why not to" do it on your own..

*/

error_reporting(E_ALL);
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
/* header('Content-type: text/plain; charset=utf-8'); */




/* take mail instead lmao */
die('NOPE!!!');




$From  = __DIR__ . '/from/';
$To    = __DIR__ . '/to/';
$Temp  = __DIR__ . '/temp/';
$Debug = [];

/* create a folder if it doesn't already exists */
function createDir ($Path, $Permission = 0755, $Recursive = true) {
 return is_dir($Path) || mkdir($Path, $Permission, $Recursive);
};

if (!createDir($From)) {die('From is not a directory: ' . $From);}
if (!createDir($To)) {die('From is not a directory' . $To);}
if (!createDir($Temp)) {die('Temp is not a directory' . $Temp);}

$Result  = [];
$Items   = array_diff(scandir($From), ['..', '.']);
$Counter = 0;
$Error   = 0;

foreach ($Items as $Index => $Path) {

 $Debug = [];

 if (!str_contains($Path, 'HTTP Event')) {
  continue;
 }

 $Counter++;

 $Text = file_get_contents($From . $Path);
 $Text = mb_convert_encoding($Text, 'UTF-8', mb_detect_encoding($Text));
 $Text = iconv('ASCII', 'UTF-8//IGNORE', $Text);
 $Text = iconv('ASCII', 'ISO-8859-1//TRANSLIT', $Text);
 $Text = mb_convert_encoding($Text, 'UTF-8');
 $Text = str_replace('\0', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);
 $Text = str_replace('', '', $Text);

 $Text = str_replace('{|}', '', $Text);
 $Text = str_replace('\u0000', '', $Text);
 $Text = preg_replace('/[\x00-\x1F\x7F]/', '', $Text);

 //$Text = str_replace('\t', '', $Text);
 //$Text = str_replace(["\r\n", "\r", "\n"], '', $Text);

 /* get the text as array */
 $Text = mb_str_split($Text);
 $JSON = '';
 $in   = 0;
 foreach ($Text as $i => $char) {
  if ($char == '{') {
   $in++;
  }
  if ($in && $Text[$i] != '') {
   $JSON .= mb_convert_encoding($Text[$i], 'UTF-8');
  }
  if ($char == '}') {
   $in--;
  }
 }

 $JSON = trim($JSON);
 $Debug[] = $JSON;
 $JSON = str_replace('{??XC}', '', $JSON);
 $JSON = str_replace('E???/?_"?M?', '', $JSON);
 $JSON = str_replace('9]%?', '', $JSON);
 $JSON = str_replace('{?}', '', $JSON);
 $JSON = str_replace('{?G???}', '', $JSON);
 $JSON = str_replace('{A??}', '', $JSON);
 $JSON = str_replace('???q??j??[}', '', $JSON);
 $JSON = str_replace('???q??j??[', '', $JSON);
 $JSON = str_replace('{|}????', '{|}', $JSON);
 $JSON = str_replace('{|}NLu?K?', '{|}', $JSON);
 $JSON = str_replace('{|})', '{|}', $JSON);
 $JSON = explode('}{', $JSON);
 $JSON = '{' . trim(($JSON[1] ?? $JSON[0] ?? '')) . '}';
 $Debug[] = $JSON;
 $JSON = explode('}}??', $JSON)[0];
 $JSON = explode('rcpg125?', $JSON)[0];
 //$JSON = trim(preg_replace('/(.*?)},/', ' ', $JSON));
 $JSON = str_replace('{|})', '', $JSON);
 $JSON = str_replace('{|}', '', $JSON);
 $JSON = str_replace('?????????????????', '', $JSON);
 $JSON = str_replace("????", '', $JSON);
 $JSON = str_replace("*$,Y", '', $JSON);
 $JSON = str_replace("0_300B0102", '', $JSON);
 $JSON = str_replace("Y__su", '', $JSON);
 $JSON = str_replace("\0", '', $JSON);
 $JSON = str_replace("????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????", '', $JSON);
 $JSON = str_replace("?????????????????????????????????????????????????????????????????", '', $JSON);
 $JSON = str_replace("1000001", '', $JSON);
 $JSON = str_replace("??????????????????????????????? ", '', $JSON);
 $JSON = str_replace("????????????????????", '', $JSON);
 $JSON = str_replace("???????????????????", '', $JSON);
 $JSON = str_replace("??????????=", '', $JSON);
 $JSON = str_replace("??????????", '', $JSON);
 $JSON = str_replace("???????????????", '', $JSON);
 $JSON = str_replace("??????????????", '', $JSON);
 $JSON = str_replace("??????????????????", '', $JSON);
 $JSON = str_replace("?????????????????", '', $JSON);
 $JSON = str_replace('?????????????????????', '', $JSON);
 $JSON = str_replace('????????????????????', '', $JSON);
 $JSON = str_replace(' __substg1.0_1000001F*$,????Z?__substg1.0_10090102*??????????????__substg1.0_1035001F*)+?????', '', $JSON);
 $JSON = str_replace('??????????????????????????', '', $JSON);
 $JSON = str_replace('__substg1.0_10090102*??__substg1.0_1035001F*', '', $JSON);
 $JSON = str_replace('__substg1.0_0E02001F*"', '', $JSON);
 $JSON = str_replace('__substg1.0_F*$,^?', '', $JSON);
 $JSON = str_replace('&__substg1.0_0E03001F*', '', $JSON);
 $JSON = str_replace('__substg1.0_1000001F*$,????Z?__substg1.0_10090102*??????????????__substg1.0_1035001F*)+?????', '', $JSON);
 $JSON = str_replace('__substg1.0_0E04001F*%', '', $JSON);
 $JSON = str_replace('\\\\', '\\', $JSON);
 $JSON = str_replace('\/', '/', $JSON);
 $JSON = str_replace(' )+?r__substg1.0_300B0102*???????', '', $JSON);
 $JSON = str_replace('\'Y0__substg1.0_0E1D001F*Zt__substg1.0_F*$,\?', '', $JSON);
 $JSON = str_replace('\'[0__substg1.0_0E1D001F*\t', '', $JSON);
 $JSON = str_replace('\'Z0__substg1.0_0E1D001F*[t__substg1.0_F*$,]?)+?l__substg1.*', '', $JSON);
 $JSON = str_replace('\'Z0__substg1.0_0E1D001F*[r__substg1.0_F*$,]?__substg1.0_10090102*?P__substg1.0_1035001F*?', '', $JSON);
 $JSON = str_replace('\'b0__substg1.0_0E1D001F*ct__substg1.0_F*$,e', '', $JSON);
 $JSON = str_replace('\'S0__substg1.0_0E1D001F*Tt__substg1.0_F*$,V?__substg1.0_10090102*v?__substg1.0_1035001F*', '', $JSON);
 $JSON = str_replace('\'Y0__substg1.0_0E1D001F*Zv__substg1.0_F*$,\f__substg1.0_10090102*~__substg1.0_1035001F*?', '', $JSON);
 $JSON = str_replace('\'S0__substg1.0_0E1D001F*Tt__substg1.0_F*$,V?__substg1.0_10090102*v?__substg1.0_1035001F*?', '', $JSON);
 $JSON = str_replace('\'[0__substg1.0_0E1D001F*t', '', $JSON);
 $JSON = str_replace('\'Y0__substg1.0_0E1D001F*Zn__substg1.0_F*$,\?__substg1.0_10090102*(__substg1.0_1035001F*?', '', $JSON);
 $JSON = str_replace('\'Z0__substg1.0_0E1D001F*[t__substg1.0_F*$,]?', '', $JSON);
 $JSON = str_replace('\'\0__substg1.0_0E1D001F*]v__substg1.0_F*$,_)+__substg1.*?', '', $JSON);
 $JSON = str_replace('\'Z0__substg1.0_0E1D001F*[r__substg1.0_F*$,]?__substg1.0_10090102*?P__substg1.0_1035001F*?', '', $JSON);
 $JSON = str_replace('\'[0__substg1.0_0E1D001F*', '', $JSON);
 $JSON = str_replace('&????????', '', $JSON);
 $JSON = str_replace(')+?l__substg1.*??', '', $JSON);
 $JSON = str_replace(')+?j__substg1.*?', '', $JSON);
 $JSON = str_replace(')+?j__substg1.*', '', $JSON);
 $JSON = str_replace('__substg1.0_F?', '', $JSON);
 $JSON = str_replace(')+?n__substg1.*?', '', $JSON);
 $JSON = str_replace(')+?t__substg1.*??', '', $JSON);
 $JSON = str_replace(')+?h__substg1.*', '', $JSON);
 $JSON = str_replace(')+?t__substg1.*?', '', $JSON);
 $JSON = str_replace(')+?p__substg1.*', '', $JSON);
 $JSON = str_replace(')+?d__substg1.*?', '', $JSON);
 $JSON = str_replace(')+?j__substg1.*?', '', $JSON);
 $JSON = str_replace(')+?l__substg1.*?t', '', $JSON);
 $JSON = str_replace(':)+?f__substg1.*', '', $JSON);
 $JSON = str_replace('__substg1.0_F*$,^', '', $JSON);
 $JSON = str_replace(')+?h__substg1.*?', '', $JSON);
 $JSON = str_replace(')+?t__substg1.*?', '', $JSON);
 $JSON = str_replace(',__substg1.0_F?)+?l__substg1.*', '', $JSON);
 $JSON = str_replace(')+?r__substg1.*', '', $JSON);
 $JSON = str_replace(',LZFuK=', '', $JSON);
 $JSON = str_replace('   ??     ', '', $JSON);
 $JSON = str_replace('??', '', $JSON);
 $JSON = str_replace('        ??', '', $JSON);
 $JSON = str_replace('__substg1.0_F*$,^$?', '', $JSON);
 $JSON = str_replace('p__substg1.0_300B0102*', '', $JSON);
 $JSON = str_replace('__substg1.0_1000001F*', '', $JSON);
 $JSON = str_replace('__substg1.0_F*$,Z?', '', $JSON);
 $JSON = str_replace(')+?p__substg1.*??', '', $JSON);
 $JSON = str_replace(')+?p__substg1.*?', '', $JSON);
 $JSON = str_replace('__substg1.0_F)+?|__substg1.*', '', $JSON);
 $JSON = str_replace(')+?t__substg1.*', '', $JSON);
 $JSON = str_replace(')+?n__substg1.*', '', $JSON);
 $JSON = str_replace(')+?f__substg1.*?', '', $JSON);
 $JSON = str_replace('\'b0__substg1.0_0E1D001F*ct__substg1.0_F*$,e??', '', $JSON);
 $JSON = str_replace(')+?r__substg1.*??', '', $JSON);
 $JSON = str_replace(')+?r__substg1.*?', '', $JSON);
 $JSON = str_replace('\'S0__substg1.0_0E1D001F*Tt__substg1.0_F*$,V?__substg1.0_10090102*v?__substg1.0_1035001F*)+?n__substg1.*?', '', $JSON);
 $JSON = str_replace('__substg1.0_0E02001F*"&????????__substg1.0_0E03001F*????????????????', '', $JSON);
 $JSON = str_replace('__substg1.0_F*$,Z? )+?p__substg1.0_300B0102*?????????', '', $JSON);
 $JSON = str_replace(')+?t__substg1.0_300B0102*???????', '', $JSON);
 $JSON = str_replace('__substg1.0_1000001F*$,????Z?__substg1.0_10090102*??????????????__substg1.0_1035001F*)+?????n__substg1.0_300B0102*??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????', '', $JSON);
 $JSON = str_replace('__substg1.0_F*$,Y__substg1.0_10090102*??__substg1.0_1035001F*)+?|__substg1.0_300B0102*?', '', $JSON);
 $JSON = str_replace('?????????????????????????????????????????????', '', $JSON);
 $JSON = str_replace('__substg1.0_1035001F*)+?|__substg1.*?', '', $JSON);
 $JSON = str_replace('__substg1.0_0E02001F*"&__substg1.0_0E03001F*__substg1.0_0E04001F*%\'[0__substg1.0_0E1D001F*\t__substg1.0_F*$,^? __substg1.0_10090102*??__substg1.0_1035001F*)+?t__substg1.0_300B0102*???????', '', $JSON);
 $JSON = str_replace("__substg1.0_0E02001F*\"&__substg1.0_0E03001F*__substg1.0_0E04001F*%'[0__substg1.0_0E1D001F*\t__substg1.0_F*$,^? __substg1.0_10090102*??__substg1.0_1035001F*)+?t__substg1.0_300B0102*???????", '', $JSON);
 $JSON = str_replace('__substg1.0_0E02001F*"&__substg1.0_0E03001F*__substg1.0_0E04001F*%\'S0__substg1.0_0E1D001F*Tt__substg1.0_F*$,V?__substg1.0_10090102*v?__substg1.0_1035001F*)+?n__substg1.0_300B0102*?s', '', $JSON);
 $JSON = str_replace('ht\\tps:', 'https:', $JSON);
 $JSON = str_replace('ht\tps:', 'https:', $JSON);
 $JSON = str_replace('ht\ttps:', 'https:', $JSON);
 $JSON = str_replace('ht??tps:', 'https:', $JSON);
 $JSON = str_replace('ht?tps:', 'https:', $JSON);
 $JSON = str_replace('ht$?tps:', 'https:', $JSON);
 $JSON = str_replace('http?s:', 'https:', $JSON);
 $JSON = str_replace(',LZFuK=', '', $JSON);
 $JSON = str_replace(',)+?l__substg1.*', '', $JSON);
 $JSON = str_replace('__substg1.0_F*$,Z', '', $JSON);
 $JSON = str_replace('\0__substg1.0_0E1D001F*]v__substg1.0_F*$,_)+__substg1.*?', '', $JSON);
 $JSON = str_replace('\'Y0__substg1.0_0E1D001F*Zv__substg1.0_F*$,\f__substg1.0_10090102*~__substg1.0_1035001F*?', '', $JSON);
 $JSON = str_replace('__substg1.0_10090102*', '', $JSON);
 $JSON = str_replace(')+?n__substg1.*??', '', $JSON);
 $JSON = str_replace('__substg1.0_1000001F', '', $JSON);
 $JSON = str_replace('\'Y0__substg1.0_0E1D001F*Zn__substg1.0_F*$,\?(__substg1.0_1035001F*?', '', $JSON);
 $JSON = str_replace(',      ?  "', ',"', $JSON);
 $JSON = str_replace('\'Y0__substg1.0_0E1D001F*Zr__substg1.0_F*$,\??P__substg1.0_1035001F*', '', $JSON);
 $JSON = str_replace(':)+?f__substg1.*', '', $JSON);
 $JSON = str_replace('z?__substg1.0_1035001F*', '', $JSON);
 $JSON = str_replace('\'\0__substg1.0_0E1D001F*]t__substg1.0_F*$,_?', '', $JSON);
 $JSON = str_replace(')+?l__substg1.*', '', $JSON);
 $JSON = str_replace('__substg1.0_0C1A001F*(R__substg1.0_0C1D0102*S__substg1.0_0C1E001F*!#T__substg1.0_0C1F001F*U$\'V0__substg1.0_0E1D001F*Wt', '', $JSON);
 $JSON = mb_convert_encoding($JSON, 'UTF-8');
 $JSON = iconv('ASCII', 'UTF-8//IGNORE', $JSON);
 $JSON = explode('?rcpg125?', $JSON)[0];

 $JSON = trim($JSON);

 if (substr($JSON, -1) != '}') {
  if (substr($JSON, -2) != '}}') {
   $JSON .= '}}';
  }
 }
 $JSON = str_replace('"THEME": 7        "', '"THEME": 7, "', $JSON);
 $JSON = str_replace('}}?}}', '}}', $JSON);
 $JSON = str_replace('}}]}}', '}}', $JSON);
 $JSON = str_replace('}}U}}', '}}', $JSON);
 $JSON = str_replace('}}c/?}}', '}}', $JSON);
 $JSON = str_replace('}}SK5}}', '}}', $JSON);
 $JSON = str_replace('}}x?}}', '}}', $JSON);
 $JSON = str_replace('}}7?}}', '}}', $JSON);

 if (str_contains($JSON, 'XtHTTP Event | ')) {
  $JSON = explode('XtHTTP Event | ', $JSON)[1];
  $JSON = str_replace('195.49.49.75 / https://procomdev.bluecall.ch/', '', $JSON);
 }
 else if (str_contains($JSON, 'recipients:HTTP Event | ')) {
  $JSON = explode('recipients:HTTP Event | ', $JSON)[1];
  $JSON = str_replace('195.49.49.75 / https://procomdev.bluecall.ch/', '', $JSON);
 }

 if (substr($JSON, -3) == '}}}') {
  $JSON = substr($JSON, 0, -1);
 }

 /*
 echo('<pre>' . ($JSON) . '</pre><br><br>');
 echo('<pre>' . json_encode($JSON, JSON_PRETTY_PRINT) . '</pre><br><br>');
 var_dump($JSON);
 die();
 */

 $Debug[] = $JSON;

 if ($JSON) {
  $Data = json_decode($JSON, true);
  if ($Data && !json_last_error()) {
   $Code = $Data['CODE'] ?? '';
   $URL  = $Data['URL'] ?? '';
   if ($Code && $URL) {
    if (!isset($Result[$Code])) {
     $Result[$Code] = [];
    }
    if (!in_array($URL, $Result[$Code])) {
     $Result[$Code][] = $URL;
    }
    //echo('<hr><pre>' . $Code . ' = ' . $URL . ' </pre><hr>');
   }
  } else {
   $Error++;
   //continue;
   echo('<hr>Trouble at: (' . $Index . ') - ' . $Path . '<b>');
   switch (json_last_error()) {
    case JSON_ERROR_NONE:           echo ' - No errors'; break;
    case JSON_ERROR_DEPTH:          echo ' - Maximum stack depth exceeded'; break;
    case JSON_ERROR_STATE_MISMATCH: echo ' - Underflow or the modes mismatch'; break;
    case JSON_ERROR_CTRL_CHAR:      echo ' - Unexpected control character found'; break;
    case JSON_ERROR_SYNTAX:         echo ' - Syntax error, malformed JSON'; break;
    case JSON_ERROR_UTF8:           echo ' - Malformed UTF-8 characters, possibly incorrectly encoded'; break;
    default:                        echo ' - Unknown error'; break;
   }
   echo('</b>');
   foreach ($Debug as $Item) {
    echo('<pre>' . $Item . '</pre>');
   }
   echo('<hr>');
   //die();
  }
 }
}

echo('FIN (' . $Counter . ' / ' . $Error . '):' . PHP_EOL);
if (!$Error) {
 echo('<pre>' . json_encode($Result, JSON_PRETTY_PRINT) . '</pre>');

 /* move all !*/
 //     //rename($Path, str_replace($From, $To, $Path));
}


?>