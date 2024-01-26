const title_txt = document.querySelector("#title");
const description_txt = document.querySelector("#description");
const tasks = JSON.parse(localStorage.getItem("tasks"));
const task = JSON.parse(localStorage.getItem("task_object"));

console.log(task);

document.querySelector("#task_save").addEventListener("click", function () {
   if (task.title == "") {
      const task = {
         title: title_txt.value,
         description: description_txt.value,
      };
      console.log(title.textContent);
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      window.location.href = "scrum.html";
   } else {
      task.title = title_txt.value;
      task.description = description_txt.value;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      window.location.href = "scrum.html";
   }
});

document.querySelector("#task_delete").addEventListener("click", function () {
   window.location.href = "scrum.html";
});
