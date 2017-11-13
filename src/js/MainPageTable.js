window.onload = function() {
    let hideElement = document.getElementById("containerForRegistration");
    hideElement.style.visibility = "hidden";
};

const Users = {
    ContactUsers: ["Korotin Denys", "Tverdohleb Arseniy", "Tverdohleb Yulia", "Kovalchuk Valeria", "Pupkin Poligraph", "Korotina Svetlana", "Korotin Sergey"]
};
let setItemAtLocaleStorage = localStorage.setItem("Users", Users.ContactUsers);

function test() {
    for (let index = 0; index < 3; index++) {
        Users.ContactUsers.push("DENISD");
    }

};

function initTable() {

    for (let prop in Users.ContactUsers) {

        const createTd = document.createElement('td');
        createTd.innerText = Users.ContactUsers[prop];
        createTd.setAttribute("title", "Transfer to contact");

        const createTr = document.createElement('tr');

        const tBodyItems = document.getElementById("t_BodyItems");

        tBodyItems.appendChild(createTr);
        tBodyItems.appendChild(createTd);
    };
};

function addNewPerson() {
    const addNewPerson = document.getElementById("addContactButton");
    addNewPerson.addEventListener("click", function() {
        let hideElement = document.getElementById("containerForRegistration");
        hideElement.style.visibility = "visible";
        const dialog = document.querySelector('dialog');
        dialog.show();
    });
};

function hideBlock() {
    const closeDialog = document.getElementById("closeButton");
    closeDialog.addEventListener("click", function() {
        const hideElement = document.getElementById("containerForRegistration");
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
        return hideBlock();
    });
};

AddContactButton();
//hideBlock();
addNewPerson();
initTable();