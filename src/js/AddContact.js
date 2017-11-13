function GoBack() {
    const getRegButton = document.getElementById("BackButton");
    getRegButton.addEventListener("click", function() {
        return window.open("http://localhost:8080/PhoneBook.html", "_self");
    });
};
function AddContactButton() {
    const getRegButton = document.getElementById("regButton");
    getRegButton.addEventListener("click", function() {
        return console.log(localStorage.getItem('Users'));
    });
};

AddContactButton();
GoBack();