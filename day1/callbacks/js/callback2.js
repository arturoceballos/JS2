function delayedName(name, cb) {
    var nameStr = "Your Name Is: " + name;

    setTimeout(function () {
        cb(nameStr);
    }, 1000);
}

delayedName('Greg', function (name) {
    console.log(name);
});