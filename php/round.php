<?php
 /*
  Since you're looking for fourths (.00, .25, .50, .75), multiply your number by 4,
 round to nearest whole number as desired (floor if down, ceil if up), then divide by 4.
 1.32, down to nearest fourth:
 1.32 * 4 = 5.28
 floor(5.28) = 5.00
 5.00 / 4 = 1.25
 Same principle applies for any other fractions, such as thirds or eighths (.0, .125, .25, .375, .5, .625, .75, .875). For example:
 1.77, up to nearest eighth:
 1.77 * 8 = 14.16
 ceil(14.16) = 15.00
 15.00 / 8 = 1.875

  */
 /* Just for fun, you could write a function like this: */
 function floorToFraction ($number, $denominator = 1) {
  $x = $number * $denominator;
  $x = floor($x);
  $x = $x / $denominator;
  return $x;
 }

 echo floorToFraction(1.82);      // 1
 echo floorToFraction(1.82, 2);   // 1.5
 echo floorToFraction(1.82, 3);   // 1.6666666666667
 echo floorToFraction(1.82, 4);   // 1.75
 echo floorToFraction(1.82, 9);   // 1.7777777777778
 echo floorToFraction(1.82, 25);  // 1.8
 /* Aus < https://stackoverflow.com/questions/14903379/rounding-to-nearest-fraction-half-quarter-etc> */
?>
