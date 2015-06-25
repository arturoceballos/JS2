function element(elementType, text) {
    var newElement = document.createElement(elementType);
    newElement.textContent = text;

    return newElement;
}

function result () {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;

    function largest () {
        //var input1IsNaN = isNaN(input1),
        //    input2IsNaN = isNaN(input2);

        //if (input1IsNaN && input2IsNaN) {
        //    return input1.length > input2.length ? input1 : input2;
        //} else if (input1IsNaN && !input2IsNaN) {
        //    return input1.length > parseInt(input2, 10) ? input1 : input2;
        //} else if  (!input1IsNaN && input2IsNaN) {
        //    return input2.length > parseInt(input1, 10) ? input2 : input1;
        //} else {
        //    return parseInt(input1, 10) > parseInt(input2, 10) ? input1 : input2;
        //}

        if (isNaN(input1) && isNaN(input2)) {
            if (input1.length > input2.length) {
                return input1;
            }
            return input2;
        }
        else if (isNaN(input1) && !isNaN(input2)) {
            if (input1.length > parseInt(input2)) {
                return input1;
            }
                return input2;
        }
        else if (!isNaN(input1) && isNaN(input2)) {
            if (parseInt(input1) > input2.length) {
                return input1;
            }
            return input2;
        }
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

    var results = document.getElementById('results');
    results.appendChild(element("p", largest()));
}

console.log(result());
