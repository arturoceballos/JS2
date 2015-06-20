function element(elementType, text) {
    var newElement = document.createElement(elementType);
    newElement.textContent = text;

    return newElement;
}

function result () {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;

    function largest () {

        if (isNaN(input1) && isNaN(input2)) {
            if (input1.length > input2.length) {
                return input1;
            }
            else {
                return input2;
            }
        }
        else if (isNaN(input1) && !isNaN(input2)) {
            if (input1.length > parseInt(input2)) {
                return input1;
            }
            else {
                return input2;
            }
        }
        else if (!isNaN(input1) && !isNaN(input2)) {
            if (parseInt(input1) > parseInt(input2)) {
                return input1;
            }
            else {
                return input2;
            }
        }
        else {
            return input2;
        }
    }

    var results = document.getElementById('results');
    var p = document.createElement("p");
    document.body.appendChild(p);
    p.appendChild(element("p", largest()));
}

console.log(result());
