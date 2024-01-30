// js aside
const username = localStorage.getItem("username");
document.querySelector("#user").textContent = username;

document.querySelector("#logout").addEventListener("click", function () {
  window.location.href = "login.html";
});

document.querySelector("#btn_sprint").addEventListener("click", function () {
  window.location.href = "sprint_form.html";
});

const retrospectiveLit = JSON.parse(localStorage.getItem("retroList"));
// hardcode para teste
const retro1 = { date: "12422222222222", title: "titulo1" };
const retro2 = { date: "1355", title: "titulo2" };
const retrospectiveList = [retro1, retro2];

const table = document.querySelector("#table_body");
for (let retro of retrospectiveList) {
  let row = document.createElement("tr");
  table.appendChild(row);
  let date = document.createElement("td");
  let title = document.createElement("td");
  date.innerText = retro.date;
  title.innerText = retro.title;
  row.appendChild(date);
  row.appendChild(title);
}

/*
let activityList = new Array();

window.onload = function () {
  if (localStorage.getItem("activitylist") !== null) {
    activityList = JSON.parse(localStorage.getItem("activitylist"));
    let table = document.getElementById("activitytable");
    // Add rows to the table
    activityList.forEach((activity) => {
      // create a row
      let row = table.insertRow();
      for (let key in activity) {
        // create a cell
        let cell = row.insertCell();
        cell.textContent = activity[key];
      }
    });
  }
};

function addActivity(title, description) {
  // generate new id for the new activity
  const id = activityList.length + 1;
  // create an object of activity
  const newactivity = {
    activity_id: id,
    activity_title: title,
    activity_description: description,
  };
  // add the new activity into the array
  activityList.push(newactivity);
  // update the storage
  localStorage.setItem("activitylist", JSON.stringify(activityList));
  // add the activity in the table
  let table = document.getElementById("activitytable");
  // create a new row
  let row = table.insertRow();
  // create a new cell
  let cell = row.insertCell();
  cell.textContent = id;
  // create a new cell
  cell = row.insertCell();
  cell.textContent = title;
  // create a new cell
  cell = row.insertCell();
  cell.textContent = description;
}*/
