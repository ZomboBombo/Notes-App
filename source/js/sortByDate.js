"use strict";

/*
_________________________________________

--- МОДУЛЬ СОРТИРОВКИ ЗАМЕТОК ПО ДАТЕ ---
_________________________________________

*/
window.sortByDate = (function () {
  /*
  ----------------------------------------------------------------------------------
  ---------------------- ВСПОМОГАТЕЛЬНЫЕ ПЕРЕМЕННЫЕ И ФУНКЦИИ ----------------------
  ----------------------------------------------------------------------------------
  */

  // ********* DOM-элементы *********
  var sortByDateButton = document.querySelector("#sortByDateButton");
  var notes = document.querySelectorAll(".notes-list__item"); // --- Коллекция заметок
  var noteCreationDates = document.querySelectorAll(".note__creation-date"); // --- Коллекция дат создания заметок


  /*
  ----------------------------------------------------------------------------------
  --------------------------------- ОСНОВНАЯ ЛОГИКА --------------------------------
  ----------------------------------------------------------------------------------
  */

  // *** Функция для перерендеринга заметок ***
  var updateNotes = function (data) {
    window.renderNote(data);

    console.log(data);

    var notesList = document.querySelector(".notes-list");
    var notesItems = notesList.querySelectorAll(".notes-list__item");
    var editButtons = notesList.querySelectorAll("#editNoteButton"); // --- Коллекция кнопок для редактирования
    var removeButtons = notesList.querySelectorAll("#removeNoteButton"); // --- Коллекция кнопок для удаления


    // *** Сопоставление ID заметок с ID их кнопок ***
    for (var i = 0; i < notesItems.length; i++) {
      notesItems[i].id = i;
      editButtons[i].id += i;
      removeButtons[i].id += i;
    }
  };


  // *** Обработчик события клика на кнопку сортировки заметок по дате (от старых к новым) ***
  sortByDateButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    // --- Сортировка массива заметок по дате ---
    var sortedNotes = window.mock.fakeNotes.sort((a, b) => {
      var dateA = new Date (a.date);
      var dateB = new Date (b.date);

      return dateA - dateB;
    });

    // --- Перерендеринг страницы ---
    updateNotes(sortedNotes);
  });

})();