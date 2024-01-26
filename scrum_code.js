window.onload = function () {
   var username = localStorage.getItem("username");
   document.querySelector("#user").textContent = "Username: " + username;
};

document.querySelector("#logout").addEventListener("click", function () {
   localStorage.clear();
   window.location.href = "login.html";
});

document.querySelector("#btn_sprint").addEventListener("click", function () {
   window.location.href = "sprint_form.html";
});

document.querySelector("#btn_task").addEventListener("click", function () {
   window.location.href = "task.html";
});

const tasks = document.querySelectorAll(".task");

for (let task of tasks) {
   taskCreationAddEvents(task);
}

const taskLists = document.querySelectorAll(".task_list");

for (let taskList of taskLists) {
   taskList.addEventListener("dragover", function (e) {
      e.preventDefault();
      const draggable = document.querySelector(".drag");
      taskList.appendChild(draggable);
   });
}

function taskCreationAddEvents(task) {
   task.addEventListener("dblclick", function () {
      window.location.href = "task.html";
   });
   task.addEventListener("dragstart", function () {
      task.classList.add("drag");
   });
   task.addEventListener("dragend", function () {
      task.classList.remove("drag");
   });
}
