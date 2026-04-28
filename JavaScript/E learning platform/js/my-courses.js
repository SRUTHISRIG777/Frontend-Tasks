
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let enrollments = JSON.parse(localStorage.getItem("enrollments")) || {};
let courses = JSON.parse(localStorage.getItem("courses")) || [];
let progress = JSON.parse(localStorage.getItem("progress")) || {};


if(!currentUser){
  alert("Please login first");
  window.location.href = "login.html";
}


let userCourses = enrollments[currentUser.email] || [];
let userProgress = progress[currentUser.email] || {};

let list = document.getElementById("list");


userCourses.forEach(id => {
  let course = courses.find(c => c.id == id);

  if(course){

    let isCompleted = userProgress[id];
    let percent = isCompleted ? 100 : 0;

    let status = isCompleted ? " Completed" : "In Progress";

    list.innerHTML += `
      <div class="course">
        <h3>${course.name}</h3>

        <div class="progress-bar">
          <div class="progress-fill" style="width: ${percent}%"></div>
        </div>

        <p>${percent}% Completed</p>
        <p>${status}</p>

        <button onclick="openCourse(${course.id})">Open</button>
      </div>
    `;
  }
});


function openCourse(id){
  window.location.href = "course.html?id=" + id;
}