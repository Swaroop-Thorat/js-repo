const students= [
  {
    id:1,
    name:"Harsh",
    age:21,
    marks:85,
    course:"MERN"
  },
  {
    id:2,
    name:"Riya",
    age:20,
    marks:45,
    course:"Java"
  },
  {
    id:3,
    name:"Aman",
    age:22,
    marks:72,
    course:"Python"
  }
];


//Q1 : Show all students

students.forEach(ele=>{
    console.log(ele)
})

//Q2 : Add a new student

students.push(
    {
       id:4,
       name:"Swaroop",
       age:20,
       marks:95,
       course:"Java" 
    }
)

// Q3 : Remove student by ID

students.forEach((ele,idx)=>{
    if(ele.id === 1){
        students.splice(idx,1)
    }
})

// Q4 : Update Marks

students.forEach((ele,idx)=>{
    if(ele.id === 4){
        students.marks=97; 
    }
})

//Q5 : Update Course

students.forEach(ele=>{
    if(ele.id === 3){
        students.course="CPP"; 
    }
})

//Q6 : Search Student by Name

students.forEach(ele=>{
    if(ele.name === "Swaroop"){
        console.log(ele)
    }
})

//Q7 : Find Student by ID

students.forEach(ele=>{
    if(ele.id === 3){
        console.log(ele)
    }
})

//Q8 : Count Total Students

console.log("No of students:"+students.length)


//Q9 : Show Passed Students (marks >= 50)

const passed=students.filter(ele=>{
    return ele.marks>=50
}).map(ele=>{
    return ele.name
})
console.log("Passed:"+passed)

//Q10 : Show Failed students

const failed=students.filter(ele=>{
    return ele.marks<50
}).map(ele=>{
    return ele.name
})
console.log("failed:"+failed)

//Q11 : Get only students name

const names=students.map(ele=>{
    return ele.name
})

console.log(names);


//Q12 : Get total marks

const total = students.reduce((acc,ele)=>{
    return acc+ele.marks
},0)

console.log(total);

//Q13 : Get Average marks

let avg = students.reduce((acc,ele)=>{
    return acc+ele.marks
},0)
avg=avg/students.length
console.log(avg.toFixed(2));


//Q14 :  Check if Any Student Failed

let fails = students.some(ele=>{
  return ele.marks<50
})

if(fails){
    console.log("someone failed")
}
else{
    console.log("not a single student failed")
}

//Q15 : Check if Everyone Passed

let fail = students.every(ele=>{
  return ele.marks<50
})

if(!fail){
    console.log("someone failed")
}
else{
    console.log("not a single student failed")
}

// Q16 : Promise

function prom(){
    setTimeout(()=>{console.log("Loading Student Data")},3000)

    let pr=new Promise((res,rej)=>{
        if(students.length>0){
            res("Student Data Saved Successfully")
        }
        else{
            rej("No Student Data Found")
        }
    })

    pr
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

}

prom()