class Person {
    #id;
    #name;
    constructor(id, name) {
            this.#id = id;
            this.#name = name;
    }
    getId() {
            return this.#id;
    }
    getName() {
            return this.#name;
    }
    toString() {
            return `id: ${this.#id}; name: ${this.#name};`;
    }
}
const person = new Person(123, 'Moshe');
console.log(`person is ${person}`);
class Employee extends Person {
    #salary;
    constructor(id, name, salary) {
            super(id, name); //call the constructor of the class Person
            this.#salary = salary;
    }
    computeSalary() {
            return this.#salary;
    }
    toString() {
            return super.toString() + ` salary: ${this.computeSalary()}`;
    }
}
const person2 = new Employee(124, "Sara", 5000);
console.log(`person2 is ${person2}`);
console.log(typeof(person2)); // just object
console.log(person2.constructor.name); // only this way JS allow getting constructor name
class Child extends Person {
    #kindergarden;
    constructor(id, name, kindergarden) {
         super(id, name);
         this.#kindergarden = kindergarden;   
    }
    getKindergarten() {
            return this.#kindergarden;
    }
    toString() {
            return `${super.toString()} kindergarden: ${this.#kindergarden}`;
    }
}
const person3 = new Child(125, 'Yakob', 'Shalom');
console.log(`person3 is ${person3}`);

class WageEmployee extends Employee {
    #hours;
    #wage;
    constructor(id, name, salary, hours, wage) {
            super(id, name, salary);
            this.#hours = hours;
            this.#wage = wage;
    }
    computeSalary() {
            return super.computeSalary() + this.#hours * this.#wage;
    }
    

}
const person4 = new WageEmployee(126, 'Asaf', 1000, 10, 100);
console.log(`person4 is ${person4}`);

   



