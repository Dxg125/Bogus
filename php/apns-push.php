<?php

/* get functions (_curl, format_uuidv4) */
require_once(__DIR__ . '/php/vm.php');
/* cert file must exist! */
if (!file_exists(($Certificate = __DIR__ . '/data/APNS-CERTIFICATE-PUSH.pem'))) {
 die('Nope 1');
}

$BundleID    = 'my.app';
$Name        = 'Hans';
$Phone       = '123 456 78 99';
$Target      = ['VoIPKey' => 'YOUR-VOIP-KEY'];
$Header      = ['apns-topic: ' . $BundleID . '.voip', 'apns-push-type: voip', 'apns-priority: 10', 'apns-expiration: 0'];
$Message     =  [
 'aps' => [
  'action'             => 'Call',
  'callerName'         => $Name,
  'handle'             => $Phone,
  'content-available'  => 1,
  'interruption-level' => 'time-sensitive',
  'callUUID'           => format_uuidv4(),
 ]
];

$Result    = _curl([
 CURLOPT_URL            => 'https://api.development.push.apple.com/3/device/' . $Target['VoIPKey'],
 CURLOPT_POST           => true,
 CURLOPT_RETURNTRANSFER => true,
 CURLOPT_HTTPHEADER     => $Header,
 CURLOPT_POSTFIELDS     => json_encode($Message),
 CURLOPT_SSLCERT        => $Certificate,
 CURLOPT_SSLCERTPASSWD  => 'oPP10',
 CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_2_0,
 CURLOPT_SSL_VERIFYHOST => 0,
 CURLOPT_SSL_VERIFYPEER => 0,
 CURLOPT_VERBOSE        => true
]);

var_dump($Result);