const space = ' ';
const n = '\n';
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
  stringArray = textArea.value.toLowerCase().split(n);
}
function getLetters() {
  wordArray.forEach((element) => {
    if (element.length !== 0) {
      console.log(element);
    }
  });
}