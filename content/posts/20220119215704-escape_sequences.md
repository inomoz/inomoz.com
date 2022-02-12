+++
title = "Escape Sequences"
author = ["Inom Turdikulov"]
lastmod = 2022-02-12T18:28:56+03:00
tags = ["C"]
draft = false
+++

Combination of characters, which meaning something other than the literal characters contained therein.

Usually 2 characters, one is preceding and second is actual character (which explain that escape sequence).

<https://en.wikipedia.org/wiki/Escape_sequences_in_C#ref_Note1>

\a 07	Alert (Beep, Bell) (added in C89)[1]
\b 08	Backspace
\e 1B	Escape character (non standart)
\f 0C	Formfeed Page Break
\n 0A	Newline (Line Feed); see notes below
\r 0D	Carriage Return
\t 09	Horizontal Tab
\v 0B	Vertical Tab
\\\\	5C	Backslash
\\'	27	Apostrophe or single quotation mark
\\"	22	Double quotation mark
\\?	3F	Question mark (used to avoid trigraphs)
\nnnnote 2	any	The byte whose numerical value is given by nnn interpreted as an octal number
\xhh…	any	The byte whose numerical value is given by hh… interpreted as a hexadecimal number
\uhhhhnote 3	none	Unicode code point below 10000 hexadecimal (added in C99)[1]: 26
\Uhhhhhhhhnote 4	none	Unicode code point where h is a hexadecimal digit

<https://gist.github.com/hectoregm/1368066>

Escape Sequence	Name	Meaning
\a Alert	        Produces an audible or visible alert.
\b Backspace	Moves the cursor back one position (non-destructive).
\f Form Feed	Moves the cursor to the first position of the next page.
\n New Line	Moves the cursor to the first position of the next line.
\r Carriage Return	Moves the cursor to the first position of the current line.
\t Horizontal Tab	Moves the cursor to the next horizontal tabular position.
\v Vertical Tab	Moves the cursor to the next vertical tabular position.
\\'		        Produces a single quote.
\\"		        Produces a double quote.
\\?		        Produces a question mark.
\\\\		        Produces a single backslash.
\\0		        Produces a null character.
\ddd          Defines one character by the octal digits (base-8 number). Multiple characters may be defined in the same escape sequence, but the value is implementation-specific (see examples).
\xdd          Defines one character by the hexadecimal digit (base-16 number).
