+++
title = "The c programming language"
author = ["Inom Turdikulov"]
tags = ["cpp,", "L1"]
draft = false
+++

## The c programming language {#ritchieProgrammingLanguage1990}


### Chapter 1 - A Tutorial Introduction {#chapter-1-a-tutorial-introduction}


#### 1.1 Getting Started {#1-dot-1-getting-started}

<!--list-separator-->

-  the only way

    <!--list-separator-->

    -  Front

        Exist only one way to learn programming language, what is that way?

    <!--list-separator-->

    -  Back

        The only way to learn programming language is writing programs in it.

<!--list-separator-->

-  hello world

    <!--list-separator-->

    -  Front

        Write simple hello-world program

    <!--list-separator-->

    -  Back

        ```C
        #include <stdio.h>

        int main()
        {
            printf("hello, world\n");
        }
        ```

        hello, world

<!--list-separator-->

-  C program

    <!--list-separator-->

    -  Front

        C program consist of?

    <!--list-separator-->

    -  Back

        functions and variables

<!--list-separator-->

-  string

    <!--list-separator-->

    -  Front

        What this sequence called in C - "hello, world\n"

    <!--list-separator-->

    -  Back

        character string or string constant

<!--list-separator-->

-  escape sequence chars

    <!--list-separator-->

    -  Front

        How much characters represent [escape sequences]({{< relref "../20220119215704-escape_sequences.md" >}})?

    <!--list-separator-->

    -  Back

        Only one


#### 1.2 Variables and Arithmetic Expressions {#1-dot-2-variables-and-arithmetic-expressions}

<!--list-separator-->

-  Types

    <!--list-separator-->

    -  Front

        Which data types in C you know?

    <!--list-separator-->

    -  Back

        -   int \\(-32768 \ldots +32767\\)
        -   float 32 bit generally between \\(10^{-38} \ldots 10^{38}\\)
        -   char 1 byte
        -   short - integer
        -   long - integer
        -   double
        -   arrays
        -   structures
        -   unions
        -   pointers

<!--list-separator-->

-  Braces

    <!--list-separator-->

    -  Front

        Is braces required if we have only one statement?

    <!--list-separator-->

    -  Back

        No, braces is optional in this situation.

<!--list-separator-->

-  Integer division

    <!--list-separator-->

    -  Front

        Which problem exist in C when we use division of 2 integer numbers?

    <!--list-separator-->

    -  Back

        In C (and in a lot of other programming languages), integer division truncates (any fractional part discarded).

<!--list-separator-->

-  printf result

    <!--list-separator-->

    -  Front

        What will printed by this statement.
        `printf("%d\t%d\n", fahr, celsius)`, if fahr and celsius is integer values

    <!--list-separator-->

    -  Back

        ```C
        #include <stdio.h>
        int fahr = 1, celsius = 2;
        printf("%d\t%d\n", fahr, celsius);
        ```

        1	2

<!--list-separator-->

-  Part of the C

    <!--list-separator-->

    -  Front

        Is `printf` is part of the C language?

    <!--list-separator-->

    -  Back

        NO, `printf` is useful function from std. library.

<!--list-separator-->

-  Program fahr

    <!--list-separator-->

    -  Front

        Can you write (even in pseudo code) Fahrenheit-Celsius convertion program?
        Fahr formula is 5/9 ...

    <!--list-separator-->

    -  Back

        ```C
        #include <stdio.h>

        /* print Fahrenheit-Celsius table
             for fahr = 0, 20, ..., 300; floating-point version */
        int main()
        {
            /* initialization */
            float fahr, celsius;
            float lower, upper, step;

            lower = 0;      /* lower limit of temperatuire scale */
            upper = 300;    /* upper limit */
            step = 100;

            fahr = lower;
            printf("Fahr  Celsius\n");
            while (fahr <= upper) {
                celsius = (5.0/9.0) * (fahr - 32.0);
                printf("%4.0f %6.1f\n", fahr, celsius);
                fahr += step;
            }
            printf("\n%f fahr", fahr);
        }

        ```

        Fahr  Celsius
           0  -17.8
         100   37.8
         200   93.3
         300  148.9

        400.000000 fahr

<!--list-separator-->

-  Implicit conversion

    <!--list-separator-->

    -  Front

        If you have 2 integer division what you will receive in result?
        If one integer and second is float will situation change?

    <!--list-separator-->

    -  Back

        If 2 integers, result will truncate (after dot). If one float, one integer - we convert integer to float first, then do division, result will be more precisely (no truncation after dot).

