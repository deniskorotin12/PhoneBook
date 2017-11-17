const hideElement = document.getElementById("containerForRegistration");
const Users = {
    ContactUsers: ["Korotin Denys", "Tverdohleb Arseniy", "Tverdohleb Yulia", "Kovalchuk Valeria", "Pupkin Poligraph", "Korotina Svetlana", "Korotin Sergey"]
};
const closeDialog = document.getElementById("closeButton");
const newPersonButton = document.getElementById("addContactButton");


window.onload = function() {
    let hideElement = document.getElementById("containerForRegistration");
    hideElement.style.visibility = "hidden";
};


let setItemAtLocaleStorage = localStorage.setItem("Users", Users.ContactUsers);

function test() {
    for (let index = 0; index < 3; index++) {
        Users.ContactUsers.push("DENISD");
    }

};

let initTable = (function() {

    for (let prop in Users.ContactUsers) {

        const createTd = document.createElement('td');
        createTd.innerText = Users.ContactUsers[prop];
        createTd.setAttribute("title", "Transfer to contact");

        const createTr = document.createElement('tr');

        const tBodyItems = document.getElementById("t_BodyItems");

        tBodyItems.appendChild(createTr);
        tBodyItems.appendChild(createTd);
    };
}());

let addNewPerson = (function() {
    
    newPersonButton.addEventListener("click", function() {
        hideElement.style.visibility = "visible";
        const dialog = document.querySelector('dialog');
        dialog.show();
    });
}());

function hideBlock() {
    closeDialog.addEventListener("click", function() {
        hideElement.style.visibility = "hidden";
    });
};

const Name = document.getElementById("regName");
const Surname = document.getElementById("regSurname");


// function pushFullName(name, surname) {
//     const fullName = name + surname;
//     return Users.ContactUsers.push(fullName)
// }


function AddContactButton() {
    const getRegButton = document.getElementById("regButton");
    getRegButton.addEventListener("click", function() {
        return Users.ContactUsers.push("fuck this police");  //hideElement.style.visibility = "hidden";
    });
};


var grid = document.getElementById('MainTable');

    grid.onclick = function(e) {
      if (e.target.tagName != 'TH') return;

      // Если TH -- сортируем
      sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));
    };

    function sortGrid(colNum, type) {
      var tbody = grid.getElementsByTagName('tbody')[0];

      // Составить массив из TR
      var rowsArray = [].slice.call(tbody.rows);

      // определить функцию сравнения, в зависимости от типа
      var compare;

      switch (type) {
        case 'number':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };
          break;
        case 'string':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
          };
          break;
      }

      // сортировать
      rowsArray.sort(compare);

      // Убрать tbody из большого DOM документа для лучшей производительности
      grid.removeChild(tbody);

      // добавить результат в нужном порядке в TBODY
      // они автоматически будут убраны со старых мест и вставлены в правильном порядке
      for (var i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
      }

      grid.appendChild(tbody);

    }


AddContactButton();
hideBlock();
//addNewPerson();
//initTable();