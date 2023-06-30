const space = ' ';
const newLine = '\n';
const noSpace = '';
const textArea = document.querySelector('[data-text-area]');
const form = document.querySelector('[data-form]');
const button = document.querySelector('[data-button]');
button.addEventListener('click', (event) => {
  event.preventDefault();
  console.clear();
  getWordArray();
  getLettersArray();
  //form.reset();
});
function getWordArray() {
  stringArray = textArea.value.toLowerCase().split(newLine);
  textArray = stringArray.reduce((acc, currentValue) => acc + space + currentValue);
  wordArray = textArray.split(space);
}
function getLettersArray() {
  letterArray = new Array();
  wordArray.forEach(word => {
    letterArray.push(word.split(noSpace));
  });
  
  for (let count = 0; count < letterArray.length; count++) {
    letterArray[count] = letterArray[count].filter(symbol => symbol >= 'a' && symbol <= 'z');
  }
  letterArray = letterArray.filter(word => word.length > 0);
  console.log(letterArray);
}
