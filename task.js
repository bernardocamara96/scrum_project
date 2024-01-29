const title_txt = document.querySelector("#title");
const description_txt = document.querySelector("#description");
const color_input = document.querySelector("#task_color");
const tasks = JSON.parse(localStorage.getItem("tasks"));
const task = JSON.parse(localStorage.getItem("task_object"));
const index = localStorage.getItem("task_index");

document.querySelector("#scrum_color").style.backgroundColor = localStorage.getItem("background_color");

console.log(tasks);

document.querySelector("#username").textContent = localStorage.getItem("username");

if (task.title != "") {
   title_txt.value = task.title;
   description_txt.value = task.description;
   color_input.value = task.color;
   document.querySelector("#task_delete").style.display = "inline-block";
} else {
   color_input.value = "#ffffff";
   document.querySelector("#task_delete").style.display = "none";
}

document.querySelector("#task_save").addEventListener("click", function () {
   if (title_txt.value != "") {
      if (task.title == "") {
         const data = new Date();
         const task = {
            id: data.getTime(),
            column: "list1",
            title: title_txt.value,
            description: description_txt.value,
            color: color_input.value,
         };
         tasks.push(task);
         localStorage.setItem("tasks", JSON.stringify(tasks));
         window.location.href = "scrum.html";
      } else {
         tasks[index].title = title_txt.value;
         tasks[index].description = description_txt.value;
         tasks[index].color = color_input.value;
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

document.querySelector("#cancel").addEventListener("click", function () {
   window.location.href = "scrum.html";
});
