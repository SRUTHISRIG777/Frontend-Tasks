function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let users=JSON.parse(localStorage.getItem("users"))||[];
    let user=users.find(u=>
        u.email===email && u.password===password);
    if(user){
        alert("login successfull")
        localStorage.setItem("currentUser",JSON.stringify(user));
        if(user.role==="student"){
            window.location.href="student_dashboard.html";
        }
        else{
            window.location.href="instructor.html"
        }
    }
    else{
        alert("invalid credentials!");
    }

}