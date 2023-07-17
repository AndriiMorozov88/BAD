const space = ' ';
const noSpace = '';
const textArea = document.querySelector('[data-text-area]');
const form = document.querySelector('[data-form]');
const button = document.querySelector('[data-button]');
const result = document.querySelector('[data-result]');
button.addEventListener('click', (event) => {
  event.preventDefault();
  result.innerText = `Answer is "${getRuquiredLetter().toUpperCase()}"`;
});
function getWordArray() {
  text = textArea.value.toLowerCase();
  textEdited = text.replace(/[\n, \W]/g, space).replace(/\s{2,}/g, space).trim();
  return textEdited.split(space);
}
function getLettersArray() {
  lettersArray = new Array();
  getWordArray().forEach(element => {
    lettersArray.push(element.split(noSpace));
  });
  return lettersArray;
}
function getFirstUnicalElement(el) {
  for (let count = 0; count < el.length; count++) {
    if (el.indexOf(el[count]) === el.lastIndexOf(el[count])) {
     return el[count];
     break;
    }
  }
}
function getFirstUnicalLetters() {
  unicalLettersArray = new Array();
  getLettersArray().forEach(element => {
    unicalLettersArray.push(getFirstUnicalElement(element));
  });
  return unicalLettersArray;
}
function getRuquiredLetter() {
  return getFirstUnicalElement(getFirstUnicalLetters());
}
