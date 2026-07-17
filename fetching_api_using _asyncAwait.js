async function get(){
    try{
        const res = await fetch("https://dummyjson.com/recipes");
    
        const data = await res.json();
    
        console.log(data.recipes[0].name)
    }
    catch(err){
        console.log("Fetch Failed")
    }
}

get()