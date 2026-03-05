const URL="http://localhost:3000/students/7";
let options={
    "method":"DELETE",
   
}
fetch(URL,options).then(res=>{
    if(res.ok){
        console.log("success ");
    }else{
    
        console.log("!success");
    }
    
})
