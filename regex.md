#
Assume everything in here is bluntly wrong.
Unironically, many examples ARE WRONG!

### TL;DR https://regex101.com 

# 

Regex zum Kopieren für Passwörter: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a

Mit REGEX kann so gematcht werden:

()	Wildcard
.	Wildcard für ein einzelnes Zeichen
\	Escaped die Zeichen
\.	Sucht nach "."	Keine Wildcard weil escaped durch \
\?	Sucht nach "?"	Sucht danach weil escaped
[a]	Sucht nach "a"	Gibt sich mit dem ersten Resultat zufrieden
[abc]	Sucht nach "a" oder "b" oder "c"	Verhaltet sich  gleich wie oben
[c]+	Sucht nach "c" 0, 1- oder 2 mal
[c*]	Sucht nach Allen "c"
[^abc]	Überspringt "abc"
[0-9]	Sucht nach allen Zahlen
[  \t]	Sucht nach " " (leerzeichen) und "\t" nach Tabs also Einrücken
abc	Sucht nach "abc"
(abc)	Sucht nach "abc"
(ABC)	Sucht nach "ABC"
(^abc|^def)	Sucht nach "abc" und / oder "def"
(Jan (1987)|May (1969)|Aug (2011))	Sucht nach "Jan" und / oder "1967" oder ……..	Unendlich
\d	Sucht nach Zahlen	Gibt sich mit der ersten Zahl zufrieden
(\d\d\d\dx\d\d\d+)	Sucht nach Auflösungen in PX z.B (1920x1080) aber nicht nach (800x600)
z{2}	Sucht nach "z" 2 mal	.{2} also mit einer Wildcard geht auch

Regex in JS mit der funktion test() https://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex-in-js

Übungen:

https://regexone.com/lesson/introduction_abcs

Links

https://stackoverflow.com/questions/406230/regular-expression-to-match-a-line-that-doesnt-contain-a-word

https://stackoverflow.com/questions/11552877/regex-to-match-exact-phrase-nothing-before-or-after-the-phrase

https://stackoverflow.com/questions/469913/regular-expressions-is-there-an-and-operator

https://stackoverflow.com/questions/10827344/regex-string-match

https://danielfett.de/de/tutorials/tutorial-regulare-ausdrucke/

https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript -> zweite comment

https://regex101.com!!!

E-Mail REGEX

(([a-z0-9\.+-_?]){3,35}@([a-z0-9\.+-_?]{3,35}\.[a-z]{2,7}))

Fehler im Regex:

https://stackoverflow.com/questions/17727884/range-out-of-order-in-character-class-in-javascript

https://stackoverflow.com/questions/14473917/invalid-escape-sequence-for-regular-expression


var mail="hans@faker-mail.com";
var mail1="asdf@asdf.com";
var mail2="asdf@123.asf";
var mail3="123@123.123";
var mail4="12@il.1";
var mail5="123";


var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var self=/(([a-z0-9\.+-_?]){3,35}@([a-z0-9\.+-_?]{3,35}\.[a-z]{2,7}))/;

console.log("RE");
console.log("Mail"+re.test(mail));//True
console.log("Mail1"+re.test(mail1));//True
console.log("Mail2"+re.test(mail2));//True
console.log("Mail3"+re.test(mail3));//False
console.log("Mail4"+re.test(mail4));//False
console.log("Mail5"+re.test(mail5));//False
console.log("SELF");
console.log("Mail"+self.test(mail));//True
console.log("Mail1"+self.test(mail1));//True
console.log("Mail2"+self.test(mail2));//True
console.log("Mail3"+self.test(mail3));//False
console.log("Mail4"+self.test(mail4));//False
console.log("Mail5"+self.test(mail5));//False

Muss enthalten [a-z] Kleinbuchstaben
Muss enthalten [A-Z] Grossbuchstaben
Muss eine Zahl enthalten
Muss 8 Zeichen lang sein
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$

