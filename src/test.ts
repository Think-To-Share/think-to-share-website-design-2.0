interface HasBar {
    bar(): string;
}

class A implements HasBar {
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    bar(): string {
        return this.name;
    }
}

class B {
    constructor(
        public name: string,
        public age: number
    ) {}

    box(): string {
        return this.name;
    }
    
}

function test(a: HasBar) {
    console.log(a.bar())
}

let b = new B('Rahul', 10);
let a = new A('Tulika', 20)

// test(b)
