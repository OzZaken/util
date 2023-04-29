function onInit() { }

// todo: build a "Promise Based" dialog modal (Like SWAL)
onRemoveAll()

var keepResolve

function pnUserDecision(userDecision) {
    console.log('userClick:', userDecision);
    keepResolve(userDecision)
    document.querySelector('modal').hidden = true
}

function askUser() {
    document.querySelector('modal').hidden = false
    return new Promise((resolve, reject) => {
        keepResolve = resolve
    })
}

function onRemoveAll() {
    askUser().then(userDecision => console.log('userDecision:',userDecision))
}