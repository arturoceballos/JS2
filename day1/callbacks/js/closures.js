function counter() {

    var count = 0;

    return function () {
        count++;
        return count;
    };
}

var theCounter = counter();

console.log(theCounter());
console.log(theCounter());
console.log(theCounter());