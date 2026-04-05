
function getData(){
    let name=document.getElementById("name").value;
   

    fetchData(name);

}

async function fetchData(id){
    let res=await fetch(`https://www.omdbapi.com/?s=${id}&apikey=705ec225`);
    let data=await res.json();
    console.log(data);
    let container=document.getElementById("container");
    container.innerHTML="";
    if(!res.ok){
        container.innerHTML="<p>no movies fiund</p>";
        return;
    }
   data.Search.forEach(element => {
    let card=document.createElement("div");
    card.innerHTML=`
    <img src='${element.Poster}' width="150">
    <p>title:${element.Title}</p>
    <p>year:${element.Year}</p>
    <button onclick="getDetails('${element.imdbID}')">View Details</button>
    
    `
    container.append(card);



    
   });
}
async function getDetails(id) {
    let res=await fetch(`https://www.omdbapi.com/?i=${id}&apikey=705ec225`);
    let data=await res.json();
   // console.log(data);
    alert(`
Title: ${data.Title}
Rating: ${data.imdbRating}
Actors: ${data.Actors}
Plot: ${data.Plot}
        
        
        `)
    
}

