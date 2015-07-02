//Create contact object or objects
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

//Store that contact or contacts in a contacts array
var contacts = [bob, mary];

// Create function to display a contacts full name
function printPerson (person) {
    console.log(person.firstName + " " + person.lastName);
};

printPerson(contacts[0]);
printPerson(contacts[1]);

// Create function to list all contacts
function list() {
    var contactsLength = contacts.length;
    for (i = 0; i < contactsLength; i++){
        printPerson(contacts[i]);
    };
}

list();

// Create a constructor function so that we can add new contacts dynamically
function Person(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    //Could add update functions vvv
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
}

// Create new instance of Person
var arturo = new Person("Arturo", "Ceballos", "(559) 555-5555", "aceballos118@gmail.com");

//Update contact
arturo.updateEmail("(559) 974-8487");