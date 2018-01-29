const Elevator = require('./elevator.js');
const Person = require('./person.js');

let e = new Elevator();

e.start();
e.call(new Person("Jesus",3,2));
e.call(new Person("Alvaro",10,3));
e.call(new Person("Miguel",4,9));
e.call(new Person("Sergio",6,2));
e.call(new Person("Nacho",1,8));
e.call(new Person("Ana",5,10));