<!--list-separator-->

-  Digit formatting

    <!--list-separator-->

    -  Front

        Which results you receive with this code (output)

        ```C
        printf("%d\n", 1);
        printf("%6d\n", 2);
        printf("%f\n", 1.01);
        printf("%6f\n", 4.01);
        printf("%.2f\n", 12.01);
        printf("%6.2f\n", 11.01);
        ```

    <!--list-separator-->

    -  Back

        1
             2
        1.010000
        4.010000
        12.01
         11.01


#### 1.3 The for statement {#1-dot-3-the-for-statement}

<!--list-separator-->

-  Complicated expression of that type

    <!--list-separator-->

    -  Front

        In any context where it is premisible to use the value of some type you can?

    <!--list-separator-->

    -  Back

        In any context where it is premisible to use the value of some type you can use a more complicated expression of that type.

<!--list-separator-->

-  Parts of for loop

    <!--list-separator-->

    -  Front

        Can you explain which parts used in within for parentheses
        `for (fahr = 0; fahr <= 300; fahr = fahr + 20)`

    <!--list-separator-->

    -  Back

        Separeted by semicolons
        First is initialization, executed only once, before the loop preper is entered.
        Second part is test (or condition that control the loop)
        Third part is increment step
        Loop terminates if condition has became false.

<!--list-separator-->

-  Reverse temp conversion program

    <!--list-separator-->

    -  Front

        Write temperatuire convert program which print table in reverse order,
        use for loop

    <!--list-separator-->

    -  Back

        ```C
        #define LOWER 0     /* lower limit of table */
        #define UPPER 300   /* upper limit */
        #define STEP 20     /* step size */
        #include <stdio.h>
        for (float fahr = UPPER; fahr >= LOWER; fahr -= STEP)
        {
            printf("%4.1f %6.1f\n", fahr, (fahr - 32.0) / 1.8);
        }
        ```


#### 1.4 Symbolic Constants {#1-dot-4-symbolic-constants}

<!--list-separator-->

-  Define symbolic constant

    <!--list-separator-->

    -  Front

        How to define symbolic constant?

    <!--list-separator-->

    -  Back

        Just use this code `#define NAME replacement list /* optional comment */`
        No semicolons, name is uppercase.


#### 1.5 Character Input and Output {#1-dot-5-character-input-and-output}

<!--list-separator-->

-  Text stream

    <!--list-separator-->

    -  Front

        What is text stream?

    <!--list-separator-->

    -  Back

        Text stream is a sequence of characters divided into lines; each line is 0+ characters followed by a \n (newline character).

<!--list-separator-->

-  Getchar and putchar

    <!--list-separator-->

    -  Front

        How getchar is working?
        How putchar is working?

    <!--list-separator-->

    -  Back

        On calling getchar it's reads next input character from a text stream and returns that as its value.

        Putchar prints a character each time it is called.
        That character can be some integer variable.

<!--list-separator-->

-  1.5.1 File Copying

    <!--list-separator-->

    -  Input=Output

        <!--list-separator-->

        -  Front

            Can you write program which copies its input to it's output (quickly, just describe logic)

        <!--list-separator-->

        -  Back

            ```C
            #include <stdio.h>

            /* copy input to output; 1st version */
            main()
            {
                int c;

                c = getchar();      /* read a character into stdin */
                while (c != EOF) {  /* while condition is true - char is not end of file */
                    putchar(c);     /* put char from c */
                    c = getchar();  /* read char into c variable */
                }

            }
            ```

            ```C
            /* copy input to output; 2st version */
            #include <stdio.h>

            main()
            {
                int c;

                while ((c = getchar()) != EOF) {  /* while condition is true - char is not end of file */
                    putchar(c);     /* put char from c */
                }

            }
            ```

    <!--list-separator-->

    -  Exercises

        <!--list-separator-->

        -  Front

            Print value of EOF.
            Verify that getchar() != EOF is 0 or 1.

        <!--list-separator-->

        -  Back

            <a id="code-snippet--my-function-with-cin"></a>
            ```C
            #include <stdio.h>
            int main(){
                int c = getchar() != EOF;
                printf("%d", c);
                printf(EOF); /* nothing? */
            }
            ```

            <a id="code-snippet--my-function-with-cin"></a>
            ```C
            #include <stdio.h>

            int main()
            {
             int a,b,c;
             while ((c = getchar()) != EOF){
                printf(c);
             }
            }
            ```

