//Function to create elements on page with content we choose
function element(elementType, text) {
    var newElement = document.createElement(elementType);
    newElement.textContent = text;

    return newElement;
}

function result () {
    //Find input values
    var input1 = document.getElementById('input1').value;
    console.log(input1);
    var input2 = document.getElementById('input2').value;
    console.log(input2);

    function largest () {
        //Check if input values = 2 strings. If so, return largest string
        if (isNaN(input1) && isNaN(input2)) {
            if (input1.length > input2.length) {
                return input1;
            }
            return input2;
        }
        //Check if one input is string and one is a number. If one of the values is a number convert to integer.
        //Compare string length to integer.
        else if (isNaN(input1) && !isNaN(input2)) {
            if (input1.length > parseInt(input2)) {
                return input1;
            }
                return input2;
        }
        //Same as above but arranged the opposite.
        else if (!isNaN(input1) && isNaN(input2)) {
            if (parseInt(input1) > input2.length) {
                return input1;
            }
            return input2;
        }
        //If both values = number, convert values to integer. Compare both integers and find largest one.
        else if (!isNaN(input1) && !isNaN(input2)) {
            if (parseInt(input1) > parseInt(input2)) {
                return input1;
            }
                return input2;
        }
        else {
            return input2;
        }
    }

    //Create the element to display the answer in the results div using the element function created above.
    function element(elementType, text) {
        var newElement = document.createElement(elementType);
        newElement.textContent = text;

        return newElement;
    }

    var results = document.getElementById('results');
    results.appendChild(element("p", largest()));

    ////OR create function using ternary statements like below to keep code DRY
    //
    //function largest() {
    //    var input1IsNaN = isNaN(input1),
    //        input2IsNaN = isNaN(input2);
    //
    //    if (input1IsNaN && input2IsNaN) {
    //        return input1.length > input2.length ? input1 : input2;
    //    } else if (input1IsNaN && !input2IsNaN) {
    //        return input1.length > parseInt(input2, 10) ? input1 : input2;
    //    } else if  (!input1IsNaN && input2IsNaN) {
    //        return input2.length > parseInt(input1, 10) ? input2 : input1;
    //    } else {
    //        return parseInt(input1, 10) > parseInt(input2, 10) ? input1 : input2;
    //    }
    //}
    //
    ////Create the element to display the answer in the results div using the element function created above.
    //var results = document.getElementById('results');
    //results.appendChild(element("p", largest()));
}

console.log(result());
