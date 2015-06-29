function element(elementType, text) {
    var newElement = document.createElement(elementType);
    newElement.textContent = text;

    return newElement;
}

function arrayOfStrings () {
    debugger;
    var array = document.getElementById('input1').value.split(' ');
    var largestString = 0;
    var largestStringName = "";
    var largestNumber = 0;

    for (var i = largestNumber; i < array.length; i++){
        debugger;
        if (typeof array[i] === 'number') {
            if (array[i]>largestNumber) {
                largestNumber = array[i];
                //var newNum = parseInt(largestNumber);
            }
        } else if (typeof array[i] === 'string') {
            if (array[i].length > largestString) {
                largestString = array[i].length;
                largestStringName = array[i];
            }
        }
    }

    //console.log(array);
    //console.log(largestString);
    console.log(largestStringName);
    //console.log(largestNumber);
    //console.log(newNum);
    return array;
}

function result () {
    var results = document.getElementById('results');
    results.appendChild(element("p", arrayOfStrings()));
}

//console.log(arrayOfStrings());