<!--list-separator-->

-  1.5.2 Character Counting

    <!--list-separator-->

    -  D

    <!--list-separator-->

    -  Increment and decrement

        <!--list-separator-->

        -  Front

            How increment integer value? How decrement it? Can you explain difference?

        <!--list-separator-->

        -  Back

            Use `++var` or `--var`.

            ```C
            #include <stdio.h>

            /* Increment prefix/postfix */
            int increment(int a, int b)
            {
                a = 5;

                // POSTFIX
                b = a++;
                printf("%d\n", b);
                printf("%d\n", a);

                // PREFIX
                int c = ++b;
                printf("\n%d", c);
            }

            // Driver code
            int main()
            {
                int x, y;
                increment(x, y);

                return 0;
            }
            ```

            5
            6

            6

            ```C
            /* Character count program */
            #include <stdio.h>
            /* count characters in input; 1st version */

            int main()
            {
                long counter = 0;
                while (getchar() != EOF)
                    ++counter;
                printf("\%ld\n", counter);
            }
            ```

            0

<!--list-separator-->

-  1.5.3 Line Counting

<!--list-separator-->

-  1.5.4 Word Counting


#### 1.6 Arrays {#1-dot-6-arrays}


#### 1.7 Functions {#1-dot-7-functions}


#### 1.8 Arguments - Call by Value {#1-dot-8-arguments-call-by-value}


#### 1.9 Character Arrays {#1-dot-9-character-arrays}


#### 1.10 External Variables and Scope {#1-dot-10-external-variables-and-scope}


### Chapter 2 - Types, Operators and Expressions {#chapter-2-types-operators-and-expressions}


#### 2.1 Variable Names {#2-dot-1-variable-names}


#### 2.2 Data Types and Sizes {#2-dot-2-data-types-and-sizes}


#### 2.3 Constants {#2-dot-3-constants}


#### 2.4 Declarations {#2-dot-4-declarations}


#### 2.5 Arithmetic Operators {#2-dot-5-arithmetic-operators}


#### 2.6 Relational and Logical Operators {#2-dot-6-relational-and-logical-operators}


#### 2.7 Type Conversions {#2-dot-7-type-conversions}

<!--list-separator-->

