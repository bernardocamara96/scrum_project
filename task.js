const title_txt = document.querySelector("#title");
const description_txt = document.querySelector("#description");
const tasks = JSON.parse(localStorage.getItem("tasks"));
const task = JSON.parse(localStorage.getItem("task_object"));
const index = localStorage.getItem("task_index");

document.querySelector("#username").textContent = localStorage.getItem("username");

if (task.title != "") {
   title_txt.value = task.title;
   description_txt.value = task.description;
}

document.querySelector("#task_save").addEventListener("click", function () {
   if (title_txt.value != "") {
      if (task.title == "") {
         const task = {
            column: 1,
            title: title_txt.value,
            description: description_txt.value,
         };
         tasks.push(task);
         localStorage.setItem("tasks", JSON.stringify(tasks));
         window.location.href = "scrum.html";
      } else {
         tasks[index].title = title_txt.value;
         tasks[index].description = description_txt.value;
         localStorage.setItem("tasks", JSON.stringify(tasks));
         window.location.href = "scrum.html";
      }
   } else {
      alert("Need to put a task title.");
   }
});

document.querySelector("#task_delete").addEventListener("click", function () {
   tasks.splice(index, 1);
   localStorage.setItem("tasks", JSON.stringify(tasks));
   window.location.href = "scrum.html";
});
