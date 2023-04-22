var monster = { name: "Ezra", power: 7, name: "sss" }
var p = monster.puwer;

function foo(x, x) {
    this.x = x;
}

foo.prototype.calc = function () {
    return x * 8;
}

function askHim(quest) {
    var ans = confirm(quest);
    var viewAns = document.getElementByID('ans');
    viewAns.innerHTML = ans;
}

function initGame() {
    var now = Date().getTime();
    var abTest = Math.random > 0.5 ? 'caseA' : 'caseB';
}

document.onLoad = initGame();
var found = [0, 7, 9, 6].some(function (item) {
    return item == 9;
})

// did you mean mousedown?
document.addEventListener('keydown', function (event) {
    console.log(event.clientX);
})