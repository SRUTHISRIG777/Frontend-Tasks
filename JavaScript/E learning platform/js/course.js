
// let params = new URLSearchParams(window.location.search);
// let id = params.get("id");


// let courses = JSON.parse(localStorage.getItem("courses")) || [];
// let currentUser = JSON.parse(localStorage.getItem("currentUser"));


// let course = courses.find(c => c.id == id);


// document.getElementById("title").innerText = course.name;
// document.getElementById("desc").innerText = course.description;


// document.getElementById("question").innerText =
//   course.assignment || "No assignment available";


// function convertToEmbed(url){
//   return url.includes("watch?v=") ? url.replace("watch?v=", "embed/") : url;
// }


// course.content.forEach(item => {
//   let video = convertToEmbed(item.video);

//   document.getElementById("content").innerHTML += `
//     <iframe width="400" height="250" src="${video}" allowfullscreen></iframe>
//     <p>${item.notes}</p>
//     <hr>
//   `;
// });


// let enrollments = JSON.parse(localStorage.getItem("enrollments")) || {};
// let userCourses = enrollments[currentUser.email] || [];

// let isEnrolled = userCourses.includes(parseInt(id));


// if(!isEnrolled){
//   // Disable assignment
//   document.getElementById("assignment").disabled = true;
//   document.getElementById("submitBtn").style.display = "none";
//   document.getElementById("assignmentMsg").innerText =
//     "Enroll to submit assignment.";

  
//   document.getElementById("completeBtn").style.display = "none";
//   document.getElementById("completeMsg").innerText =
//     "Enroll to track progress.";
// }


// function submitAssignment(){
//   let text = document.getElementById("assignment").value;

//   if(text === ""){
//     alert("Write something!");
//     return;
//   }

//   let assignments = JSON.parse(localStorage.getItem("assignments")) || {};

//   if(!assignments[id]){
//     assignments[id] = [];
//   }

//   assignments[id].push({
//     student: currentUser.email,
//     text,
//     time: new Date().toLocaleString(),
//     feedback: ""
//   });

//   localStorage.setItem("assignments", JSON.stringify(assignments));

//   alert("Assignment Submitted!");
//   document.getElementById("assignment").value = "";

//   loadFeedback();
// }


// function loadFeedback(){
//   let assignments = JSON.parse(localStorage.getItem("assignments")) || {};
//   let container = document.getElementById("feedback");

//   container.innerHTML = "";

//   if(assignments[id]){
//     assignments[id].forEach(a => {
//       if(a.student === currentUser.email && a.feedback){
//         container.innerHTML += `
//           <div class="feedback">${a.feedback}</div>
//         `;
//       }
//     });
//   }
// }


// function markComplete(){
//   let progress = JSON.parse(localStorage.getItem("progress")) || {};

//   if(!progress[currentUser.email]){
//     progress[currentUser.email] = {};
//   }

//   progress[currentUser.email][id] = true;

//   localStorage.setItem("progress", JSON.stringify(progress));

//   alert("Course Completed!");
// }


// loadFeedback();








let params = new URLSearchParams(window.location.search);
let id = params.get("id");


let courses = JSON.parse(localStorage.getItem("courses")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser"));


let course = courses.find(c => c.id == id);

if(!course){
  alert("Course not found or deleted!");
  window.location.href = "browse.html";
}


if(!currentUser){
  alert("Please login first!");
  window.location.href = "login.html";
}


document.getElementById("title").innerText = course.name;
document.getElementById("desc").innerText = course.description;


document.getElementById("question").innerText =
  course.assignment || "No assignment available";


function convertToEmbed(url){
  return url.includes("watch?v=") ? url.replace("watch?v=", "embed/") : url;
}


document.getElementById("content").innerHTML = "";

course.content.forEach(item => {
  let video = convertToEmbed(item.video);

  document.getElementById("content").innerHTML += `
    <iframe width="400" height="250" src="${video}" allowfullscreen></iframe>
    <p>${item.notes}</p>
    <hr>
  `;
});


let enrollments = JSON.parse(localStorage.getItem("enrollments")) || {};
let userCourses = enrollments[currentUser.email] || [];

let isEnrolled = userCourses.includes(parseInt(id));


if(!isEnrolled){
  document.getElementById("assignment").disabled = true;
  document.getElementById("submitBtn").style.display = "none";
  document.getElementById("assignmentMsg").innerText =
    "Enroll to submit assignment.";

  document.getElementById("completeBtn").style.display = "none";
  document.getElementById("completeMsg").innerText =
    "Enroll to track progress.";
}


function submitAssignment(){
  let text = document.getElementById("assignment").value;

  if(text === ""){
    alert("Write something!");
    return;
  }

  let assignments = JSON.parse(localStorage.getItem("assignments")) || {};

  if(!assignments[id]){
    assignments[id] = [];
  }

  assignments[id].push({
    student: currentUser.email,
    text,
    time: new Date().toLocaleString(),
    feedback: ""
  });

  localStorage.setItem("assignments", JSON.stringify(assignments));

  alert("Assignment Submitted!");
  document.getElementById("assignment").value = "";

  loadFeedback();
}


function loadFeedback(){
  let assignments = JSON.parse(localStorage.getItem("assignments")) || {};
  let container = document.getElementById("feedback");

  container.innerHTML = "";

  if(assignments[id]){
    assignments[id].forEach(a => {
      if(a.student === currentUser.email && a.feedback){
        container.innerHTML += `
          <div class="feedback">${a.feedback}</div>
        `;
      }
    });
  }
}


function markComplete(){
  let progress = JSON.parse(localStorage.getItem("progress")) || {};

  if(!progress[currentUser.email]){
    progress[currentUser.email] = {};
  }

  progress[currentUser.email][id] = true;

  localStorage.setItem("progress", JSON.stringify(progress));

  alert("Course Completed!");
}


loadFeedback();