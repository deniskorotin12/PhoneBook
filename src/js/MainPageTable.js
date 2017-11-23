const hideElement = document.getElementById("containerForRegistration");
const Users = {
    ContactUsers: []
};
const closeDialog = document.getElementById("closeButton");
const newPersonButton = document.getElementById("addContactButton");
const getItemLocaleStorage = localStorage.getItem("Users");
const getRegButton = document.getElementById("regButton");
const dialog = document.querySelector('dialog');

window.onload = function () {
    let hideElement = document.getElementById("containerForRegistration");
    hideElement.style.visibility = "hidden";
};


let initTable = (function () {
    if (localStorage.getItem("Users") != null) {
        for (let prop in getItemLocaleStorage.split(",")) {
            const createTd = document.createElement('td');
            createTd.innerText = getItemLocaleStorage.split(",")[prop];
            createTd.setAttribute("title", "Transfer to contact");
            createTd.className = "tdCreate"

            const createButton = document.createElement('button')
            createButton.innerText = "Delete";
            createButton.className = "deleteButton"

            const createTr = document.createElement('tr');

            const tBodyItems = document.getElementById("t_BodyItems");
            

            tBodyItems.appendChild(createTr);
            tBodyItems.appendChild(createTd);
            createTd.appendChild(createButton);
        };
    } else {
        localStorage.setItem("Users", " ");
    }
}());

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
    const Name = document.getElementById("regName");
    const Surname = document.getElementById("regSurname");
    // if (Name.value || Surname.value == "") {
    //     return alert("Enter correct data");
    // } else {
    const fullName = Name.value + " " + Surname.value;
    return fullName;
    // };

};

let AddContactButton = (function () {
    getRegButton.addEventListener("click", function () {
        if (localStorage.getItem("Users")[0] == " ") {
            Users.ContactUsers = localStorage.getItem("Users");
            Users.ContactUsers = pushFullName();
            localStorage.setItem("Users", Users.ContactUsers);
            hideElement.style.visibility = "hidden";
            location.reload();
        }else{
        Users.ContactUsers = localStorage.getItem("Users");
        Users.ContactUsers += "," + pushFullName(); 
        localStorage.setItem("Users", Users.ContactUsers);
        hideElement.style.visibility = "hidden";
        location.reload();
        }
    });
}());

hideBlock();
addNewPerson();