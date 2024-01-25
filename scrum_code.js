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

const tasks = document.querySelectorAll(".task");

for (let task of tasks) {
   task.addEventListener("dblclick", function () {
      window.location.href = "task.html";
   });
}

document.querySelector("#btn_task").addEventListener("click", function () {
   window.location.href = "task.html";
});
