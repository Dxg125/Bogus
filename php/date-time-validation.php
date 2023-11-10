/* force DateTimeConversion for validating DateTime */
function forceDateTimeConversion ($Date = '') {
	try {
		return $Date ? new DateTime($Date) : false;
	} catch (\Throwable $Error) {
		/* we couldn't parse the date time */
		/* Maybe implement a logging function here so we know what values will fail */
		/* based on this we could increase the security even more */
	}
	return false;
};
/* Security Function cause Input-Strings Like "21.10.2022, 00:00:00DIblprJpelTonpvb" will crash the PHP-Application */
function validateDateTime ($Input, $Default = NULL, $Format = NULL) {
	/* force conversion */
	$Date = forceDateTimeConversion($Input);
	/* if conversion failed and default is truthy, take default instead */
	$Date = !$Date && $Default ? forceDateTimeConversion($Default) : $Date;
	/* now format it if possible */
	$Date = $Date && $Format ? $Date->format($Format) : $Date;
	/* and return value */
	return $Date;
};
