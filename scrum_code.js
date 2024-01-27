const username = localStorage.getItem("username");
document.querySelector("#user").textContent = "Username: " + username;
const tasks = JSON.parse(localStorage.getItem("tasks"));
console.log("antes de print");
console.log(tasks);
printTasks(tasks);
console.log("depois de print");

function printTasks(tasks) {
   for (let i = 0; i < tasks.length; i++) {
      const task_div = document.createElement("div");
      task_div.textContent = tasks[i].title;
      task_div.id = tasks[i].id;
      task_div.classList.add("task");
      taskCreationAddEvents(task_div);
      task_div.setAttribute("draggable", "true");
      if (tasks[i].column == "list1") {
         document.querySelector("#list1").appendChild(task_div);
      } else if (tasks[i].column == "list2") {
         document.querySelector("#list2").appendChild(task_div);
      } else if (tasks[i].column == "list3") {
         document.querySelector("#list3").appendChild(task_div);
      }
   }
}

document.querySelector("#logout").addEventListener("click", function () {
   localStorage.clear();
   window.location.href = "login.html";
});

document.querySelector("#btn_sprint").addEventListener("click", function () {
   window.location.href = "sprint_form.html";
});

document.querySelector("#btn_task").addEventListener("click", function () {
   localStorage.setItem("tasks", JSON.stringify(tasks));
   const task = {
      title: "",
      description: "",
   };
   localStorage.setItem("task_object", JSON.stringify(task));
   window.location.href = "task.html";
});

const taskLists = document.querySelectorAll(".task_list");

for (let taskList of taskLists) {
   taskList.addEventListener("dragover", function (e) {
      e.preventDefault();
      const draggable = document.querySelector(".drag");
      taskList.appendChild(draggable);

      for (let task of tasks) {
         if (draggable.id == task.id) {
            task.column = this.id;
         }
      }
   });
}

window.addEventListener("beforeunload", function () {
   localStorage.setItem("tasks", JSON.stringify(tasks));
});

function taskCreationAddEvents(task_div) {
   task_div.addEventListener("dblclick", function () {
      for (let i = 0; i < tasks.length; i++) {
         if (tasks[i].id == task_div.id) {
            localStorage.setItem("task_index", i);
            localStorage.setItem("task_object", JSON.stringify(tasks[i]));
            setTimeout(() => {
               i = tasks.length;
            }, 0);
         }
      }
      window.location.href = "task.html";
   });
   task_div.addEventListener("dragstart", function () {
      task_div.classList.add("drag");
   });
   task_div.addEventListener("dragend", function () {
      task_div.classList.remove("drag");
   });
}
