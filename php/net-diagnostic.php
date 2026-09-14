<?php

$URL  = 'www.google.com';
$Port = 443;


/* request data */
$Result = _curl([
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_URL            => $URL,
	CURLOPT_PORT           => $Port,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_SSL_VERIFYHOST => 2,
	CURLOPT_SSL_VERIFYPEER => true,
	CURLOPT_CONNECTTIMEOUT => 10,
	CURLOPT_TIMEOUT        => 30,
]);

/* collect network diagnostics on failure */
if (($Result['Status'] ?? '') != 'OK') {
	$WhoAmI = [];
	exec('whoami 2>&1', $WhoAmI);

	$SocketErrorCode = null;
	$SocketError     = null;
	$SocketStart     = microtime(true);
	$Socket          = @fsockopen($URL, $Port, $SocketErrorCode, $SocketError, 5);
	$SocketTime      = microtime(true) - $SocketStart;
	$Debug           = [
		'Timestamp'   => date('c'),
		'PHP_SAPI'    => PHP_SAPI,
		'PHP_BINARY'  => PHP_BINARY,
		'CWD'         => getcwd(),
		'User'        => implode("\n", $WhoAmI),
		'USERNAME'    => getenv('USERNAME'),
		'USERDOMAIN'  => getenv('USERDOMAIN'),
		'USERPROFILE' => getenv('USERPROFILE'),
		'SESSIONNAME' => getenv('SESSIONNAME'),
		'HTTP_PROXY'  => getenv('HTTP_PROXY'),
		'HTTPS_PROXY' => getenv('HTTPS_PROXY'),
		'NO_PROXY'    => getenv('NO_PROXY'),
		'DNS'         => gethostbynamel($URL),
		'TCP'         => [
			'Success'    => is_resource($Socket),
			'ErrorCode'  => $SocketErrorCode,
			'Error'      => $SocketError,
			'Time'       => $SocketTime,
		],
		'Curl' => $Result,
	];

	if (is_resource($Socket)) {
		fclose($Socket);
	}

	trigger_error('CRON-refreshIPDB DEBUG: ' . json_encode($Debug));
}