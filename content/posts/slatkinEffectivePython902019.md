+++
title = "Effective python: 90 specific ways to write better python"
author = ["Inom Turdikulov"]
tags = ["python,", "active"]
draft = false
+++

## Effective python: 90 specific ways to write better python {#slatkinEffectivePython902019}


### Item 1: Know which version of python you're using {#item-1-know-which-version-of-python-you-re-using}


#### Idioms of programming language are defined by its users {#idioms-of-programming-language-are-defined-by-its-users}

This means popular practices, formating rules, conventions, etc are defined by their users!


#### Python version {#python-version}

You can easily detect which python version you use right now.


### Item 2: Follow the PEP8 Style Guide {#item-2-follow-the-pep8-style-guide}


#### PEP is {#pep-is}

Python Enhancement Proposal or PEP 8
It's Python formatting style guide.


#### Why PEP? {#why-pep}

Using consistent style, make your code much more approachable and readable.


#### Whitespace {#whitespace}

Since whitespaces are significant in Python, it's recommend to follow this rules:

-   Use 4 spaces insted tabs for indentation.
-   Indent a long lines by additional spaces if they splitted.
-   Functions and classes separated by 2 blank lines.
-   Class methods separated by 1 blank line.
-   ...


#### Naming {#naming}

-   Functions, variables, and attributes in `lowercas_underscore` format.
-   Protected instance attributes should be in `_leading_underscore` format.
-   Classes (including exceptions) should be in `CapitalizedWord` format.
-   Module-level constants should be in `ALL_CAPS` format.
-   Instance methods in classes should use `self` (ref to object), as the name of the first parameter.
-   Class methods should use `cls`, which refers to the class, as the name of the first parameter.


#### Expressions and statements {#expressions-and-statements}

-   Use inline negation `if a is not b` instead negation of positive expression `if not a is b`, some like `if not CONDTION`. It's really hard to understand.
-   Don't check for empty/non-empty by comparing length to zero ([], ''), just use `if/if not` something and you need assume that empty value will be evaluated to False, non-empty to True.
-   Avoid single-line if, for and while loops, except compound statements, spread them over multiple lines for clarity/readability (it's actual for complex items).
-   Split long lines with parentheses if they are too long.
-   Prefer splitting with parentheses over using \\ line conttinuation character.


#### Imports {#imports}

-   Place imports at top.
-   Use absolute names when you import modules.
-   When you need do relative import, use explicit method `from . import foo`
-   Follow ordering of module import: stdlib, thrid-party, own.
-   Use linters linke pylint, black, etc...


#### Things to remember {#things-to-remember}

-   Follow the PEP style guide.
-   Following common style facilitates collaboration with others.
-   Consistent code style make it easier to modify later (include automation?).


### Item 3: Know the Differences Between bytes and str {#item-3-know-the-differences-between-bytes-and-str}


#### Sequence data {#sequence-data}

In python there are 2 types that represent sequences of characters
bytes and str

-   byte - RAW unsigned 8 bit value `b'h\x65llo'`

<!--listend-->

```python
a = b'h\x65llo\x55'
print(list(a))
print(a)
```

-   str instances - [Unicode]({{< relref "20220123015058-utf.md" >}}) code points, that represent textual characters from human language
    str instances don't have binary encoding

<!--listend-->

```python
a = 'a\u0300 propos'
print(list(a))
print(a)
print(a.encode('windows-1251', 'ignore'))
print(a.encode().decode())
```

The core of your program should use str type containg Unicode data, but can accept different encoding - latin1, big5 from interafaces.

Use helper function to ensure th e inputs you operate are the type of character sequence that you expect.

Bytes and str instances can be used together with operatos &gt;, =, -, +, %

If you want read or write bin data, open it in 'rb' 'rw' modes.

If you want to read or write unicode data be careful about system encoding. Explictiy pass the encoding paramter to open if you want to avoid surprices.

prefer f-strings

format of f strinig: f'{key!r:&lt;10} = {value:.2f}
    {key!r} - raw
    {key:&lt;10} - left order (min width) - 10 characters
    {value:.2f} - precision formatting
    f'my number is {number:.{places}}?

F-strings are sucinot yet powerful, because they allow for arbitray Pytho expression to be directly embedded within format specifiers.

Write helperes functions instead of complex expressions

Python's syntax makes it easy to write single line epxressions that are overly complicated and difficult to read.

Move complex expressions into helpere functions expeciialy if you need to use the same logic repeately
