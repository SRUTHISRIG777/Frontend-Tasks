// const URL="https://dummyjson.com/quotes";
// fetch(URL).then(res=>res.json()).then(
//     data=>{
//         for(i=0;i<data.quotes.length;i++){
//             console.log(data.quotes[i].quote)
//         }
//     }
// )

// const URL="https://dummyjson.com/todos"
// fetch(URL).then(res=>res.json()).then(data=>{
//     console.log(data.todos);
//     for(i=0;i<data.todos.length;i++){
//         console.log(data.todos[i].userId)
//     }
//     console.log(data)
// })

// const URL="https://jsonplaceholder.typicode.com/photos"
// fetch(URL).then(res=>res.json()).then(data=>{
//     for( i=0;i<data.length;i++){
//         console.log(data[i].title)
//     }

// })
// const URL="https://pokeapi.co/api/v2/pokemon/ditto"
// fetch(URL).then(res=>res.json()).then(data=>{
   //console.log(data.abilities);
//    for(i=0;i<data.abilities.length;i++){
//     console.log(data.base_experience)
//    }
//console.log(data.abilities[0].slot)
// console.log(data.forms[0].name)
// })

const URL="https://pokeapi.co/api/v2/pokemon/ditto";
fetch(URL).then(res=>res.json()).then(data=>{
   console.log(data);
  for(i=0;i<data.held_items.length;i++){
   for(j=0;j<data.held_items[i].version_details.length;j++){
      console.log(data.held_items[i].version_details[j].version.name);
   }
   
  }
   
  
   
  
});