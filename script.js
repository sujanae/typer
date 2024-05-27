document.addEventListener('DOMContentLoaded', () => {
    const wordToTypeElement = document.getElementById('word-to-type');
    const inputWord = document.getElementById('input-word');
    const pointsDisplay = document.getElementById('points');
    let points = 0;

    const words = [
        'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 
        'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 
        'papaya', 'quince', 'raspberry', 'strawberry', 'tangerine', 
        'ugli', 'vanilla', 'watermelon', 'xigua', 'yellow','sujan', 'zucchini'
    ];

    function getRandomWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    function setNewWord() {
        const newWord = getRandomWord();
        wordToTypeElement.textContent = newWord;
        inputWord.value = '';
        inputWord.style.borderColor = '#ddd';
    }

    setNewWord();

    inputWord.addEventListener('input', () => {
        const wordToType = wordToTypeElement.textContent;
        const typedWord = inputWord.value;

        if (typedWord === wordToType) {
            points += 10;
            pointsDisplay.textContent = points;
            setNewWord();
        }
    });
});
