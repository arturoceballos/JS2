var array = ['Arturo', 'Ceballos', '21'];

function newElement() {
    var results = document.getElementById('results');
    var p = document.createElement('p');
    p.innerHTML = array;
    results.appendChild(p);
}
