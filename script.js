const space = ' ';
const textArea = document.querySelector('[data-text-area]');
const form = document.querySelector('[data-form]');
const button = document.querySelector('[data-button]');
button.addEventListener('click', (event) => {
  event.preventDefault();
  console.clear();
  getWordArray();
  getLetters();
  form.reset();
});
function getWordArray() {
  wordArray = textArea.value.toLowerCase().split(space);
}
function getLetters() {
  wordArray.forEach(element => console.log(element.length));
}