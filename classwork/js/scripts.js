var array = ['Arturo', 'Ceballos', '21'];
var input = document.getElementById('input').value;

function newElement() {
    var results = document.getElementById('results');
    var p = document.createElement('p');
    p.innerHTML = array;
    results.appendChild(p);
}

function element() {
    var results = document.getElementById('element');
    var p = document.createElement('p');
    p.innerHTML = input;
    results.appendChild(p);
}