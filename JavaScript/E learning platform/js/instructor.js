
let courses = JSON.parse(localStorage.getItem("courses")) || [];


function convertToEmbed(url){
  if(url.includes("watch?v=")){
    return url.replace("watch?v=", "embed/");
  }
  return url;
}


function createCourse(){
  let name = document.getElementById("courseName").value;
  let desc = document.getElementById("courseDesc").value;

  if(name === "" || desc === ""){
    alert("Fill all fields");
    return;
  }

  let newCourse = {
    id: Date.now(),
    name,
    description: desc,
    content: [],
    assignment: "" 
  };

  courses.push(newCourse);
  localStorage.setItem("courses", JSON.stringify(courses));

  alert("Course Created!");

  document.getElementById("courseName").value = "";
  document.getElementById("courseDesc").value = "";

  loadCourses();
}
function loadCourses(){
  let select = document.getElementById("courseSelect");
  let assignSelect = document.getElementById("assignmentCourse");
  let list = document.getElementById("courseList");

  select.innerHTML = "";
  assignSelect.innerHTML = "";
  list.innerHTML = "";

  courses = JSON.parse(localStorage.getItem("courses")) || [];

  courses.forEach(course => {

    
    let option1 = new Option(course.name, course.id);
    let option2 = new Option(course.name, course.id);

    select.appendChild(option1);
    assignSelect.appendChild(option2);

    
    let contentHTML = "";

    course.content.forEach((item, index) => {
      let video = convertToEmbed(item.video);

      contentHTML += `
        <div style="margin-bottom:10px; border:1px solid #ccc; padding:10px; border-radius:8px;">
          <iframe width="300" height="180" src="${video}" frameborder="0" allowfullscreen></iframe>
          
          <p><b>Notes:</b> ${item.notes}</p>

          <button onclick="editContent(${course.id}, ${index})" style="background:orange;">
            Edit
          </button>

          <button onclick="deleteContent(${course.id}, ${index})" style="background:red;">
            Delete
          </button>
        </div>
      `;
    });

   list.innerHTML += `
  <div class="course">

    
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <h4>${course.name}</h4>

      <button onclick="deleteCourse(${course.id})" 
              style="background:red; padding:5px 10px;">
        Delete
      </button>
    </div>

    <p>${course.description}</p>

   
    <div class="assignment-box">
      <b>Assignment:</b> ${course.assignment || "Not added"}
    </div>

  
    <h5>Contents:</h5>
    ${contentHTML || "<p>No content yet</p>"}

  </div>
`;
  });
}
function deleteCourse(courseId){
  let confirmDelete = confirm("Delete entire course?");
  if(!confirmDelete) return;

  let courses = JSON.parse(localStorage.getItem("courses")) || [];

  
  courses = courses.filter(c => c.id != courseId);

  localStorage.setItem("courses", JSON.stringify(courses));

  alert("Course Deleted!");

  loadCourses();
}
function deleteContent(courseId, index){
  let confirmDelete = confirm("Delete this content?");
  if(!confirmDelete) return;

  let courses = JSON.parse(localStorage.getItem("courses")) || [];

  let course = courses.find(c => c.id == courseId);

  if(course){
    course.content.splice(index, 1);

    localStorage.setItem("courses", JSON.stringify(courses));

    alert("Content Deleted!");
    loadCourses();
  }
}
function editContent(courseId, index){
  let courses = JSON.parse(localStorage.getItem("courses")) || [];
  let course = courses.find(c => c.id == courseId);

  if(course){
    let item = course.content[index];

    let newVideo = prompt("Edit Video Link:", item.video);
    let newNotes = prompt("Edit Notes:", item.notes);

    if(newVideo && newNotes){
      course.content[index] = {
        video: newVideo,
        notes: newNotes
      };

      localStorage.setItem("courses", JSON.stringify(courses));

      alert("Content Updated!");
      loadCourses();
    }
  }
}

// function loadCourses(){
//   let select = document.getElementById("courseSelect");
//   let assignSelect = document.getElementById("assignmentCourse");
//   let list = document.getElementById("courseList");

//   select.innerHTML = "";
//   assignSelect.innerHTML = "";
//   list.innerHTML = "";

//   courses = JSON.parse(localStorage.getItem("courses")) || [];

//   courses.forEach(course => {

    
//     let option1 = document.createElement("option");
//     option1.value = course.id;
//     option1.text = course.name;
//     select.appendChild(option1);

//     let option2 = document.createElement("option");
//     option2.value = course.id;
//     option2.text = course.name;
//     assignSelect.appendChild(option2);

    
//     let contentHTML = "";

//     course.content.forEach(item => {
//       let video = convertToEmbed(item.video);

//       contentHTML += `
//         <iframe width="300" height="180" src="${video}" frameborder="0" allowfullscreen></iframe>
//         <p>${item.notes}</p>
//       `;
//     });

//     list.innerHTML += `
//       <div class="course">
//         <h4>${course.name}</h4>
//         <p>${course.description}</p>

//         <div class="assignment-box">
//           <b>Assignment:</b> ${course.assignment || "Not added"}
//         </div>

//         <h5>Contents:</h5>
//         ${contentHTML || "<p>No content yet</p>"}
//       </div>
//     `;
//   });
// }


function addContent(){
  let courseId = document.getElementById("courseSelect").value;
  let video = document.getElementById("video").value;
  let notes = document.getElementById("notes").value;

  if(video === "" || notes === ""){
    alert("Fill all fields");
    return;
  }

  let course = courses.find(c => c.id == courseId);

  if(course){
    course.content.push({ video, notes });

    localStorage.setItem("courses", JSON.stringify(courses));

    alert("Content Added!");

    document.getElementById("video").value = "";
    document.getElementById("notes").value = "";

    loadCourses();
  }
}


function createAssignment(){
  let courseId = document.getElementById("assignmentCourse").value;
  let question = document.getElementById("assignmentQuestion").value;

  if(question === ""){
    alert("Enter question!");
    return;
  }

  let course = courses.find(c => c.id == courseId);

  if(course){
    course.assignment = question;

    localStorage.setItem("courses", JSON.stringify(courses));

    alert("Assignment Added!");

    document.getElementById("assignmentQuestion").value = "";

    loadCourses();
  }
}


function loadSubmissions(){
  let assignments = JSON.parse(localStorage.getItem("assignments")) || {};
  let container = document.getElementById("submissions");

  container.innerHTML = "";

  for(let courseId in assignments){
    let course = courses.find(c => c.id == courseId);

    container.innerHTML += `<h4>${course.name}</h4>`;

    assignments[courseId].forEach((a, index) => {
      container.innerHTML += `
        <div class="submission">
          <p><b>Student:</b> ${a.student}</p>
          <p><b>Answer:</b> ${a.text}</p>
          <p><b>Time:</b> ${a.time}</p>

          <textarea id="fb-${courseId}-${index}">${a.feedback || ""}</textarea>
          <button onclick="saveFeedback('${courseId}', ${index})">Save Feedback</button>
        </div>
      `;
    });
  }
}


function saveFeedback(courseId, index){
  let assignments = JSON.parse(localStorage.getItem("assignments")) || {};

  let textarea = document.getElementById(`fb-${courseId}-${index}`);
  let feedbackText = textarea.value;

  assignments[courseId][index].feedback = feedbackText;

  localStorage.setItem("assignments", JSON.stringify(assignments));

  alert("Feedback Saved!");
}


function logout(){
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}


loadCourses();
loadSubmissions();