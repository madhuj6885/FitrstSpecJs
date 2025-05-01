const car = {
    name:'skoda',
    color:'red',
    price:25000
};

console.log(car["color"]);
delete car.name;
console.log(car.name);
car.model = "2006";
console.log(car.model);
console.log(Math.max.apply(null, [2, 5, 7, 2, 8, 9]));


const person = {
    fName:"",
    lName:"",
    fullName: function(){
        console.log(`${this.fName} : ${this.lName}`);
        
    }

}

const person1 = {
    fName:"Smith",
    lName:"Misth"
}

let fullName = person.fullName.bind(person1);
console.log(fullName());
