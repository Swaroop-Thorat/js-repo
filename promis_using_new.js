const prom=new Promise((res,rej)=>{
    let valid=false
    if(valid){
        res("valid entry");
    }
    else{
        rej("Invalid entry");
    }
})

prom
 .then(res=>console.log(res))
 .catch(error=>console.error(error));