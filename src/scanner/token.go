package scanner

type Token struct {
	TokenType
	value string
	start TextPosition
	end   TextPosition
}
