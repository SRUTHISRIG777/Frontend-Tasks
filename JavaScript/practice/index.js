// fetch("http://localhost:3000/students/1",{
//     method:"DELETE",
    // headers:{
    //     "Content-Type":"application/json"
    // },
    // body:JSON.stringify({
    //     id:4,
    //     name:"mahi",
    //     br
    // anch:"CSE"
    // })



// }).then(res=>
// {
//     if(res.status===200){
//         //throw new Error("delete failed");
    
//     console.log("deleted successfully");
//     }
// }
// ).catch(error=>console.log(error))
// .then(data=>{
//     
//   //  console.log("deleted",data);
// })


const URL="http://localhost:3000/students"
let option={
    "method":"DELETE"
//     "headers":{
//         "content-Type":"application/json"}

 }
//  for( i=1;i<3;i++){
//     fetch(`http://localhost:3000/students/${i}`,option).then(res=>{
//         if(res.ok){
//             console.log("success")
//         }
//         else{
//             console.log("failed");
//         }
//     })

//  }

fetch("http://localhost:3000/students")
.then(res=>res.json())
.then(data=>{
    for(i=0;i<data.length;i++){
        fetch(`http://localhost:3000/students/${data[i].id}`,{"method":"DELETE"})
        .then(re=>{
            if(re.ok){
                console.log("success")
            }
            else{
                console.log("failed")
            }
        })
    }
})
// let data=[
//     {
//         "id":"5",
//         "name":"kushi"
//     },
//     {
//         "id":"6",
//         "name":"jessy"
//     }
// ]
// for(i=0;i<data.length;i++){
//     option.body=JSON.stringify(data[i]);
//     fetch(URL,option).then(res=>{
//         if(res.ok){
//             console.log("success")
//         }
//         else{
//             console.log("failed");
//         }
//     })
// }