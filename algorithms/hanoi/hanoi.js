function hanoi(n, from, to, via) {
    if (n == 0) return
    hanoi(n - 1, from, via, to)
    moveDisk(from, to)
    hanoi(n - 1, via, to, from)
}

function moveDisk(from, to) {
    console.log(`Moving a Disk from: ${from} to ${to}`);
}
// http://towersofhanoi.info/Animate.aspx