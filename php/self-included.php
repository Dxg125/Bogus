If you also want to ensure current script is being included and not run independently you should evaluate following expression:

__FILE__ != $_SERVER['SCRIPT_FILENAME']

If this expression returns TRUE, current script is being included or required.

From <https://www.php.net/manual/en/function.get-included-files.php>
