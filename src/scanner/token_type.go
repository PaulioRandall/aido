package scanner

type TokenType int

const (
	Unknown TokenType = iota
	EOF               // End Of File

	Newline    // '\n'
	Whitespace // Excludes newline

	Identifier // Variable name, function name, etc
	Number     // 123, 123.456

	Define // :=
	Assign // =
	Comma  // ,

	ParenOpen  // (
	ParenClose // )
)
