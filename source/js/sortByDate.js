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