document.querySelector("#scrum_color").style.backgroundColor = localStorage.getItem("background_color");

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

const table = document.querySelector("#table_body");
for (let retro of retrospectiveList) {
   let row = document.createElement("tr");
   row.addEventListener("dblclick", function () {
      document.querySelector("#modal_title").innerHTML = retro.data;
      document.querySelector("#modal_description").innerHTML = retro.title;
      document.querySelector("#modal").style.visibility = "visible";
      document.querySelector("#background").style.visibility = "visible";
   });
   table.appendChild(row);
   let date = document.createElement("td");
   let title = document.createElement("td");
   date.innerText = retro.date;
   title.innerText = retro.title;
   row.appendChild(date);
   row.appendChild(title);

   row.addEventListener("dblclick", function () {
      document.querySelector("#modal1").style.visibility = "visible";
      document.querySelector("#background").style.visibility = "visible";
      title_modal.innerText = retro.title;
      date_modal.innerText = retro.date;

      for (let member of retro.members) {
         let div_member = document.createElement("div");
         div_member.innerText = member;
         document.querySelector("#list_members").appendChild(div_member);
      }

      for (let comment of retro.comments) {
         let tr_comment = document.createElement("tr");
         let td_comment = document.createElement("td");
         td_comment.innerText = comment[0];

         let td_type = document.createElement("td");
         td_type.innerText = comment[1];
         td_type.style.textAlign = "center";

         let td_author = document.createElement("td");
         td_author.innerText = comment[2];
         td_author.style.textAlign = "center";

         tr_comment.appendChild(td_comment);
         tr_comment.appendChild(td_type);
         tr_comment.appendChild(td_author);

         tr_comment.style.height = "20px";

         document.querySelector("#body_comments").appendChild(tr_comment);
      }
   });
}

document.querySelector("#cancel_retrospectives").addEventListener("click", function () {
   document.querySelector("#modal1").style.visibility = "hidden";
   document.querySelector("#background").style.visibility = "hidden";
   document.querySelector("#body_comments tr").remove();
   document.querySelector("#list_members").innerHTML = "";
});

document.querySelector("#background").addEventListener("click", function () {
   document.querySelector("#modal1").style.visibility = "hidden";
   document.querySelector("#background").style.visibility = "hidden";
   document.querySelector("#body_comments tr").remove();
   document.querySelector("#list_members").innerHTML = "";
});
document.querySelector("#btn_scrum").addEventListener("click", function () {
   window.location.href = "scrum.html";
});

document.querySelector("#modal_cancel").addEventListener("click", function () {
   document.querySelector("#background").style.visibility = "hidden";
   document.querySelector("#modal").style.visibility = "hidden";
});

document.querySelector("#background").addEventListener("click", function () {
   document.querySelector("#modal").style.visibility = "hidden";
   document.querySelector("#background").style.visibility = "hidden";
});
