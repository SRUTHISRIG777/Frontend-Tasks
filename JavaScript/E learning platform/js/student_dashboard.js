function goBrowse(){
  window.location.href = "browse.html";
}

function logout(){
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}
function goMyCourses(){
  window.location.href = "my-courses.html";
}