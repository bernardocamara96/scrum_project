document.querySelector("#login_form").addEventListener("submit", function (e) {
   e.preventDefault();
   const username = document.querySelector(".login_container #username");
   var username_txt = username.value;
   localStorage.setItem("username", username_txt);
   username.textContent = "";
   const tasks = [];
   const retros = [];
   localStorage.setItem("tasks", JSON.stringify(tasks));
   localStorage.setItem("retros", JSON.stringify(retros));
   window.location.href = "scrum.html";
});
