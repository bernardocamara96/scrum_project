document.querySelector("#login_form").addEventListener("submit", function (e) {
   e.preventDefault();
   const username = document.querySelector(".login_container #username");
   var username_txt = username.value;
   localStorage.setItem("username", username_txt);

   window.location.href = "scrum.html";
});
