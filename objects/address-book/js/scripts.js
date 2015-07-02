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