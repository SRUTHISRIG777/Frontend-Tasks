function register(){
    let name=document.getElementById("name").value;
     let email=document.getElementById("email").value;
     let password=document.getElementById("password").value;
     let role=document.getElementById("role").value;
      let users=JSON.parse(localStorage.getItem("users"))||[];
      users.push({name,email,password,role});
      localStorage.setItem("users",JSON.stringify(users));
      alert("registered successfully!");
      window.location.href="../login.html"
    

}