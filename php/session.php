<?php

/*
https://stackoverflow.com/questions/54165878/does-each-user-only-have-1-session-id
You should be generating the session ID & then storing it in a database & attaching it to a user ID. That way you know the user by looking for their session ID when they move around the website/software.
You can record things like their IP address, browser information, and time of access to make it a tad bit more secure - making it harder for a hacker to hijack their session information.
Also, the only other thing I should mention is that you should not be storing private information in the session data. For example, do not store their account ID in the session variables or their password/email/username/etc. It is possible to modify session data & access other accounts if you rely on the session data itself to tell you who a user is. The encrypted/randomized session IDs can be so unique that it is near impossible for a user to reasonably trick your server into thinking they are a different account. So that's why we store them in the database w/ additional information instead of setting other session variables.
Example:
In PHP we could have the session_id(), but store things like $_SESSION['setting'], or $_SESSION['theme_choice'] and other trivial settings to prevent having to look it up in the database every page load.

TL;DR spicher kritischi sache garantiert ned idr session
TL;DR with some ♥ https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
 */

/* create custom session save path C:/SessionFolder | /SessionFolder */
$Path = explode('\\', __DIR__)[0] . '/SessionFolder';
if (!is_dir($Path)) {
	mkdir($Path, 0755, true);
}

/*

for session ->      0
for a hour  ->  3'600
for 4 hours -> 14'400
for 8 hours -> 28'800
for a day   -> 86'400

*/

$Label    = 'myCookieLabel';
$LifeTime = 86400;

/* set life time */
ini_set('session.gc_maxlifetime', $LifeTime);

/* set session file location */
session_save_path($Path);

/* set session name (SID) */
session_name($Label);

/* set session cookie parameters */
session_set_cookie_params([
	/* default session lifetime */
	'lifetime' => $LifeTime,
	/* default path */
	'path'     => '/',
	'domain'   => $GLOBALS['CONFIG']['COOKIE']['DOMAIN'] ?? $_SERVER['HTTP_HOST'] ?? '127.0.0.1',
	'secure'   => ($_SERVER['HTTPS'] ?? '') != 'off',
	'httponly' => true,
	'samesite' => 'None'
]);

/* start the session */
session_start();

?>
