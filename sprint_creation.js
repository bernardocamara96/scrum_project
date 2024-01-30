const date_txt = document.querySelector("#dataReuniao");
const members_txt = document.querySelector("#members");
const btn_save = document.querySelector("#saveSprint");
const sprints = JSON.parse(localStorage.getItem("sprints"));

btn_save.addEventListener("click", function () {
   const sprint = {
      date: date_txt.value,
      members: members_txt.value,
      comments: [],
      date_creation: new Date(),
   };
   members_txt.value = "";
   sprints.push(sprint);
   localStorage.setItem("sprints", JSON.stringify(sprints));
   window.location.href = "scrum.html";
});
