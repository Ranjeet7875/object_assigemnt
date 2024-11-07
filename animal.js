class Animal {
    constructor(noOfLegs, vegetarian) {
      this.noOfLegs = noOfLegs;
      this.vegetarian = vegetarian;
    }
  
    eat() {
      console.log("Eating...", this.noOfLegs);
    }
  
    static makeSound() {
      console.log("Animals make sounds.");
    }
    greet(){
        console.log("Hi,I have ",this.noOfLegs)
    }
  }

let aniaml=new Animal(4,true)
aniaml.eat()
aniaml.greet()
Animal.makeSound(); 
  