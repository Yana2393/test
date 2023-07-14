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

const input = document.getElementById("validation-input");

const resultParagraph = document.createElement("p");
document.body.appendChild(resultParagraph);

input.addEventListener("input", function () {
  const text = input.value;
  const result = findFirstUniqueCharacter(text);
  resultParagraph.textContent = `Your unique symbol: ${result}`;
});
