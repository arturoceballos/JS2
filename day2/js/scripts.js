function element(elementType, text) {
    var newElement = document.createElement(elementType);
    newElement.textContent = text;

    return newElement;
}

function arrayOfStrings () {
    var array = document.getElementById('input1').value.split(' ');
    var largestString = 0;
    var largestStringName = "";
    var largestNumber = 0;

    for (var m = 0; m < array.length; m++){
        if (array[m].length > largestString) {
            largestString = array[m].length;
            largestStringName = array[m];
        }
        else if (array[m]>largestNumber) {
            largestNumber = array[m];
            var newNum = parseInt(largestNumber);
        }
    }

    //console.log(array);
    //console.log(largestString);
    console.log(largestStringName);
    //console.log(largestNumber);
    console.log(newNum);
    return array;
}

function result () {

    var results = document.getElementById('results');
    var p = document.createElement("p");
    document.body.appendChild(p);
    p.appendChild(element("p", arrayOfStrings()));
}

console.log(result());
