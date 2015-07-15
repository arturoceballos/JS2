//Create empty array named contacts to push contacts to
var contacts = [];

//Function to create element
function element(elementType, text) {
    var newElement = document.createElement(elementType);
    newElement.textContent = text;

    return newElement;
}

//Create a constructor object named Contact
function Contact(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    //Update contact methods
    this.updateFirst = function (updatedFirst) {
        this.firstName = updatedFirst;
    };
    this.updateLast = function (updatedLast) {
        this.lastName = updatedLast;
    };
    this.updatePhone = function (updatedPhone) {
        this.phoneNumber = updatedPhone;
    };
    this.updateEmail = function (updatedEmail) {
        this.email = updatedEmail;
    }
    contacts.push(this);
}

//Create function that creates new instance of Person object
function saveContact() {
    //Get values of the input boxes
    var firstName = document.getElementById('inputFirst').value;
    //console.log(firstName);
    var lastName = document.getElementById('inputLast').value;
    //console.log(lastName);
    var phoneNumber = document.getElementById('inputPhone').value;
    //console.log(phoneNumber);
    var email = document.getElementById('inputEmail').value;
    //console.log(email);

    //Create new instance of Contact using input values
    var newContact = new Contact(firstName, lastName, phoneNumber, email);

    //console.log(contacts);
}
//Create function to display persons full name
function printPerson (person) {

    return (person.firstName + " " + person.lastName + ", " + person.phoneNumber + ", " + person.email);
}

//Function to display all contacts saved
function displayContacts() {
    //Create for loop to list all contacts saved
    function list() {
        var contactsLength = contacts.length;
        for (var i = 0; i < contactsLength; i++){
            var results = document.getElementById('contacts');
            results.appendChild(element("p", printPerson(contacts[i])));
            var button = results.appendChild(element("button", 'Update Contact'));
            button.setAttribute("onclick", "updateContact()");

            //printPerson(contacts[i]);
        }
    }

    list();
}

function search() {
    var searchInput = document.getElementById('search').value;
    //console.log(searchInput);
    var contactsLength = contacts.length;

    for (var i = 0; i < contactsLength; i++) {
        if (contacts[i].firstName == searchInput) {
            var displaySearch = document.getElementById('contactsSearch');
            displaySearch.appendChild(element("p", printPerson(contacts[i])));
            //printPerson(contacts[i]);
            //console.log(contacts[i]);
        }
    }
}

function updateContact() {
    window.location.assign("update.html")
}