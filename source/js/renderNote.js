"use strict";

/*
________________________________

--- МОДУЛЬ ОТРИСОВКИ ЗАМЕТОК ---
________________________________

*/
window.renderNote = (function () {
  /*
  ----------------------------------------------------------------------------------
  ---------------------- ВСПОМОГАТЕЛЬНЫЕ ПЕРЕМЕННЫЕ И ФУНКЦИИ ----------------------
  ----------------------------------------------------------------------------------
  */

  // ********* DOM-элементы *********
  var noteTemplate = document.querySelector("#note-template").content.querySelector(".notes-list__item");
  var notesContainer = document.querySelector(".notes-list");


  /*
  ----------------------------------------------------------------------------------
  --------------------------------- ОСНОВНАЯ ЛОГИКА --------------------------------
  ----------------------------------------------------------------------------------
  */
  var getNote = function (noteContent) {
    var note = noteTemplate.cloneNode(true);

    note.querySelector(".note__name .note__name-number").textContent = noteContent.number;
    note.querySelector(".note__name .note__name-text").textContent = noteContent.name;
    note.querySelector(".note__description").textContent = noteContent.description;
    note.querySelector(".note__creation-date").textContent = noteContent.date;

    return note;
  };


  return function (notes) {
    // --- Очищение списка от "старых" заметок ---
    var oldNotes = notesContainer.querySelectorAll(".notes-list__item");
    oldNotes.forEach(oldNote => {
      oldNote.remove();
    });

    // --- Добавление "новых" заметок ---
    notes.forEach(newNote => {
      notesContainer.appendChild(getNote(newNote));
    });
  };

})();