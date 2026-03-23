// async function fetchData() {
//     let res=await fetch("https://dummyjson.com/todos");
//     let data=await res.json();
//     getData(data);
    
// }
// function getData(data){
//     let div=document.getElementById("container");
//     data.todos.forEach(element => {
//          let p=document.createElement("p");
//          p.innerHTML=`<h5>id:${element.id}</h5>
//                        <p>todo:${element.todo}</p>
//                         <p>user id:${element.userId}</p>`
//         div.append(p);
//        // console.log(element.id);
        
//     });
//    // console.log(data);
// }
// fetchData();

// async function fetchData() {
//     let res=await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//     let data=await res.json();
//     getData(data);
    
// }
// function getData(data){
//     console.log(data);
//     let div=document.getElementById("container")
//     data.held_items.forEach(element => {
//         console.log(element);
//         //console.log(element.item.name);
//         element.version_details.forEach(arr=>{
//             //console.log(arr.version.name)
//             let p=document.createElement("p");
//             p.innerHTML=`<p>${arr.version.name}</p>`
//             div.append(p);

//         })

        
//     });
// }
// fetchData();


//3
// async function fetchData() {
//     let res=await fetch("https://jsonplaceholder.typicode.com/photos");
//     let data=await res.json();
//     getData(data);
    
// }
// function getData(data){
//     console.log(data)
//     let div=document.getElementById("container");
//     // data.array.forEach(element => {

        
//     // });
//     for( i=0;i<100;i++){
//        //console.log(data[i].id); 
//        //console.log(data[i].title)
//        let p=document.createElement("p");
//        p.innerHTML=`<p>id:${data[i].id}</p>
//                      <p>title:${data[i].title}</p>`
//         div.append(p);

//     }

// }
// fetchData();



//4
async function fetchData(){
    let res=await fetch("https://dummyjson.com/quotes")
    let data= await res.json();
    getData(data);
}
function getData(data){
    console.log(data)
    console.log(data.quotes)
    let div=document.getElementById("container")
    data.quotes.forEach(element => {
        console.log(element.id)
        let p=document.createElement("p");
        p.innerHTML=`<p>id:${element.id}</p>
                      <p>quote:${element.quote}</p>`
        
        div.append(p);
    });
}
fetchData();