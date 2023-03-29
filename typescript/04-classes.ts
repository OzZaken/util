class Person {
    private name: string
    public age: number
    protected birthDay: string

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log('Hello ' + this.name + '!')
    }

}

const popo = new Person('yossi', 30)// popo.

// TS Constructor Shortcut
class Person1 {
    constructor(private name: string, public age: number) { }

    sayHi() {
        console.log(this.name + ' saying hi')
    }

}

var p = new Person('Arik', 23)
console.log(p)
p.sayHi()

// name is private:
// p.name = 'Baba'

p.age = 900

var p1 = new Person1('Bubu', 78)
console.log(p1)
p1.sayHi()