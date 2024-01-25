window.onload = function () {
   var username = localStorage.getItem("username");
   document.querySelector("#user").textContent = "Username: " + username;
};

document.querySelector("#logout").addEventListener("click", function () {
   localStorage.clear();
   window.location.href = "login.html";
});
