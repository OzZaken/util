function towerOfHanoi(
    numDisks: number,
    from: string,
    to: string,
    via: string
) {

    if (numDisks === 1) {
        console.log(`Move disk 1 from rod ${from} to rod ${to}`)
        return
    }

    towerOfHanoi(numDisks - 1, from, via, to)

    console.log(`Move disk ${numDisks} from rod ${from} to rod ${to}`)

    towerOfHanoi(numDisks - 1, via, to, from)
}

const numDisks = 3
towerOfHanoi(numDisks, "A", "C", "B")