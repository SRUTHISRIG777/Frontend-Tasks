async function fetchData(){
    let res=await fetch("http://localhost:3000/products")
   
    //console.log(data); 
    try{
        if(!res.ok){
            throw new Error("something went wrong")
        }
         let data=await res.json()
         showData(data);

    }
    catch(error){
        console.log(error);
    }
}
//fetchData();
function showData(data){
    // let container=document.getElementById("container");
    // let item=document.createElement("div")

    // item.innerHTML=    data.map((products)=>{
    //     return `
    //     <p>id:${products.id}</p>
    //     <p>name:${products.name}</p>
    //     <img src="${products.image}">
    //     <p>price:${products.price}</p>
    //     <button id='delbtn${products.id}'>DELETE</button>
    //     <button id='editbtn${products.id}'>EDIT</button>
        
    //     `
        
    //     }).join("")

        // container.appendChild(item)

        // data.forEach(product=>{
        //     let delbtn=document.getElementById(`delbtn${product.id}`);
        //     let editbtn=document.getElementById(`editbtn${product.id}`);
        //     delbtn.onclick=()=>{
        //         //console.log("deleted successfully")
        //         deleteData(product.id);
        //     }
        //     editbtn.onclick=()=>{
        //         //console.log("edited successfully")
        //         editData(product.id);
        //     }
        // })
          let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; // clear old data

    data.forEach(product => {
        let row = document.createElement("tr");

        row.innerHTML = `
            
            <td>${product.name}</td>
            <td><img src="${product.image}" width="60"></td>
            <td>₹ ${product.price}</td>
            <td>
                <button id="editbtn${product.id}">Edit</button>
                <button id="delbtn${product.id}">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);

        // button actions
        document.getElementById(`delbtn${product.id}`).onclick = () => {
            deleteData(product.id);
        };

        document.getElementById(`editbtn${product.id}`).onclick = () => {
            editData(product.id);
        };
    });



    
    
}
async function deleteData(id) {
    //console.log("deleted successfully")
    let res=await fetch(`http://localhost:3000/products/${id}`,{"method":"Delete"})
    if(res.ok){
        alert("item deleted successully")
    }
    else{
        console.log("not deleted")
    }
    
}
async function editData(id) {
    //console.log("deleted successfully")
    let proId=document.getElementById("id");
    let name=document.getElementById("name");
    let image=document.getElementById("image");
    let price=document.getElementById("price")
    let res=await fetch(`http://localhost:3000/products/${id}`)
    let data=await res.json();

    proId.value=data.id;
    name.value=data.name;
    image.value=data.image;
    price.value=data.price;
   
   
    
}
async function saveData() {
    let id=document.getElementById("id").value;
    let name=document.getElementById("name").value;
    let image=document.getElementById("image").value;
    let price=document.getElementById("price").value;
    let obj={
        "name":name,
        "image":image,
        "price":price
    };
    let method=id?"PATCH":"POST";
    let URL=id?`http://localhost:3000/products/${id}`:"http://localhost:3000/products";
    let res=await fetch(URL,{
      "method":method,
      "headers":{
        "content-type":"application/json"
      },
      "body":JSON.stringify(obj)

    })
    if(res.ok){
        alert("data updated successfully")
    }

    
}
document.addEventListener("DOMContentLoaded",fetchData)
