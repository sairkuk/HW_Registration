class Parent{
    constructor(firstName, age){
        this.firstName = firstName
        this.age = age
        this.lastName = 'Kukri'
    }

    gretting(){
        console.log('Hey');
    }

    tellName(){
console.log(`My name is ${this.firstName} ${this.lastName}`);
    }

    tellAge(){
        console.log(`I m ${this.age} years old!`);
    }

    tellJobTitle(){
        if(this instanceof Child){
            console.log(`i dont have title gob`);
         }else{
            this.job = "QA";
            console.log(`My job title ${this.job}`);
         }
        
    }
}
class Child extends Parent{
    gretting(){
        console.log('Hey! this is new greeting');
    }
    goToScool(){
        console.log('I like to go to scool');
    }
}

const parent = new Parent ('Sasha', '36');
const child = new Child ('Emilia', '7')

parent.gretting();
parent.tellName();
parent.tellAge();
parent.tellJobTitle();


