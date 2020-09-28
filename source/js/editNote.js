"use strict";

/*
_____________________________________

--- МОДУЛЬ РЕДАКТИРОВАНИЯ ЗАМЕТОК ---
_____________________________________

*/
window.editNote = (function () {
  /*
  ----------------------------------------------------------------------------------
  ---------------------- ВСПОМОГАТЕЛЬНЫЕ ПЕРЕМЕННЫЕ И ФУНКЦИИ ----------------------
  ----------------------------------------------------------------------------------
  */

  // ********* DOM-элементы *********
  var notesList = document.querySelector(".notes-list"); // --- DOM-элемент списка заметок
  var notes = notesList.querySelectorAll(".notes-list__item"); // --- Коллекция заметок
  var editButtons = notesList.querySelectorAll("#editNoteButton"); // --- Коллекция кнопок для редактирования
  var removeButtons = notesList.querySelectorAll("#removeNoteButton"); // --- Коллекция кнопок для удаления


  /*
  ----------------------------------------------------------------------------------
  --------------------------------- ОСНОВНАЯ ЛОГИКА --------------------------------
  ----------------------------------------------------------------------------------
  */

  // *** Сопоставление ID заметок с ID их кнопок ***
  for (var i = 0; i < notes.length; i++) {
    notes[i].id = i;
    editButtons[i].id += i;
    removeButtons[i].id += i;
  }


  // *** Обработка события клика на кнопки Заметок ***
  notesList.addEventListener("click", function (evt) {
    evt.preventDefault();

    for (var j = 0; j < notes.length; j++) {
      /*
        Если "цель" совпадает с необходимым ID кнопки,
        выполняется условие.

        Ветка "else if" — удаление заметки.
      */
      if (evt.target.id === editButtons[j].id) {
        // *** Вызов функции редактирования текста заметки ***
        window.noteText.edit(j);
        break;

      } else if (evt.target.id === removeButtons[j].id) {
        notes[j].remove();
        break;
      }
    }
  });

})();