// When function refer to a variable defined in its outer scopes – it is
// called a closure:

function init() {
    var name = "Puki"
    function displayName() {
        alert(name)
    }
    displayName()
}
init()

// The function defined in the closure 'remembers' the
// environment in which it was created in. 

//* closure = function + outer context

//* Common Closures pitfall
// a common problem with closures occurres when they were
// created inside a loop
// A possible solution is using a function that returns a function:
function getFunc(m) {
    return function () { alert(m) }
}
for (var i = 1; i <= 3; i++) {
    document.getElementById("btn" + i).onclick = getFunc(i)
}

//* Again: The Closures pitfall
for (var i = 0; i < 3; i++) {
    var link = document.createElement("a")
    link.innerHTML = "Link " + i
    link.onclick = function () {
        alert(i)
    }
    document.body.appendChild(link)
}

// Remember: Closures store their outer variables “by reference”, not by value.

// Solution: Use IIFE
for (var i = 0; i < 3; i++) {
    var link = document.createElement("a")
    link.innerText = "Link " + i
    link.onclick = (function (num) {
        return function () {
            alert(num)
        }
    })(i)
    document.body.appendChild(link)
}

// Practical Solution: Just Use let
for (let i = 0; i < 3; i++) {
    var link = document.createElement("a")
    link.innerHTML = "Link " + i
    link.onclick = function () {
        alert(i)
    }
    document.body.appendChild(link)
}