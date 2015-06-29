var a = 1;
var b = 2;

function first () {
    var c = a+b;
    function second () {
        var d = c + 1;
    }
    function third () {
        var f = d + 1;
    }
}