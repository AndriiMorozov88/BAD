const space = ' ';
const noSpace = '';
const textArea = document.querySelector('[data-text-area]');
const form = document.querySelector('[data-form]');
const button = document.querySelector('[data-button]');
button.addEventListener('click', (event) => {
  event.preventDefault();
  console.clear();
  getLettersArray();
  //form.reset();
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

