//Testdaten
$a = [["2019-02-02"], ["2020-03-10"], ["2018-03-15"], ["2011-11-01"]];

$sort = function($a, $b){
 //gleichwertend ? Returniere 0
 if ($a == $b){return 0;}
 // wenn a[0] grösser als b[0] ist, sorge dafür dass $a[0] an letzter stelle steht
 //also wenn nicht ASCENDING sondern DESCENDING sortiert werden soll
 // -1 und 1 vertauschen
 return (new DateTime($a[0])) >= (new DateTime($b[0])) ? 1 : -1;
};

//Sortieren
usort($a, $sort);// => kann auch so aufgerufen werden usort($a, "FunctionNameAsString");

var_dump($a);

Oder in kurz mit em Spaceship - Operator:

//Testdaten
$a = [["2019-02-02"], ["2020-03-10"], ["2018-03-15"], ["2011-11-01"]];

usort($a, function($a, $b){return (new DateTime($a[0])) <=> (new DateTime($b[0]));});

var_dump($a);


