import random
from urllib.request import urlopen
import sys

WORD_URL = "http://learncodethehardway.org/words.txt"
WORDS = []

PHRASES = {
    "class %%%(%%%):":
        "Utwórz klasę o nazwie %%%, która jest %%%.",
    "class %%%(object):\n\tdef __init__(self, ***)":
        "Klasa %%% ma __init__, które przyjmuje parametry self i ***.",
    "class %%%(object):\n\tdef ***(self, @@@)":
        "Klasa %%% ma funkcję ***, która przyjmuje parametry self i @@@.",
    "*** = %%%()":
        "Ustaw *** na instancję klasy %%%.",
    "***.***(@@@)":
        "Z *** weź funkcję *** i wywołaj ją z parametrami self, @@@.",
    "***.*** = '***'":
        "Z *** weź atrybut *** i ustaw go na '***'."
}

# czy chcemy najpierw poćwiczyć wyrażenia
if len(sys.argv) == 2 and sys.argv[1] == "polski":
    PHRASE_FIRST = True
else:
    PHRASE_FIRST = False

# ładujemy słowa ze strony internetowej
for word in urlopen(WORD_URL).readlines():
    WORDS.append(str(word.strip(), encoding="utf-8"))

def convert(snippet, phrase):
    class_name = [w.capitalize() for w in 
                random.sample(WORDS, snippet.count("%%%"))]
    other_names = random.sample(WORDS, snippet.count("***"))
    results = []
    param_names = []

    for i in range(0, snippet.count("@@@")):
        param_count = random.randint(1,3)
        param_names.append(', '.join(
            random.sample(WORDS, param_count)
        ))

    for sentence in snippet, phrase:
        result = sentence[:]

        # podstawiamy nazwy
        for word in snippet, phrase:
            result = result.replace("%%%", word, 1)

        # podstawiamy pozostałe nazwy
        for word in other_names:
            result = result.replace("***", word, 1)

        # podstawiamy listy parametrów
        for word in param_names:
            result = result.replace("@@@", word, 1)

        results.append(result)

    return results

# kontynuujemy, aż użytkownik nie wciśnie Ctrl+D (lub Ctrl+Z w systemie Windows)
try:
    while True:
        snippets = list(PHRASES.keys())
        random.shuffle(snippets)

        for snippet in snippets:
            phrase = PHRASES[snippet]
            question, answer = convert(snippet, phrase)
            if PHRASE_FIRST:
                question, answer = answer, question

            print(question)

            input("> ")
            print(f"ODPOWIEDŹ: {answer}\n\n")
except EOFError:
    print("\nDo widzenia")