//------------------------------------------------------------------------------------------
const strArrDuck = ['foo', 'poo', 'moo']
const strArr: Array<string> = ['foo', 'poo', 'moo']

const numArrDuck = [1, 2, 3]
const numArr: Array<number> = [1, 2, 3]

const prmStrDuck = Promise.resolve('hello!')
const prmStr: Promise<string> = Promise.resolve('hello!')

const prmNumDuck = Promise.resolve(3.14)
const prmNum: Promise<number> = Promise.resolve(3.14);

(async () => {
    const x = await prmStr
    const y = await prmNum
})();
// -------------------- The Identity -------------------------------------------------

// Generic function: T is a TYPE-ARG:
function identity<T>(arg: T): T {
    return arg
}

function mix<T1, T2>(arg1: T1, arg2: T2): T2 {
    return arg2
}

// Accept only Strings
// function identity(arg: string): string {
//     return arg;
// }
// let str = identity('10')

// Loose the type defense
// function identity(arg: any): any {
//    return arg;
// }
// const res = identity(34)


// Usually, the type param can be inferred:
var nn = identity(44)
var ss = identity('Samba')
// console.log('First letter: ' + ss.charAt(0))

var f = identity({ foo: () => console.log('ffffooo!') })
// var d = identity(new Date());


const rex = mix(7, 'Bamia')

// let txt = 'asd'
// // txt = 'aasdasd'
// const txt = 'asd'

//------------------------------------------------------------------------------------------
/* In this example, two instances of the Box class are created:*  box1 with a number value and box2 with a Date object.  */
class Box<T> {

    // TS Constructor Shortcut: 
    constructor(private val: T) {
    }

    put(x: T) {
        this.val = x
    }

    take(): T {
        return this.val
    }
}

const box1 = new Box<number>(20)
box1.put(18)
var n1 = box1.take()

const box2 = new Box<Date>(new Date())
var d1 = box2.take()