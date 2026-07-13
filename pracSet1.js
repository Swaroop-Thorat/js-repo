//Q1 create a variable of type string and try to add a number to it

var str="HTML"
str+=5;
console.log(str)

//Q2 identify the datatype of str after adding
console.log(typeof(str))

//Q3 create a const object in js , can you change it to hold a number afterwords?

const obj={
  name:"Swaroop",
  age:20
  }

  obj.name="Ranveer"
  console.log(obj)
  //ans:yes

 //Q4 write a js program to create a word meaning dictionary of 3 words
 const dict={
  "Fernweh":" A German concept describing a strong desire or ache to travel to distant places—a sort of 'farsickness' as opposed to homesickness.",
  "Sonorous":" Producing a deep, rich, and resonant sound, often used to describe a powerful voice or a loud musical instrument.",
  "Petrichor":"The pleasant, earthy scent that frequently accompanies the first rain after a prolonged period of dry, warm weather."
 }

 console.log(dict["Petrichor"])