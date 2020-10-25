const KEYBORD_KEYS = document.querySelectorAll('.keyboard__keys'),
   VIEW_KEYBORD_KEYS = document.querySelector('.use-keyboard-input'),
   BACKSPACE = document.querySelector('.backspace'),
   TAB = document.querySelector('.tab'),
   ARROW_UP = document.querySelector('.arrow-up'),
   ENTER = document.querySelector('.enter'),
   SHIFT = document.querySelector('.shift'),
   MICROPHONE = document.querySelector('.microphone'),
   SOUND = document.querySelector('.sound'),
   SPACE = document.querySelector('.space'),
   LANGUAGE = document.querySelector('.language'),
   CHECK_CIRCLE = document.querySelector('.check-circle');

(function () {
   for (let i = 0; i < KEYBORD_KEYS.length; i++) {
      getKeyboardKeys(KEYBORD_KEYS[i]);
   }
})();

function getKeyboardKeys(DomElemet) {
   DomElemet.addEventListener('click', (e) => {
      let veiwContent = e.target.textContent;
      // let str = VIEW_KEYBORD_KEYS.textContent + veiwContent;
      // VIEW_KEYBORD_KEYS.textContent = str;
      VIEW_KEYBORD_KEYS.textContent += veiwContent;
   });
}

function deleteLastElemet() {
   BACKSPACE.addEventListener('click', () => {
      VIEW_KEYBORD_KEYS.textContent = VIEW_KEYBORD_KEYS.textContent.slice(0, VIEW_KEYBORD_KEYS.textContent.length - 1);
   });
}
deleteLastElemet();