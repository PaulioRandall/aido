package scanner

// All values are based on runes, not bytes.

type TextPosition struct {
	index     int
	line      int
	lineIndex int
}

// E.g. func length(start, end TextPosition) int
