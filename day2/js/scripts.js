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
    //for (var i = 0; i < array.length; i++) {
    //    if (array[i].length > largestString) {
    //        largestString = array[i].length;
    //        largestStringName = array[i];
    //    }
    //}
    //
    //for (var n = 0; n < array.length; n++) {
    //    if (array[n]>largestNumber) {
    //        largestNumber = array[n];
    //        var newNum = parseInt(largestNumber);
    //    }
    //}

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

    //for (var m = 0; m <)

    //console.log(array);
    //console.log(largestString);
    console.log(largestStringName);
    //console.log(largestNumber);
    console.log(newNum);
    return array;
}

function result () {
    //var array = document.getElementById('input1').value.split(' ');
    ////var input1 = document.getElementById('input1').value;
    ////var input2 = document.getElementById('input2').value;
    //console.log(array);

    //function largest () {
    //
    //    if (isNaN(input1) && isNaN(input2)) {
    //        if (input1.length > input2.length) {
    //            return input1;
    //        }
    //        else {
    //            return input2;
    //        }
    //    }
    //    else if (isNaN(input1) && !isNaN(input2)) {
    //        if (input1.length > parseInt(input2)) {
    //            return input1;
    //        }
    //        else {
    //            return input2;
    //        }
    //    }
    //    else if (!isNaN(input1) && !isNaN(input2)) {
    //        if (parseInt(input1) > parseInt(input2)) {
    //            return input1;
    //        }
    //        else {
    //            return input2;
    //        }
    //    }
    //    else {
    //        return input2;
    //    }
    //}

    var results = document.getElementById('results');
    var p = document.createElement("p");
    document.body.appendChild(p);
    p.appendChild(element("p", arrayOfStrings()));
}

console.log(result());
