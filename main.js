"use strict";

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ex', 'qu', 'newline', 'whitespace'];

toChinese.onclick = function (e) {
  e.target.classList.add('choosed');
  toUnown.classList.remove('choosed');
  chinese.classList.add('show');
  unown.classList.remove('show');
};

toUnown.onclick = function (e) {
  e.target.classList.add('choosed');
  toChinese.classList.remove('choosed');
  unown.classList.add('show');
  chinese.classList.remove('show');
};

(function loadImg() {
  alphabet.forEach(function (val) {
    var div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = "<img src=\"./" + val + ".png\" alt=\"" + val + "\" />";

    div.onclick = function () {
      switch (val) {
        case 'ex':
          output.value += '!';
          break;

        case 'qu':
          output.value += '?';
          break;

        case 'newline':
          output.value += '\n';
          break;

        case 'whitespace':
          output.value += ' ';
          break;

        default:
          output.value += val;
      }
    };

    cards.appendChild(div);
  });
})();

(function outputImg() {
  function translate(userInput) {
    var match = false;

    switch (userInput) {
      case '!':
        userInput = 'ex';
        match = true;
        break;

      case '?':
        userInput = 'qu';
        match = true;
        break;

      case ' ':
        userInput = 'empty';
        match = true;
        break;

      case '\n':
        userInput = 'newline';
        match = true;
        break;

      default:
        if (userInput.match(/[a-z]/)) match = true;
        break;
    }

    var div = document.createElement('div');
    div.classList.add('card');
    if (userInput == 'newline') div.style.cssText = "flex:100%;height:2vh;opacity:0;overflow:hidden;";

    if (match) {
      div.innerHTML = "<img src=\"./" + userInput + ".png\" alt=\"" + userInput + "\" />";
    } else {
      div.innerHTML = "<img src=\"./empty.png\" alt=\"empty.png\" />";
    }

    outputCard.appendChild(div);
  }

  onputSubmit.onclick = function () {
    var userInput = input.value.toLowerCase();
    outputCard.innerHTML = '';
    userInput.split('').forEach(function (val) {
      translate(val);
    });
  };
})();