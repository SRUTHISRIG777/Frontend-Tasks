async function fetchData() {
    let res=await fetch("http://localhost:3000/register");
    try{
        if(!res.ok){
            throw new Error("somethong went wrong")
        }
        let data=await res.json();
        
        //console.log(data);
    }
    catch(error){
        console.log(error);
    }
    
}
async function sendData(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let obj={
        "name":name,
        "email":email,
        "password":password
    }
    let res=await fetch("http://localhost:3000/register",{
        "method":"POST"
        ,
         "headers":{
        "content-type":"application/json"
      },
      "body":JSON.stringify(obj)

    
    });
    if(res.ok){
        alert("registred successfully")
    }

}


fetchData();