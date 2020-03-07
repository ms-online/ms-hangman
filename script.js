// 第一步 获取节点
const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "interface", "wonder"];

let selectedWord = words[Math.floor(Math.random() * words.length)];
// console.log(selectedWord);

const correctLetters = [];
const wrongLetters = [];

// 第二步 显示单词函数
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        letter => `
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ""}
        </span>
        `
      )
      .join("")}
    `;
  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === selectedWord) {
    finalMessage.innerText = "恭喜你输入正确！ 😃";
    popup.style.display = "flex";
  }
}

// 第四步 showNotification函数
function showNotification() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}
// 第三步 按下键盘中的字母的事件监听
window.addEventListener("keydown", e => {
  // console.log(e.keyCode);
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});
displayWord();
