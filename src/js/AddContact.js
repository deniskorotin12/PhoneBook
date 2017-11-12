function RegistrationPerson() {
    const getRegButton = document.getElementById("BackButton");
    getRegButton.addEventListener("click", function() {
        return window.open("http://localhost:8080/PhoneBook.html", "_self");
    });
};

RegistrationPerson();