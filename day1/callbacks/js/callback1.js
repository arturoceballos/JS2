function delayedName(name, cb) {
    var nameStr = "Your Name Is: " + name;

    setTimeout(function () {
        cb(nameStr);
    }, 3000);
}


function handleName(name) {
    console.log(name, 'here');
}

delayedName('Greg', handleName);