async function fetchData() {
    let res=await fetch("http://localhost:3000/products")
    
    try{
        if(!res.ok){
            throw new Error("somethong went wrong")
        }
        let data=await res.json();
        showData(data);
    }
    catch(error){
        console.log(error);
    }
    
}

function showData(data){
    let container=document.getElementById("container");
    data.forEach(element => {
        let item=document.createElement("div")
        item.innerHTML=`
        <img src='${element.image}'>
        <p>${element.name}</p>
        <p>${element.price}</p>
        <button>Add to Cart</button>
        `
        container.appendChild(item)
        
    });
}

document.addEventListener("DOMContentLoaded",fetchData)