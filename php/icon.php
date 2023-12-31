<?php

 /* ALL: https://stackoverflow.com/questions/3737139/reference-guide-what-does-this-symbol-mean-in-php-php-syntax */
 /*
 What is this?
 This is a collection of questions that come up every now and then about syntax in PHP. This is also a Community Wiki, so everyone is invited to participate in maintaining this list.

 Why is this?
 It used to be hard to find questions about operators and other syntax tokens.¹
 The main idea is to have links to existing questions on Stack Overflow, so it's easier for us to reference them, not to copy over content from the PHP Manual.

 Note: Since January 2013, Stack Overflow does support special characters. Just surround the search terms by quotes, e.g. [php] "==" vs "==="

 What should I do here?
 If you have been pointed here by someone because you have asked such a question, please find the particular syntax below. The linked pages to the PHP manual along with the linked questions will likely answer your question then. If so, you are encouraged to upvote the answer. This list is not meant as a substitute for the help others provided.

 The List
 If your particular token is not listed below, you might find it in the List of Parser Tokens.

 & Bitwise Operators or References

 What does it mean to start a PHP function with an ampersand?
 Understanding PHP & (ampersand, bitwise and) operator
 PHP "&" operator
 Difference between & and && in PHP
 What does "&" mean here in PHP?
 What does "&" mean in this case?
 What does the "&" sign mean in PHP?
 What does this signature mean (&) in PHP?
 How does the "&" operator work in a PHP function?
 What does & in &2 mean in PHP?
 When should I use a bitwise operator?
 Is there ever a need to use ampersand in front of an object? (&$)
 =& References

 Reference assignment operator in PHP, =&
 What do the "=&" and "&=" operators in PHP mean?
 What do the '&=' and '=&' operators do?
 What does =& mean in PHP?
 &= Bitwise Operators

 What do the "=&" and "&=" operators in PHP mean?
 What do the '&=' and '=&' operators do?
 && Logical Operators

 'AND' vs '&&' as operator
 Difference between & and && in PHP
 Is there any difference between "and" and "&&" operators in PHP?
 PHP - and / or keywords
 % Arithmetic Operators

 What does the percent sign mean in PHP?
 What is the PHP operator % and how do I use it in real-world examples?
 !! Logical Operators

 Double not (!!) operator in PHP
 @ Error Control Operators

 What is the use of the @ symbol in PHP?
 'At' symbol before variable name in PHP: @$_POST
 PHP functions and @functions
 Should I use @ in my PHP code?
 What does @ mean in PHP?
 ?: Ternary Operator

 What are the PHP operators "?" and ":" called and what do they do?
 ?: operator (the 'Elvis operator') in PHP
 Where can I read about conditionals done with "?" and ":" (colon)?
 Using PHP 5.3 ?: operator
 Double question mark

 ?? Null Coalesce Operator (since PHP 7)

 C#'s null coalescing operator (??) in PHP
 Question mark followed by a type declaration

 ?string ?int ?array ?bool ?float Nullable type declaration (since PHP 7.1)

 How to use a nullable type
 Nullable return type declaration
 ?-> question mark followed by object operator is a NullSafe Operator (since PHP 8.0)

 Is there a "nullsafe operator" in PHP?
 : Alternative syntax for control structures, Ternary Operator, Return Type Declaration

 What is ":" in PHP?
 What does ":" mean in PHP?
 Colon after method declaration?
 :: Scope Resolution Operator

 What do two colons mean in PHP?
 What's the meaning of the PHP token name T_PAAMAYIM_NEKUDOTAYIM?
 What's the difference between :: (double colon) and -> (arrow) in PHP?
 What exactly are late static bindings in PHP?
 static::staticFunctionName()
 Unexpected T_PAAMAYIM_NEKUDOTAYIM, expecting T_NS_Separator
 \ Namespaces

 Backslash in PHP -- what does it mean?
 What does a \ (backslash) do in PHP (5.3+)?
 -> Classes And Objects

 What is the "->" PHP operator called?
 Where do we use the object operator "->" in PHP?
 What's the difference between :: (double colon) and -> (arrow) in PHP?
 What does the PHP syntax $var1->$var2 mean?
 What does "->" mean/refer to in PHP?
 => Arrays

 What does "=>" mean in PHP?
 Use of => in PHP
 What does $k => $v in foreach($ex as $k=>$v) mean?
 ^ Bitwise Operators

 How does the bitwise operator XOR ('^') work?
 What does ^ mean in PHP?
 >> Bitwise Operators

 What does >> mean in PHP?
 << Bitwise Operators

 Strange print behaviour in PHP?
 <<< Heredoc or Nowdoc

 What does <<<END mean in PHP?
 PHP expression <<<EOB
 In PHP, what does "<<<" represent?
 Using <<<CON in PHP
 What's this kind of syntax in PHP?
 = Assignment Operators

 The 3 different equals
 == Comparison Operators

 How do the PHP equality (== double equals) and identity (=== triple equals) comparison operators differ?
 PHP != and == operators
 The 3 different equals
 Type-juggling and (strict) greater/lesser-than comparisons in PHP
 === Comparison Operators

 What does "===" mean?
 How do the PHP equality (== double equals) and identity (=== triple equals) comparison operators differ?
 The 3 different equals
 Type-juggling and (strict) greater/lesser-than comparisons in PHP
 !== Comparison Operators

 What does !== comparison operator in PHP mean?
 Is there a difference between !== and != in PHP?
 != Comparison Operators

 PHP != and == operators
 Is there a difference between !== and != in PHP?
 comparing, !== versus !=
 What is the difference between <> and !=
 <> Comparison Operators

 PHP operator <>
 https://stackoverflow.com/questions/589391
 What is the difference between <> and !=
 Type-juggling and (strict) greater/lesser-than comparisons in PHP
 <=> Comparison Operators (since PHP 7.0)

 Spaceship (three way comparison) operator
 | Bitwise Operators

 What is the difference between the | and || operators?
 What Does Using A Single Pipe '|' In A Function Argument Do?
 || Logical Operators

 What is the difference between the | and || operators?
 PHP - and / or keywords
 What exactly does || mean?
 The behaviour of the or operator in PHP
 ~ Bitwise Operators

 What does this ~ operator mean here?
 + Arithmetic Operators, Array Operators

 Merging two arrays with the "+" (array union operator) How does it work?
 += and -= Assignment Operators

 What is += used for?
 What does `$page -= 1` in my PHP document mean?
 ++ and -- Incrementing/Decrementing Operators

 Understanding Incrementing
 Answer below
 .= Assignment Operators

 What is the difference between .= and += in PHP?
 What is the .= (dot equals) operator in PHP?
 . String Operators

 Difference between period and comma when concatenating with echo versus return?
 What does a . (dot) do in PHP?
 , Function Arguments

 Difference between period and comma when concatenating with echo versus return?
 , Variable Declarations

 What do commas mean in a variable declaration?
 $$ Variable Variables

 What does $$ (dollar dollar or double dollar) mean in PHP?
 what is "$$" in PHP
 $function() and $$variable
 ` Execution Operator

 What are the backticks `` called?
 <?= Short Open Tags

 What does this symbol mean in PHP <?=
 What does '<?=' mean in PHP?
 What does <?= mean?
 [] Arrays (short syntax since PHP 5.4)

 PHP arrays... What is/are the meaning(s) of an empty bracket?
 What is the meaning of []
 Php array_push() vs myArray[]
 What does [] mean when reading from a PHP array?
 Shorthand for arrays: literal $var = [] empty array
 <? Opening and Closing tags

 Are PHP short tags acceptable to use?
 .. Double-dot character range

 Native PHP functions that allow double-dot range syntax
 ... Argument unpacking (since PHP 5.6)

 ** Exponentiation (since PHP 5.6)

 # One-line shell-style comment

 Can I use hashes for comments in PHP?
 #[] Attributes (since PHP 8)

 */

?>
