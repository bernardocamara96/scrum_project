document.querySelector("#login_form").addEventListener("submit", function (e) {
   e.preventDefault();
   const username = document.querySelector("#username");
   var username_txt = username.value;
   if (username_txt.length <= 13) {
      localStorage.setItem("username", username_txt);
      username.textContent = "";
      const tasks = [];
      const retros = [];
      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("retros", JSON.stringify(retros));
      window.location.href = "scrum.html";
   } else {
      alert("The Username inserted is too long, please enter a shorter username.");
   }
});
