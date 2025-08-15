<?php

/* these are already reserved */
$ReservedPhoneNo = [
'058 512 10 99',
'058 512 11 00',
'058 512 11 01',
'058 512 11 02',
'058 512 11 03',
'058 512 11 04',
'058 512 11 05',
'058 512 11 06',
'058 512 88 05',
];
$FirstPhoneCounter  = 0;
$SecondPhoneCounter = 1;
$GeneratePhoneNo    = function () {
/* create new number */
$NewNumber    = '058 512 ';
$NewNumber   .= ($GLOBALS['FirstPhoneCounter'] < 10 ? ('0' . $GLOBALS['FirstPhoneCounter']) : $GLOBALS['FirstPhoneCounter']);
$NewNumber   .= ' ' . ($GLOBALS['SecondPhoneCounter'] < 10 ? ('0' . $GLOBALS['SecondPhoneCounter']) : $GLOBALS['SecondPhoneCounter']);

if ($GLOBALS['SecondPhoneCounter'] >= 99) {
 $GLOBALS['SecondPhoneCounter'] = 1;
 $GLOBALS['FirstPhoneCounter'] += 1;
} else {
    $GLOBALS['SecondPhoneCounter'] += 1;
}

/* if it exists, call self & increase counter */
if (in_array($NewNumber, $GLOBALS['ReservedPhoneNo'])) {
 return $GLOBALS['GeneratePhoneNo']();
}
return $NewNumber;
};


for ($i = 0; $i < 1500; $i++) {
    echo($GeneratePhoneNo() . '<br>');
}
