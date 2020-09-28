"use strict";

/*
____________________________________________

--- МОДУЛЬ РЕДАКТИРОВАНИЯ ТЕКСТА ЗАМЕТОК ---
____________________________________________

*/
window.noteText = (function () {
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


  /*
  ----------------------------------------------------------------------------------
  --------------------------------- ОСНОВНАЯ ЛОГИКА --------------------------------
  ----------------------------------------------------------------------------------
  */

  return {
    // *** Функции для р\едактирования текста заметки ***
    edit: function (currentElem) {
      // --- Открытие модальных окон ---
      modal.forEach(element => {
        element.classList.add("modal--show");
      });

      // --- Получение Имени и Текста заметки ---
      modalWindow.querySelector(".modal__note-name").value = notes[currentElem].querySelector(".note__name-text").textContent;
      modalWindow.querySelector(".modal__note-description").value = notes[currentElem].querySelector(".note__description").textContent;

      // --- Обновление даты создания заметки ---
      var currentDate = new Date();
      var noteCreationDate = (currentDate.getMonth() + 1) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();

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


        // --- Своевременное удаление обработчика события ---
        modalCloseButton.removeEventListener("click", onCloseModal);
      };


      // --- Добавление обработчика события клика на кнопку "Редактировать" ---
      modalCloseButton.addEventListener("click", onCloseModal);  
    }
  };

})();