//The standard way to create an object prototype is to use an object constructor function
function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

//With a constructor function, you can use the new keyword to create new objects from the same prototype
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");
//The constructor function is the prototype for your person objects

//Sometimes you want to add new properties (or methods) to an existing object.
//Sometimes you want to add new properties (or methods) to all existing objects of a given type.
//Sometimes you want to add new properties (or methods) to an object prototype.

//Adding a new property to an existing object is easy
myFather.nationality = "English";

//Adding a new method to an existing object is also easy
myFather.name = function () {
    return this.firstName + " " + this.lastName;
};

//You cannot add a new property to a prototype the same way as you add a new property to
// an existing object, because the prototype is not an existing object

person.nationality = "English";

//To add a new property to a constructor, you must add it to the constructor function
function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English"
}

//Your constructor function can also define methods
function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {return this.firstName + " " + this.lastName;};
}

//The JavaScript prototype property allows you to add new properties to an existing prototype
function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
person.prototype.nationality = "English";

//The JavaScript prototype property also allows you to add new methods to an existing prototype
function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

//Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects