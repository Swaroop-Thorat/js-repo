class Greeter{
  constructor(name){
    this.name=name;
  }

  greet(){
    console.log("Hello "+ this.name);
  }
}

const person1=new Greeter("Swaroop");
const person2=new Greeter("Ranveer");
const person3=new Greeter("Prathamesh");

person1.greet();
person2.greet();
person3.greet();