// --------------------------------- Function Types -------------------------------------------------------------------
interface SearchFunc {
    (source: string, subString: string): boolean;
}

var mySearch: SearchFunc;
mySearch = (src: string, sub: string) => {
    var result = src.search(sub);
    return (result !== -1);
}

console.log('Found? ', mySearch('puki', 'k'))


// --------------------------------- Array Types ---------------------------------------------------------------------
interface StringArray {
    [index: number]: string;
}

// var myArray: StringArray;
var myArray: string[];
myArray = ["Bob", "Fred"];

// --------------------------------- Hybrid Types ------------------------------------------------------------
interface Counter {
    (start: number): void;
    interval: number;
    reset(): void;
}

// This is a weird object we got from somewhere
var func: any = (s: number): void => { }
func.interval = 9
func.reset = () => null

var c1: Counter = func

// From here on, we get TS help:
// c1(10);
// c1.reset();
// c1.interval = 5.0;
// console.dir(c1);

// --------------------------------- Map Example ---------------------------------

// type StringMap = {
//     [key: string]: number
// }

interface StringMap {
    [key: string]: number
}

var obj: StringMap = {}
obj.a = 100
obj.b = 200

// obj['asdasd'] = 500
// obj.c = '300'
// describe the param structure explicitly
function printLabel1(labelledObj: { label: string, size: number }) {
    console.log(labelledObj.label.toUpperCase())
}

var res : number = sum(6, 8)

function sum(x :number, y : number) : number{
    return x + y
}

// var myObj = { size: 10, label: "This is a label", nunu: true };
// printLabel1(myObj);
// // printLabel1('Bla');

// function printLabelToo(p: { label: string, size: number }) {
    
//     console.log(p.label);
// }

// Switch to an interface:
interface LabelledValue {
    label: string
    size: number
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}

function printLabelToo(p: LabelledValue) {
    console.log(p.label)
}

// printLabel(myObj);
// printLabelToo(myObj)


