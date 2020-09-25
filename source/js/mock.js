"use strict";

/*
____________________

--- МОДУЛЬ МОКОВ ---
____________________

*/
window.mock = (function () {
  // *** Моки для Заметок ***
  var NOTES = [
    {"number":1,"name":"Regrant","description":"Re-contextualized client-server methodology","date":"3/13/2020"},
    {"number":2,"name":"Greenlam","description":"Robust even-keeled leverage","date":"7/18/2020"},
    {"number":3,"name":"Bitwolf","description":"Ergonomic high-level paradigm","date":"9/20/2020"},
    {"number":4,"name":"Tres-Zap","description":"Switchable bandwidth-monitored encryption","date":"8/14/2020"},
    {"number":5,"name":"Toughjoyfax","description":"Self-enabling global focus group","date":"3/11/2020"},
    {"number":6,"name":"Tresom","description":"Face to face methodical matrix","date":"12/28/2019"},
    {"number":7,"name":"Alphazap","description":"Pre-emptive fresh-thinking task-force","date":"4/9/2020"},
    {"number":8,"name":"Zathin","description":"Cross-group modular hub","date":"6/2/2020"},
    {"number":9,"name":"Voltsillam","description":"Object-based zero defect orchestration","date":"8/25/2020"},
    {"number":10,"name":"Ronstring","description":"Universal reciprocal parallelism","date":"8/4/2020"},
    {"number":11,"name":"Sub-Ex","description":"Right-sized system-worthy definition","date":"2/9/2020"},
    {"number":12,"name":"Zontrax","description":"Fundamental 4th generation standardization","date":"9/4/2020"},
    {"number":13,"name":"Job","description":"Progressive national policy","date":"3/2/2020"},
    {"number":14,"name":"Overhold","description":"Persistent user-facing concept","date":"10/22/2019"},
    {"number":15,"name":"Tres-Zap","description":"Integrated 4th generation secured line","date":"3/14/2020"},
    {"number":16,"name":"Bitchip","description":"Customizable actuating concept","date":"4/12/2020"},
    {"number":17,"name":"Home Ing","description":"Cross-group fresh-thinking hardware","date":"5/20/2020"},
    {"number":18,"name":"Subin","description":"Streamlined motivating utilisation","date":"6/16/2020"},
    {"number":19,"name":"Tres-Zap","description":"Compatible client-server complexity","date":"2/10/2020"},
    {"number":20,"name":"Bitchip","description":"Cross-platform national moderator","date":"6/5/2020"},
    {"number":21,"name":"Asoka","description":"Front-line heuristic protocol","date":"10/26/2019"},
    {"number":22,"name":"Regrant","description":"Re-engineered dedicated solution","date":"10/12/2019"},
    {"number":23,"name":"Fintone","description":"Managed 24/7 knowledge user","date":"7/1/2020"},
    {"number":24,"name":"Zathin","description":"Fully-configurable multimedia synergy","date":"6/1/2020"},
    {"number":25,"name":"Wrapsafe","description":"Optimized local alliance","date":"12/1/2019"},
    {"number":26,"name":"Lotstring","description":"Down-sized intangible architecture","date":"9/8/2020"},
    {"number":27,"name":"Zontrax","description":"Realigned exuding local area network","date":"4/16/2020"},
    {"number":28,"name":"Job","description":"Universal stable flexibility","date":"11/22/2019"},
    {"number":29,"name":"Otcom","description":"Intuitive bifurcated complexity","date":"12/6/2019"},
    {"number":30,"name":"Domainer","description":"Centralized impactful synergy","date":"1/5/2020"}
  ];

  window.renderNote(NOTES);


  return {
    fakeNotes: NOTES
  };
})();