/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hideElement = document.getElementById("containerForRegistration");
var Users = {
    ContactUsers: ["Korotin Denys", "Tverdohleb Arseniy", "Tverdohleb Yulia", "Kovalchuk Valeria", "Pupkin Poligraph", "Korotina Svetlana", "Korotin Sergey"]
};
var closeDialog = document.getElementById("closeButton");
var newPersonButton = document.getElementById("addContactButton");

window.onload = function () {
    var hideElement = document.getElementById("containerForRegistration");
    hideElement.style.visibility = "hidden";
};

var setItemAtLocaleStorage = localStorage.setItem("Users", Users.ContactUsers);

function test() {
    for (var index = 0; index < 3; index++) {
        Users.ContactUsers.push("DENISD");
    }
};

var initTable = function () {

    for (var prop in Users.ContactUsers) {

        var createTd = document.createElement('td');
        createTd.innerText = Users.ContactUsers[prop];
        createTd.setAttribute("title", "Transfer to contact");

        var createTr = document.createElement('tr');

        var tBodyItems = document.getElementById("t_BodyItems");

        tBodyItems.appendChild(createTr);
        tBodyItems.appendChild(createTd);
    };
}();

var addNewPerson = function () {

    newPersonButton.addEventListener("click", function () {
        hideElement.style.visibility = "visible";
        var dialog = document.querySelector('dialog');
        dialog.show();
    });
}();

function hideBlock() {
    closeDialog.addEventListener("click", function () {
        hideElement.style.visibility = "hidden";
    });
};

var Name = document.getElementById("regName");
var Surname = document.getElementById("regSurname");

// function pushFullName(name, surname) {
//     const fullName = name + surname;
//     return Users.ContactUsers.push(fullName)
// }


function AddContactButton() {
    var getRegButton = document.getElementById("regButton");
    getRegButton.addEventListener("click", function () {
        return Users.ContactUsers.push("fuck this police"); //hideElement.style.visibility = "hidden";
    });
};

var grid = document.getElementById('MainTable');

grid.onclick = function (e) {
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
            compare = function compare(rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compare = function compare(rowA, rowB) {
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function GoBack() {
    var getRegButton = document.getElementById("BackButton");
    getRegButton.addEventListener("click", function () {
        return window.open("http://localhost:8080/PhoneBook.html", "_self");
    });
};
function AddContactButton() {
    var getRegButton = document.getElementById("regButton");
    getRegButton.addEventListener("click", function () {
        return console.log(localStorage.getItem('Users'));
    });
};

AddContactButton();
GoBack();

/***/ })
/******/ ]);