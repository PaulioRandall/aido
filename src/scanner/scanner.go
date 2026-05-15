package scanner

func ScanAll(source []rune) ([]Token, error) {
	var tokens []Token
	itr := Iterator(source)

	for !itr.Empty() {
		tk, err := itr.Next()

		if err != nil {
			return nil, err
		}

		tokens = append(tokens, tk)
	}

	return tokens, nil
}

func scanNext(itr *iterator) (Token, error) {
	var result Token

	if itr.Empty() {
		result.TokenType = EOF
		return result, nil
	}

	// TODO get next token
	// TODO write tests first

	return result, nil
}
