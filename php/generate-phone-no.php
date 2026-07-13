<?php

/* Intentional non-dynamic gen */

$Prefix          = '079';
$Suffix          = '123';

/* these are already reserved */
$ReservedPhoneNo = [
	$Prefix . ' ' . $Suffix . ' 10 99',
	$Prefix . ' ' . $Suffix . ' 11 00',
	$Prefix . ' ' . $Suffix . ' 11 01',
	$Prefix . ' ' . $Suffix . ' 11 02',
	$Prefix . ' ' . $Suffix . ' 11 03',
	$Prefix . ' ' . $Suffix . ' 11 04',
	$Prefix . ' ' . $Suffix . ' 11 05',
	$Prefix . ' ' . $Suffix . ' 11 06',
	$Prefix . ' ' . $Suffix . ' 88 05',
];
$FirstPhoneCounter  = 0;
$SecondPhoneCounter = 1;
$GeneratePhoneNo    = function () {
	/* create new number */
	$NewNumber    = $GLOBALS['Prefix'] . ' ' . $GLOBALS['Suffix'] . ' ';
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
