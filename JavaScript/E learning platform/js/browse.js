// let courses = JSON.parse(localStorage.getItem("courses")) || [];

// let list = document.getElementById("courseList");

// courses.forEach(course => {
//   list.innerHTML += `
//     <div class="course">
//       <h3>${course.name}</h3>
//       <p>${course.description}</p>
//       <button onclick="viewCourse(${course.id})">View</button>
//       <button onclick="enroll(${course.id})">Enroll</button>
//     </div>
//   `;
// });

// function viewCourse(id){
//   window.location.href = "course.html?id=" + id;
// }
// function enroll(courseId){
//   let currentUser = JSON.parse(localStorage.getItem("currentUser"));

//   if(!currentUser){
//     alert("Please login first");
//     return;
//   }

//   let enrollments = JSON.parse(localStorage.getItem("enrollments")) || {};

//   let userCourses = enrollments[currentUser.email] || [];

//   if(userCourses.includes(courseId)){
//     alert("Already Enrolled!");
//     return;
//   }

//   userCourses.push(courseId);
//   enrollments[currentUser.email] = userCourses;

//   localStorage.setItem("enrollments", JSON.stringify(enrollments));

//   alert("Enrolled Successfully!");
// }



let list = document.getElementById("courseList");


function loadCourses(){
  let courses = JSON.parse(localStorage.getItem("courses")) || [];

  list.innerHTML = ""; 

  if(courses.length === 0){
    list.innerHTML = "<p>No courses available</p>";
    return;
  }

  courses.forEach(course => {

   
    if(!course || !course.id) return;

    list.innerHTML += `
      <div class="course">
        <h3>${course.name}</h3>
        <p>${course.description}</p>

        <button onclick="viewCourse(${course.id})">View</button>
        <button onclick="enroll(${course.id})">Enroll</button>
      </div>
    `;
  });
}


function viewCourse(id){
  let courses = JSON.parse(localStorage.getItem("courses")) || [];

  let course = courses.find(c => c.id == id);

  if(!course){
    alert("Course not found or deleted!");
    loadCourses(); // refresh UI
    return;
  }

  window.location.href = "course.html?id=" + id;
}


function enroll(courseId){
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if(!currentUser){
    alert("Please login first");
    window.location.href = "login.html";
    return;
  }

  let courses = JSON.parse(localStorage.getItem("courses")) || [];
  let courseExists = courses.find(c => c.id == courseId);

 
  if(!courseExists){
    alert("Course no longer available!");
    loadCourses();
    return;
  }

  let enrollments = JSON.parse(localStorage.getItem("enrollments")) || {};
  let userCourses = enrollments[currentUser.email] || [];

  if(userCourses.includes(courseId)){
    alert("Already Enrolled!");
    return;
  }

  userCourses.push(courseId);
  enrollments[currentUser.email] = userCourses;

  localStorage.setItem("enrollments", JSON.stringify(enrollments));

  alert("Enrolled Successfully!");
}


loadCourses();