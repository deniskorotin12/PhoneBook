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
    ContactUsers: []
};
var closeDialog = document.getElementById("closeButton");
var newPersonButton = document.getElementById("addContactButton");
var getItemLocaleStorage = localStorage.getItem("Users");
var getRegButton = document.getElementById("regButton");
var dialog = document.querySelector('dialog');

window.onload = function () {
    var hideElement = document.getElementById("containerForRegistration");
    hideElement.style.visibility = "hidden";
};

var initTable = function () {
    if (localStorage.getItem("Users") != null) {
        for (var prop in getItemLocaleStorage.split(",")) {
            var createTd = document.createElement('td');
            createTd.innerText = getItemLocaleStorage.split(",")[prop];
            createTd.setAttribute("title", "Transfer to contact");
            createTd.className = "tdCreate";

            var createButton = document.createElement('button');
            createButton.innerText = "Delete";
            createButton.className = "deleteButton";

            var createTr = document.createElement('tr');

            var tBodyItems = document.getElementById("t_BodyItems");

            tBodyItems.appendChild(createTr);
            tBodyItems.appendChild(createTd);
            createTd.appendChild(createButton);
        };
    } else {
        localStorage.setItem("Users", " ");
    }
}();

function addNewPerson() {
    newPersonButton.addEventListener("click", function () {
        hideElement.style.visibility = "visible";
        dialog.show();
    });
};

function hideBlock() {
    closeDialog.addEventListener("click", function () {
        hideElement.style.visibility = "hidden";
    });
};

function pushFullName() {
    var Name = document.getElementById("regName");
    var Surname = document.getElementById("regSurname");
    // if (Name.value || Surname.value == "") {
    //     return alert("Enter correct data");
    // } else {
    var fullName = Name.value + " " + Surname.value;
    return fullName;
    // };
};

var AddContactButton = function () {
    getRegButton.addEventListener("click", function () {
        if (localStorage.getItem("Users")[0] == " ") {
            Users.ContactUsers = localStorage.getItem("Users");
            Users.ContactUsers = pushFullName();
            localStorage.setItem("Users", Users.ContactUsers);
            hideElement.style.visibility = "hidden";
            location.reload();
        } else {
            Users.ContactUsers = localStorage.getItem("Users");
            Users.ContactUsers += "," + pushFullName();
            localStorage.setItem("Users", Users.ContactUsers);
            hideElement.style.visibility = "hidden";
            location.reload();
        }
    });
}();

hideBlock();
addNewPerson();

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