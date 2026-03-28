// async function fetchData() {
//     let res=await fetch("http://localhost:3000/register")
//     try{
//         if(!res.ok){
//             throw new Error("something went wrong")
//         }
//         let data=await res.json();


//     }
//     catch(error){
//         console.log(error)
//     }
    
// }
async function verifyData(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let res=await fetch("http://localhost:3000/register")
    let data=await res.json();
    let isValid=false;
    data.forEach(obj => {
        if(obj.email==email&&obj.password==password){
            isValid=true;
        }
        
    });
    if(isValid){
        alert("login successfull");
         window.location.href = "user.html";
    }
    else{
        alert("invalid credentials")
    }
    

}