-  Link on page 43: [moted to the \`\`higher'' type before the operation proceeds. The result is of the integer type. Section 6 of Appendix A states the conversion rules precisely. If there are no unsigned operands, however](http://www.buginword.com)


#### 2.8 Increment and Decrement Operators {#2-dot-8-increment-and-decrement-operators}


#### 2.9 Bitwise Operators {#2-dot-9-bitwise-operators}


#### 2.10 Assignment Operators and Expressions {#2-dot-10-assignment-operators-and-expressions}


#### 2.11 Conditional Expressions {#2-dot-11-conditional-expressions}


#### 2.12 Precedence and Order of Evaluation {#2-dot-12-precedence-and-order-of-evaluation}


### Chapter 3 - Control Flow {#chapter-3-control-flow}


#### 3.1 Statements and Blocks {#3-dot-1-statements-and-blocks}


#### 3.2 If-Else {#3-dot-2-if-else}


#### 3.3 Else-If {#3-dot-3-else-if}


#### 3.4 Switch {#3-dot-4-switch}


#### 3.5 Loops - While and For {#3-dot-5-loops-while-and-for}


#### 3.6 Loops - Do-While {#3-dot-6-loops-do-while}


#### 3.7 Break and Continue {#3-dot-7-break-and-continue}


#### 3.8 Goto and labels {#3-dot-8-goto-and-labels}


### Chapter 4 - Functions and Program Structure {#chapter-4-functions-and-program-structure}


#### 4.1 Basics of Functions {#4-dot-1-basics-of-functions}


#### 4.2 Functions Returning Non-integers {#4-dot-2-functions-returning-non-integers}


#### 4.3 External Variables {#4-dot-3-external-variables}


#### 4.4 Scope Rules {#4-dot-4-scope-rules}


#### 4.5 Header Files {#4-dot-5-header-files}


#### 4.6 Static Variables {#4-dot-6-static-variables}


#### 4.7 Register Variables {#4-dot-7-register-variables}


#### 4.8 Block Structure {#4-dot-8-block-structure}


#### 4.9 Initialization {#4-dot-9-initialization}


#### 4.10 Recursion {#4-dot-10-recursion}


#### 4.11 The C Preprocessor {#4-dot-11-the-c-preprocessor}

<!--list-separator-->

-  4.11.1 File Inclusion

<!--list-separator-->

-  4.11.2 Macro Substitution

<!--list-separator-->

-  4.11.3 Conditional Inclusion


### Chapter 5 - Pointers and Arrays {#chapter-5-pointers-and-arrays}


#### 5.1 Pointers and Addresses {#5-dot-1-pointers-and-addresses}


#### 5.2 Pointers and Function Arguments {#5-dot-2-pointers-and-function-arguments}


#### 5.3 Pointers and Arrays {#5-dot-3-pointers-and-arrays}


#### 5.4 Address Arithmetic {#5-dot-4-address-arithmetic}


#### 5.5 Character Pointers and Functions {#5-dot-5-character-pointers-and-functions}


#### 5.6 Pointer Arrays; Pointers to Pointers {#5-dot-6-pointer-arrays-pointers-to-pointers}


#### 5.7 Multi-dimensional Arrays {#5-dot-7-multi-dimensional-arrays}


#### 5.8 Initialization of Pointer Arrays {#5-dot-8-initialization-of-pointer-arrays}


#### 5.9 Pointers vs. Multi-dimensional Arrays {#5-dot-9-pointers-vs-dot-multi-dimensional-arrays}


#### 5.10 Command-line Arguments {#5-dot-10-command-line-arguments}


#### 5.11 Pointers to Functions {#5-dot-11-pointers-to-functions}


#### 5.12 Complicated Declarations {#5-dot-12-complicated-declarations}


### Chapter 6 - Structures {#chapter-6-structures}


#### 6.1 Basics of Structures {#6-dot-1-basics-of-structures}


#### 6.2 Structures and Functions {#6-dot-2-structures-and-functions}


#### 6.3 Arrays of Structures {#6-dot-3-arrays-of-structures}


#### 6.4 Pointers to Structures {#6-dot-4-pointers-to-structures}


#### 6.5 Self-referential Structures {#6-dot-5-self-referential-structures}


#### 6.6 Table Lookup {#6-dot-6-table-lookup}


#### 6.7 Typedef {#6-dot-7-typedef}


#### 6.8 Unions {#6-dot-8-unions}


#### 6.9 Bit-fields {#6-dot-9-bit-fields}


### Chapter 7 - Input and Output {#chapter-7-input-and-output}


#### 7.1 Standard Input and Output {#7-dot-1-standard-input-and-output}


#### 7.2 Formatted Output - printf {#7-dot-2-formatted-output-printf}


#### 7.3 Variable-length Argument Lists {#7-dot-3-variable-length-argument-lists}


#### 7.4 Formatted Input - Scanf {#7-dot-4-formatted-input-scanf}


#### 7.5 File Access {#7-dot-5-file-access}


#### 7.6 Error Handling - Stderr and Exit {#7-dot-6-error-handling-stderr-and-exit}


#### 7.7 Line Input and Output {#7-dot-7-line-input-and-output}


#### 7.8 Miscellaneous Functions {#7-dot-8-miscellaneous-functions}

<!--list-separator-->

-  7.8.1 String Operations

<!--list-separator-->

-  7.8.2 Character Class Testing and Conversion

<!--list-separator-->

-  7.8.3 Ungetc

<!--list-separator-->

-  7.8.4 Command Execution

<!--list-separator-->

-  7.8.5 Storage Management

<!--list-separator-->

-  7.8.6 Mathematical Functions

<!--list-separator-->

-  7.8.7 Random Number generation


### Chapter 8 - The UNIX System Interface {#chapter-8-the-unix-system-interface}


#### 8.1 File Descriptors {#8-dot-1-file-descriptors}


#### 8.2 Low Level I/O - Read and Write {#8-dot-2-low-level-i-o-read-and-write}


#### 8.3 Open, Creat, Close, Unlink {#8-dot-3-open-creat-close-unlink}


#### 8.4 Random Access - Lseek {#8-dot-4-random-access-lseek}


#### 8.5 Example - An implementation of Fopen and Getc {#8-dot-5-example-an-implementation-of-fopen-and-getc}


#### 8.6 Example - Listing Directories {#8-dot-6-example-listing-directories}


#### 8.7 Example - A Storage Allocator {#8-dot-7-example-a-storage-allocator}


### Appendix A - Reference Manual {#appendix-a-reference-manual}


#### A.1 Introduction {#a-dot-1-introduction}


#### A.2 Lexical Conventions {#a-dot-2-lexical-conventions}

<!--list-separator-->

-  A.2.1 Tokens

<!--list-separator-->

-  A.2.2 Comments

<!--list-separator-->

-  A.2.3 Identifiers

<!--list-separator-->

-  A.2.4 Keywords

<!--list-separator-->

-  A.2.5 Constants

    <!--list-separator-->

    -  A.2.5.1 Integer Constants

    <!--list-separator-->

    -  A.2.5.2 Character Constants

    <!--list-separator-->

    -  A.2.5.3 Floating Constants

    <!--list-separator-->

    -  A2.5.4 Enumeration Constants

<!--list-separator-->

-  A.2.6 String Literals


#### A.3 Syntax Notation {#a-dot-3-syntax-notation}


#### A.4 Meaning of Identifiers {#a-dot-4-meaning-of-identifiers}

<!--list-separator-->

-  A.4.1 Storage Class

<!--list-separator-->

-  A.4.2 Basic Types

<!--list-separator-->

-  A.4.3 Derived types

<!--list-separator-->

-  A.4.4 Type Qualifiers


#### A.5 Objects and Lvalues {#a-dot-5-objects-and-lvalues}


#### A.6 Conversions {#a-dot-6-conversions}

<!--list-separator-->

-  A.6.1 Integral Promotion

<!--list-separator-->

-  A.6.2 Integral Conversions

<!--list-separator-->

-  A.6.3 Integer and Floating

<!--list-separator-->

-  A.6.4 Floating Types

<!--list-separator-->

-  A.6.5 Arithmetic Conversions

<!--list-separator-->

-  A.6.6 Pointers and Integers

<!--list-separator-->

-  A.6.7 Void

<!--list-separator-->

-  A.6.8 Pointers to Void


#### A.7 Expressions {#a-dot-7-expressions}

<!--list-separator-->

-  A.7.1 Pointer Conversion

<!--list-separator-->

-  A.7.2 Primary Expressions

<!--list-separator-->

-  A.7.3 Postfix Expressions

    <!--list-separator-->

    -  A.7.3.1 Array References

    <!--list-separator-->

    -  A.7.3.2 Function Calls

    <!--list-separator-->

    -  A.7.3.3 Structure References

    <!--list-separator-->

    -  A.7.3.4 Postfix Incrementation

<!--list-separator-->

-  A.7.4 Unary Operators

    <!--list-separator-->

    -  A.7.4.1 Prefix Incrementation Operators

    <!--list-separator-->

    -  A.7.4.2 Address Operator

    <!--list-separator-->

    -  A.7.4.3 Indirection Operator

    <!--list-separator-->

    -  A.7.4.4 Unary Plus Operator

    <!--list-separator-->

    -  A.7.4.5 Unary Minus Operator

    <!--list-separator-->

    -  A.7.4.6 One's Complement Operator

    <!--list-separator-->

    -  A.7.4.7 Logical Negation Operator

    <!--list-separator-->

    -  A.7.4.8 Sizeof Operator

<!--list-separator-->

-  A.7.5 Casts

<!--list-separator-->

-  A.7.6 Multiplicative Operators

<!--list-separator-->

-  A.7.7 Additive Operators

<!--list-separator-->

-  A.7.8 Shift Operators

<!--list-separator-->

-  A.7.9 Relational Operators

<!--list-separator-->

-  A.7.10 Equality Operators

<!--list-separator-->

-  A.7.11 Bitwise AND Operator

<!--list-separator-->

-  A.7.12 Bitwise Exclusive OR Operator

<!--list-separator-->

-  A.7.13 Bitwise Inclusive OR Operator

<!--list-separator-->

-  A.7.14 Logical AND Operator

<!--list-separator-->

-  A.7.15 Logical OR Operator

<!--list-separator-->

-  A.7.16 Conditional Operator

<!--list-separator-->

-  A.7.17 Assignment Expressions

<!--list-separator-->

-  A.7.18 Comma Operator

<!--list-separator-->

-  A.7.19 Constant Expressions


#### A.8 Declarations {#a-dot-8-declarations}

<!--list-separator-->

-  A.8.1 Storage Class Specifiers

<!--list-separator-->

-  A.8.2 Type Specifiers

<!--list-separator-->

-  A.8.3 Structure and Union Declarations

<!--list-separator-->

-  A.8.4 Enumerations

<!--list-separator-->

-  A.8.5 Declarators

<!--list-separator-->

-  A.8.6 Meaning of Declarators

    <!--list-separator-->

    -  A.8.6.1 Pointer Declarators

    <!--list-separator-->

    -  A.8.6.2 Array Declarators

    <!--list-separator-->

    -  A.8.6.3 Function Declarators

<!--list-separator-->

-  A.8.7 Initialization

<!--list-separator-->

-  A.8.8 Type names

<!--list-separator-->

-  A.8.9 Typedef

<!--list-separator-->

-  A.8.10 Type Equivalence


#### A.9 Statements {#a-dot-9-statements}

<!--list-separator-->

-  A.9.1 Labeled Statements

<!--list-separator-->

-  A.9.2 Expression Statement

<!--list-separator-->

-  A.9.3 Compound Statement

<!--list-separator-->

-  A.9.4 Selection Statements

<!--list-separator-->

-  A.9.5 Iteration Statements

<!--list-separator-->

-  A.9.6 Jump statements


#### A.10 External Declarations {#a-dot-10-external-declarations}

<!--list-separator-->

-  A.10.1 Function Definitions

<!--list-separator-->

-  A.10.2 External Declarations


#### A.11 Scope and Linkage {#a-dot-11-scope-and-linkage}

<!--list-separator-->

-  A.11.1 Lexical Scope

<!--list-separator-->

-  A.11.2 Linkage


#### A.12 Preprocessing {#a-dot-12-preprocessing}

<!--list-separator-->

-  A.12.1 Trigraph Sequences

<!--list-separator-->

-  A.12.2 Line Splicing

<!--list-separator-->

-  A.12.3 Macro Definition and Expansion

<!--list-separator-->

-  A.12.4 File Inclusion

<!--list-separator-->

-  A.12.5 Conditional Compilation

<!--list-separator-->

-  A.12.6 Line Control

<!--list-separator-->

-  A.12.7 Error Generation

<!--list-separator-->

-  A.12.8 Pragmas

<!--list-separator-->

-  A.12.9 Null directive

<!--list-separator-->

-  A.12.10 Predefined names


#### A.13 Grammar {#a-dot-13-grammar}


### Appendix B - Standard Library {#appendix-b-standard-library}


#### B.1 Input and Output: &lt;stdio.h&gt; {#b-dot-1-input-and-output-stdio-dot-h}

<!--list-separator-->

-  B.1.1 File Operations

<!--list-separator-->

-  B.1.2 Formatted Output

<!--list-separator-->

-  B.1.3 Formatted Input

<!--list-separator-->

-  B.1.4 Character Input and Output Functions

<!--list-separator-->

-  B.1.5 Direct Input and Output Functions

<!--list-separator-->

-  B.1.6 File Positioning Functions

<!--list-separator-->

-  B.1.7 Error Functions


#### B.2 Character Class Tests: &lt;ctype.h&gt; {#b-dot-2-character-class-tests-ctype-dot-h}


#### B.3 String Functions: &lt;string.h&gt; {#b-dot-3-string-functions-string-dot-h}


#### B.4 Mathematical Functions: &lt;math.h&gt; {#b-dot-4-mathematical-functions-math-dot-h}


#### B.5 Utility Functions: &lt;stdlib.h&gt; {#b-dot-5-utility-functions-stdlib-dot-h}


#### B.6 Diagnostics: &lt;assert.h&gt; {#b-dot-6-diagnostics-assert-dot-h}


#### B.7 Variable Argument Lists: &lt;stdarg.h&gt; {#b-dot-7-variable-argument-lists-stdarg-dot-h}


#### B.8 Non-local Jumps: &lt;setjmp.h&gt; {#b-dot-8-non-local-jumps-setjmp-dot-h}


#### B.9 Signals: &lt;signal.h&gt; {#b-dot-9-signals-signal-dot-h}


#### B.10 Date and Time Functions: &lt;time.h&gt; {#b-dot-10-date-and-time-functions-time-dot-h}


#### B.11 Implementation-defined Limits: &lt;limits.h&gt; and &lt;float.h&gt; {#b-dot-11-implementation-defined-limits-limits-dot-h-and-float-dot-h}


### Appendix C - Summary of Changes {#appendix-c-summary-of-changes}
