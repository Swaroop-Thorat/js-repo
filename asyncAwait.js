////const hello = async function(){
////  return "Hello"
////};
////
////console.log(hello());
////
//const task1 = new Promise((res, rej)=>{
//    setTimeout(()=>{
//        res("promise resolved here")
//    }, 10000)
//});
//
//const task2 = new Promise((res, rej)=>{
//    setTimeout(()=>{
//        res("promise2 resolved here")
//    }, 5000)
//});
//
//async function handle() {
//    console.log("world")
//    const val = await task1;
//    console.log("hello");
//
//    const val1 = await task2;
//    console.log("t2");
//}
//handle()
//
//function getData() {
//    task1.then((res)=>{
//        setTimeout(()=>{
//
//        },6000);
//        console.log(res);
//    })
//
//    task2.then((res)=>{
//        setTimeout(() => {
//
//        }, 6000);
//        console.log(res);
//    })
//
//}
//getData()

const url = "https://github.com/maneranveer111"

async function checkAPI() {

    const data = await fetch(url)
    // fetch()=>Response.json()=>result

    const jsonFormat = await data.json()
    console.log(jsonFormat);
}
checkAPI()