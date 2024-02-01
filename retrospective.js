document.querySelector("#scrum_color").style.backgroundColor =
  localStorage.getItem("background_color");

// js aside
const username = localStorage.getItem("username");
document.querySelector("#user").textContent = username;

document.querySelector("#logout").addEventListener("click", function () {
  window.location.href = "login.html";
});

document.querySelector("#btn_sprint").addEventListener("click", function () {
  window.location.href = "sprint_form.html";
});

const retrospectiveList = JSON.parse(localStorage.getItem("retros"));

console.log(retrospectiveList);
// hardcode para teste

// gerar tabela retrospetivas
const table = document.querySelector("#table_body");
for (let retro of retrospectiveList) {
  let row = document.createElement("tr");
  ///////  gerar modal para cada retrospetiva

  row.addEventListener("dblclick", function () {
    document.querySelector("#modal_title").innerHTML = retro.title;
    document.querySelector("#modal_date").innerHTML = retro.date;
    document.querySelector("#modal_teamMembers").innerHTML = retro.members;

    for (let comment of retro.comments) {
      let rowTableModal = document.createElement("tr");
      let text = document.createElement("td");
      let type = document.createElement("td");
      let author = document.createElement("td");

      text.innerText = comment[0];
      type.innerText = comment[1];
      author.innerText = comment[2];

      rowTableModal.appendChild(text);
      rowTableModal.appendChild(type);
      rowTableModal.appendChild(author);
      document.querySelector("#table_body2").appendChild(rowTableModal);
    }

    document.querySelector("#modal_retrospective").style.visibility = "visible";
    document.querySelector("#background").style.visibility = "visible";
  });

  table.appendChild(row);
  let date = document.createElement("td");
  let title = document.createElement("td");
  date.innerText = retro.date;
  title.innerText = retro.title;
  row.appendChild(date);
  row.appendChild(title);
}

document.querySelector("#btn_scrum").addEventListener("click", function () {
  window.location.href = "scrum.html";
});

document.querySelector("#modal_cancel").addEventListener("click", function () {
  document.querySelector("#background").style.visibility = "hidden";
  document.querySelector("#modal_retrospective").style.visibility = "hidden";
  document.querySelector("#table_body2 tr").remove();
});

document.querySelector("#background").addEventListener("click", function () {
  document.querySelector("#modal_retrospective").style.visibility = "hidden";
  document.querySelector("#background").style.visibility = "hidden";
  document.querySelector("#table_body2 tr").remove();
});
