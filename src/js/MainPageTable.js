const Users = {
    ContactUsers: ["Korotin Denys", "Tverdohleb Arseniy", "Tverdohleb Yulia", "Kovalchuk Valeria", "Pupkin Poligraph", "Korotina Svetlana", "Korotin Sergey"]
};
let setItemAtLocaleStorage = localStorage.setItem("Users", JSON.stringify(Users.ContactUsers));

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
        return window.open("http://localhost:8080/AddContact.html", "_self");
    });
};

addNewPerson();
initTable();