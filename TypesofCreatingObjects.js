//Creation of object by using object litersl;
//2 using new keyword 
// 3 using function constructor
// 4 using classess
// 5 using Object.create();
// 6. using inheritence



const obj = {
    name:'madhu',
    age:23,
    place:'hoskote',
    printAge() {
        console.log(this.age);
    }
}


// using new keword 

const person = new Object();

person.age = 24;
person.name = 'mithun';

console.log(person.age  + " : " + person.name);


// by using the constructor functions 

function Student(name, age, grade) {
    this.name = name;
    this.age =age;
    this.grade = grade;
    this.display = function (){
        console.log(`My name is ${name} and iam ${age} years old , currently iam studying in ${grade}`);
        
    }
}
const student1 = new Student("madhu", 27, "hoskote");
student1.display();
const student2 = new Student("madhu mithun", 29, "kolathur");
student2.display();


// classes are used to create objects too


class Parent {

    constructor(age, name){
        this.age = age;
        this.name = name;
        this.print = function (){
console.log(`The name is ${name}  and age is ${age}`);


        }
    }
}

const p1 = new Parent(24, "jithin");
p1.print();


//by using Object.create();


const proto = {
    print(){
        console.log(`Hello ${this.name}`);
        
    }
}

const person4 = Object.create(proto);
person4.name = "Frank";
person4.print();
