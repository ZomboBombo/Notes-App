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
  var modal = document.querySelectorAll(".modal"); // --- Коллекция модальных окон
  var modalWindow = document.querySelector(".modal--window");
  var modalCloseButton = modalWindow.querySelector(".modal__close-button");

  var notes = notesList.querySelectorAll(".notes-list__item"); // --- Коллекция заметок
  var editButtons = notesList.querySelectorAll("#editNoteButton"); // --- Коллекция кнопок для редактирования
  var removeButtons = notesList.querySelectorAll("#removeNoteButton"); // --- Коллекция кнопок для удаления


  /*
  ----------------------------------------------------------------------------------
  --------------------------------- ОСНОВНАЯ ЛОГИКА --------------------------------
  ----------------------------------------------------------------------------------
  */

  // *** Функции для редактирования текста заметки ***
  var editTextOfNote = function (currentElem) {
    // --- Открытие модальных окон ---
    modal.forEach(element => {
      element.classList.add("modal--show");
    });

    // --- Получение Имени и Текста заметки ---
    modalWindow.querySelector(".modal__note-name").value = notes[currentElem].querySelector(".note__name-text").textContent;
    modalWindow.querySelector(".modal__note-description").value = notes[currentElem].querySelector(".note__description").textContent;

    // --- Обновление даты создания заметки ---
    var currentDate = new Date();
    var noteCreationDate = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();

    modalWindow.querySelector(".modal__note-creation-date").textContent = noteCreationDate;


    // *** Функция для обработки события закрытия модального окна ***
    var onCloseModal = function (evt) {
      evt.preventDefault();

      // --- Получаем отредактированное Имя и присваиваем его заметке ---
      var newNoteName = modalWindow.querySelector(".modal__note-name").value;
      notes[currentElem].querySelector(".note__name-text").textContent = newNoteName;

      // --- Получаем отредактированное Описание и присваиваем его заметке ---
      var newNoteDescription = modalWindow.querySelector(".modal__note-description").value;
      notes[currentElem].querySelector(".note__description").textContent = newNoteDescription;

      notes[currentElem].querySelector(".note__creation-date").textContent = noteCreationDate;

      // --- Обнуляем текущее состояние модального окна для редактирования ---
      modalWindow.querySelector(".modal__note-name").value = "";
      modalWindow.querySelector(".modal__note-description").value = "";

      modal.forEach(element => {
        element.classList.remove("modal--show");
      });


      // --- Своевременное удаление обработчика событий ---
      modalCloseButton.removeEventListener("click", onCloseModal);
    };


    // --- Добавление обработчика события клика на кнопку "Редактировать" ---
    modalCloseButton.addEventListener("click", onCloseModal);  
  };


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
        editTextOfNote(j);
        break;

      } else if (evt.target.id === removeButtons[j].id) {
        notes[j].remove();
        break;
      }
    }
  });

})();