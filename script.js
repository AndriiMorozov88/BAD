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
  // getLettersArray();
  // getFirstUnicalLettersArray();
  //form.reset();
});
function getWordArray() {
  text = textArea.value.toLowerCase();
  textEdited = text.replace(/[\n, \W]/g, ' ').replace(/\s{2,}/g, ' ');
  console.log(textEdited);
}
// function getLettersArray() {
//   letterArray = new Array();
//   wordArray.forEach(word => {
//     letterArray.push(word.split(noSpace));
//   });
  
//   for (let count = 0; count < letterArray.length; count++) {
//     letterArray[count] = letterArray[count].filter(symbol => symbol >= 'a' && symbol <= 'z');
//   }
//   letterArray = letterArray.filter(word => word.length > 0);
// }

