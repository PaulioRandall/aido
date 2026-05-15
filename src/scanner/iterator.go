package scanner

type iterator struct {
	source []rune
	index  int
	length int
}

func Iterator(source []rune) *iterator {
	return &iterator{
		source: source,
		index:  0,
		length: len(source),
	}
}

func (itr *iterator) Empty() bool {
	return len(itr.source) == 0
}

func (itr *iterator) Next() (Token, error) {
	return scanNext(itr)
}
