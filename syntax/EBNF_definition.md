
# EBNF

This document describes how my flavour of [EBNF (Extended Backus Normal Form)](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) metasyntax differs from the one described in wikipedia. It should provide a good balance of human and machine readability.

## Term Definitions 

Each term definition must start at the beginning of a newline, i.e. there must be no whitespace between the line start and term name. There is also no terminating `;` or `.` since it is no longer needed:

```
ZERO = "0"
ONE = "1"
ZERO_OR_ONE = ZERO | ONE
```

A term definition may be split across multiple lines by adding whitespace indent to all but the first line:

```
DIGIT = "0"
	| "1" | "2" | "3"
	| "4" | "5" | "6"
	| "7" | "8" | "9"
```

## Term Naming

Each term must be in UPPER_SNAKE_CASE and without spaces. This means underscores are permitted for readability:

```
ZERO_OR_ONE = ZERO | ONE
```

## Concaternation

Concaternation is done with a single or multiple spaces, not commas `,`. If complex segments of grammer are needed, it is best to break the term into sub terms but you may also use grouping syntax `( ... )`:

```
DIGIT = "0"
	| "1" | "2" | "3"
	| "4" | "5" | "6"
	| "7" | "8" | "9"
INT = DIGIT { DIGIT }
FLOAT = INT [ "." INT ]

NUMBER = ( DIGIT { DIGIT } ) | ( DIGIT { DIGIT } [ "." DIGIT { DIGIT } ] )
```
