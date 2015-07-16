function $(selector){
    var coolio ={}

    coolio.html = function(){
        return document.querySelector(selector).innerHTML;
    }
    coolio.color = function(color){
        document.querySelector(selector).style.background = color
        return coolio;
    }
    return coolio;
}