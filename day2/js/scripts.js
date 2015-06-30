function element(elementType, text) {
    var newElement = document.createElement(elementType);
    newElement.textContent = text;

    return newElement;
}

function arrayOfStrings () {
    var array = document.getElementById('input1').value.split(' ');
    var newArr = [];
    array.map(function (val) {
        var intVal = parseInt(val,10);

        if (!isNaN(intVal)) {
            //console.log(intVal);
            newArr.push(intVal);
        }
        newArr.push(val);
        //console.log(val);
    });
    console.log(newArr);
    var largestString = 0;
    var largestStringName = "";
    var largestNumber = 0;

    for (var m = 0; m < newArr.length; m++){
        if (newArr[m].length > largestString) {
            largestString = newArr[m].length;
            largestStringName = newArr[m];
            //console.log(largestStringName);
        }
        else if (newArr[m]>largestNumber) {
            largestNumber = newArr[m];
            //var newNum = parseInt(largestNumber);
            //console.log(newNum);
            //console.log(largestNumber);
        }
    }

    //console.log(array);
    //console.log(largestString);
    //console.log(largestStringName);
    //console.log(largestNumber);
    //console.log(newNum);
    console.log(Object.keys(newArr));

    if (largestString > largestNumber) {
        //console.log(largestStringName);
        return largestStringName
    }
        console.log(largestNumber);
        return largestNumber;
    //console.log(array);
    return array;
}

function result () {
    var results = document.getElementById('results');
    results.appendChild(element("p", arrayOfStrings()));
}
