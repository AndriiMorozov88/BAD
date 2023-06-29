const space = ' ';
const newLine = '\n';
const textArea = document.querySelector('[data-text-area]');
const form = document.querySelector('[data-form]');
const button = document.querySelector('[data-button]');
button.addEventListener('click', (event) => {
  event.preventDefault();
  console.clear();
  getWordArray();
  getWords();
  //form.reset();
});
function getWordArray() {
  stringArray = textArea.value.toLowerCase().split(newLine);
  textArray = stringArray.reduce((acc, currentValue) => acc + space + currentValue);
  wordArray = textArray.split(space);
  wordArray = wordArray.filter(word => word.length > 0);
}
function getWords() {
  
}