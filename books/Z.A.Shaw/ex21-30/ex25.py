def break_words(stuff):
    """Ta funkcja rozbija zdanie na słowa."""
    words = stuff.split(' ')
    return words

def sort_words(words):
    """Sortuje słowa."""
    return sorted(words)

def print_first_word(words):
    """Drukuje pierwsze słowo i usuwa je ze zdania."""
    word = words.pop(0)
    print(word)

def print_last_word(words):
    """Drukuje ostatnie słowo i usuwa je ze zdania."""
    word = words.pop(-1)
    print(word)

# def sort_sentence(sentence):
    """Pobiera pełne zdanie i zwraca posortowane słowa."""
    words = break_words(sentence)
    return sort_words(words)

# def print_first_and_last(sentence):
    """Drukuje pierwsze i ostatnie słowo zdania."""
    words = break_words(sentence)
    print_first_word(words)
    print_last_word(words)

# def print_first_and_last_sorted(sentence):
    """Sortuje słowa, a następnie drukuje pierwsze i ostatnie."""
    words = sort_sentence(sentence)
    print_first_word(words)
    print_last_word(words)