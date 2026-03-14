 async function print(){
    let data=await fetch("http://localhost:3000/students");
    let json=data.json();
    console.log(json);
    


}
print();