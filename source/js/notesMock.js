"use strict";

/*
____________________

--- МОДУЛЬ МОКОВ ---
____________________

*/
window.notesMock = (function () {
  // *** Моки для Заметок ***
  var NOTES = [
    {"number":1,"name":"Daltfresh","description":"Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","date":"28/03/2020"},
    {"number":2,"name":"Transcof","description":"Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.","date":"05/12/2019"},
    {"number":3,"name":"Duobam","description":"Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.","date":"10/04/2020"},
    {"number":4,"name":"Trippledex","description":"Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.","date":"23/06/2020"},
    {"number":5,"name":"Matsoft","description":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.","date":"13/02/2020"},
    {"number":6,"name":"Temp","description":"Morbi vel lectus in quam fringilla rhoncus.","date":"02/08/2020"},
    {"number":7,"name":"Bamity","description":"Suspendisse potenti. Cras in purus eu magna vulputate luctus.","date":"15/08/2020"},
    {"number":8,"name":"Voltsillam","description":"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.","date":"17/08/2020"},
    {"number":9,"name":"Zaam-Dox","description":"Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","date":"05/02/2020"},
    {"number":10,"name":"Zamit","description":"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.","date":"25/01/2020"},
    {"number":11,"name":"Ventosanzap","description":"In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","date":"19/10/2019"},
    {"number":12,"name":"Bytecard","description":"Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.","date":"27/05/2020"},
    {"number":13,"name":"Fintone","description":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.","date":"18/01/2020"},
    {"number":14,"name":"Zoolab","description":"Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.","date":"26/10/2019"},
    {"number":15,"name":"Span","description":"Aliquam non mauris.","date":"09/06/2020"},
    {"number":16,"name":"Fix San","description":"Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.","date":"03/12/2019"},
    {"number":17,"name":"Daltfresh","description":"Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","date":"01/07/2020"},
    {"number":18,"name":"Tin","description":"Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.","date":"08/10/2019"},
    {"number":19,"name":"Latlux","description":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.","date":"24/12/2019"},
    {"number":20,"name":"Ronstring","description":"Proin at turpis a pede posuere nonummy. Integer non velit.","date":"03/05/2020"},
    {"number":21,"name":"Matsoft","description":"Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.","date":"30/03/2020"},
    {"number":22,"name":"Zathin","description":"Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","date":"30/04/2020"},
    {"number":23,"name":"Quo Lux","description":"Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.","date":"11/12/2019"},
    {"number":24,"name":"Greenlam","description":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.","date":"23/10/2019"},
    {"number":25,"name":"Hatity","description":"Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","date":"17/08/2020"},
    {"number":26,"name":"Konklux","description":"Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","date":"10/03/2020"},
    {"number":27,"name":"Job","description":"In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.","date":"27/05/2020"},
    {"number":28,"name":"Holdlamis","description":"Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.","date":"25/12/2019"},
    {"number":29,"name":"Zoolab","description":"Sed ante.","date":"26/01/2020"},
    {"number":30,"name":"Gembucket","description":"Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.","date":"30/05/2020"}
  ];

  window.renderNote(NOTES);

})();