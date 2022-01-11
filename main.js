function logger(message) {
    console.log(message);
}
var messageToShow = 'Hello World';
logger(messageToShow);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
    color[color["Purple"] = 3] = "Purple";
})(color || (color = {}));
;
var backgroundColor = color.Red;
console.log(backgroundColor);
