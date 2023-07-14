const input = document.getElementById("validation-input");
const resultParagraph = document.createElement("p");
const wrapperDiv = document.querySelector('.wrapp');


function findFirstUniqueCharacter(text) {
  const words = text.split(" ");

  const charCounts = {};

  for (const word of words) {
    for (const char of word) {
      if (charCounts[char]) {
        charCounts[char]++;
      } else {
        charCounts[char] = 1;
      }
    }
  }

  for (const word of words) {
    for (const char of word) {
      if (charCounts[char] === 1) {
        return char;
      }
    }
  }

  return null;
}

wrapperDiv.appendChild(resultParagraph);
resultParagraph.classList.add("result");

input.addEventListener("input", function () {
  const text = input.value;
  const result = findFirstUniqueCharacter(text);
  resultParagraph.textContent = `Your unique symbol: ${result}`;
});

