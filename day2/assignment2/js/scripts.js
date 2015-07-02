function main(){
    var input1Array = document.getElementById('input1').value.split(' ');
    var theLargestThing = findLargest(input1Array);
    var mySortedArray = sortArray(input1Array.slice());
    console.log(mySortedArray);
    /* This will show the biggest */
    var node1 = document.createElement("li");
    var node2 = document.createElement("li");

    var inputText = document.createTextNode(input1Array);

    /* This will show the biggest */
    //var biggestText = document.createTextNode(theLargestThing);
    var mySorted = document.createTextNode(mySortedArray);

    node1.appendChild(inputText);
    node2.appendChild(mySorted);

    document.getElementById("results").appendChild(node1);
    document.getElementById("results").appendChild(node2);
}

//This function will find the largest element in my array
function findLargest (myArray) {
    var theLargestThing = myArray[0];
    for ( i = 1; i < myArray.length; i++){
        theLargestThing = largestOfTwo(theLargestThing,myArray[i]);
    }
    return (theLargestThing);
}

//This function will sort my array based on what is largest
function sortArray (myArray) {

    //We are creating a storage array
    var sortedArray = []

    //We want the max size of the array
    var myMaxSize = myArray.length
    for ( i = 0; i < myMaxSize; i++){
        var theLargestThing = myArray[0];

        //We call the largest of the two to find what's biggest
        for ( j = 0; j < myArray.length; j++){
            theLargestThing = largestOfTwo(theLargestThing,myArray[j]);
        }

        //Find the index of the biggest entry
        var index = myArray.indexOf(theLargestThing);

        //Remove the biggest value
        myArray.splice(index, 1);

        //Test prints to show what happens
        console.log(myArray);
        console.log("MyArray");

        //Add the biggest to our sorted array
        sortedArray.push(theLargestThing);
    }

    //Return our sortedArray
    return (sortedArray);
}

function largestOfTwo (input1, input2) {
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

