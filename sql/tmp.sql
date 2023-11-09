

$GLOBALS['SQL']->select('Field1, Field2')->from('Table')->where()->and();
$SQL->select();

$SQL;

define('SQL', $SQL);

SQL->select

SQL::select('123')->from('table')::join('table', SQL::LEFT_JOIN)->as('t')->where(['t.Field' => 1, 'table.123' => 567, 'field', 0]);

$sql->select('field');
/* anders whatever */
$sql->from('');

while(true) {
	$sql->and('cond1', 1);
}


$sql->query('SELECT.....')



$Result = $sql->debug();

$PrimaryKey = sql->insert('table')->set([
	'field' => 'value',
	'field2' => ''
])->set('field2', 'value2')->exec();


if ($sql->update('table')->set('x', 'y')->exec()) {

}
$sql->update('table')->set('x', 'y')->where('field1', '2')->where('field3', 4)->and('123', 123)->or('123', 123)->in(SQL::AND, 'Value', ['Feld1', 'Feld2']);
if ($sql->exec()) {

}

"INSERT INTO XY SET Field = 1";

