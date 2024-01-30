const username = localStorage.getItem("username");
document.querySelector("#user").textContent = username;
const tasks = JSON.parse(localStorage.getItem("tasks"));
const sprints = JSON.parse(localStorage.getItem("sprints"));

console.log(tasks);
console.log(sprints);
printTasks(tasks);

document.querySelector("#logout").addEventListener("click", function () {
   localStorage.setItem("username", "");
   window.location.href = "login.html";
});

document.querySelector("#btn_sprint").addEventListener("click", function () {
   window.location.href = "sprint_form.html";
});

document.querySelector("#btn_retrospective").addEventListener("click", function () {
   document.querySelector("#modal_sprints").visibility = "visibility";
});

document.querySelector("#btn_task").addEventListener("click", function () {
   localStorage.setItem("tasks", JSON.stringify(tasks));
   const task = {
      title: "",
      description: "",
   };
   localStorage.setItem("task_object", JSON.stringify(task));
   window.location.href = "task.html";
});

const taskLists = document.querySelectorAll(".task_list");

for (let taskList of taskLists) {
   taskList.addEventListener("dragover", function (e) {
      e.preventDefault();
      const draggable = document.querySelector(".drag");
      taskList.appendChild(draggable);

      for (let task of tasks) {
         if (draggable.id == task.id) {
            task.column = this.id;
         }
      }
   });
}

window.addEventListener("beforeunload", function () {
   localStorage.setItem("tasks", JSON.stringify(tasks));
});

document.querySelector("#modal_cancel").addEventListener("click", function () {
   document.querySelector("#modal").style.visibility = "hidden";
   document.querySelector("#background").style.visibility = "hidden";
});

document.querySelector("#background").addEventListener("click", function () {
   document.querySelector("#modal").style.visibility = "hidden";
   document.querySelector("#background").style.visibility = "hidden";
   document.querySelector("#modal_settings").style.visibility = "hidden";
});

document.querySelector("#btn_settings").addEventListener("click", function () {
   document.querySelector("#modal_settings").style.visibility = "visible";
   document.querySelector("#background").style.visibility = "visible";
});

function printTasks(tasks) {
   for (let i = 0; i < tasks.length; i++) {
      const task_div = document.createElement("div");
      task_div.id = tasks[i].id;
      task_div.classList.add("task");
      taskCreationAddEvents(task_div);
      task_div.setAttribute("draggable", "true");
      task_div.style.backgroundColor = tasks[i].color;
      task_div.style.color = fontColor(tasks[i].color);

      const task_title = document.createElement("div");
      task_title.classList.add("task_title");
      task_title.textContent = tasks[i].title;

      task_div.appendChild(task_title);
      const task_btn = document.createElement("button");
      task_btn.innerHTML = "&#9998;";
      task_btn.classList.add("task_btn");
      task_btn.style.color = fontColor(tasks[i].color);

      task_btn.addEventListener("mouseenter", function () {
         const color = hexToRGB(tasks[i].color, -15, -15, -15);
         this.style.backgroundColor = color;
      });

      task_btn.addEventListener("mouseleave", function () {
         this.style.backgroundColor = tasks[i].color;
      });

      task_btn.addEventListener("mousedown", function () {
         const color = hexToRGB(tasks[i].color, -30, -30, -30);

         this.style.backgroundColor = color;
      });
      task_div.appendChild(task_btn);

      if (tasks[i].column == "list1") {
         document.querySelector("#list1").appendChild(task_div);
      } else if (tasks[i].column == "list2") {
         document.querySelector("#list2").appendChild(task_div);
      } else if (tasks[i].column == "list3") {
         document.querySelector("#list3").appendChild(task_div);
      }
   }
}

const buttons = document.querySelectorAll(".task_btn");

for (let btn of buttons) {
   btn.addEventListener("click", function () {
      for (let i = 0; i < tasks.length; i++) {
         if (tasks[i].id == this.parentNode.id) {
            localStorage.setItem("task_index", i);
            localStorage.setItem("task_object", JSON.stringify(tasks[i]));
            setTimeout(() => {
               i = tasks.length;
            }, 0);
         }
      }
      window.location.href = "task.html";
   });
}

function taskCreationAddEvents(task_div) {
   task_div.addEventListener("dblclick", function () {
      for (let i = 0; i < tasks.length; i++) {
         if (tasks[i].id == task_div.id) {
            const task_sel = tasks[i];
            document.querySelector("#modal_title").innerHTML = task_sel.title;
            document.querySelector("#modal_description").innerHTML = task_sel.description;
            document.querySelector("#modal").style.visibility = "visible";
            document.querySelector("#background").style.visibility = "visible";
         }
      }
   });

   task_div.addEventListener("dragstart", function () {
      localStorage.setItem("drag_backgroundColor", task_div.style.backgroundColor);
      task_div.classList.add("drag");
      task_div.style.backgroundColor = "#bebebe";
      task_div.style.color = "#bebebe";
   });
   task_div.addEventListener("dragend", function () {
      task_div.classList.remove("drag");
      task_div.style.backgroundColor = localStorage.getItem("drag_backgroundColor");
      task_div.style.color = "#0e0e0e";
   });

   task_div.addEventListener("mouseenter", function () {
      task_div.childNodes[1].style.visibility = "visible";
   });
   task_div.addEventListener("mouseleave", function () {
      task_div.childNodes[1].style.visibility = "hidden";
   });
}

//////COLORS///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector("#apply").addEventListener("click", function () {
   const background_color = document.querySelector("#background_color").value;
   const toDo_color = document.querySelector("#toDo_color").value;
   const doing_color = document.querySelector("#doing_color").value;
   const done_color = document.querySelector("#done_color").value;

   document.querySelector("#scrum_color").style.backgroundColor = background_color;
   document.querySelector("#column1").style.backgroundColor = toDo_color;
   document.querySelector("#column2").style.backgroundColor = doing_color;
   document.querySelector("#column3").style.backgroundColor = done_color;
   document.querySelector("#btn_task").style.backgroundColor = toDo_color;
   document.querySelector("#column1 .title").style.color = fontColor(toDo_color);
   document.querySelector("#column2 .title").style.color = fontColor(doing_color);
   document.querySelector("#column3 .title").style.color = fontColor(done_color);
   document.querySelector("#btn_task").style.color = fontColor(toDo_color);
   document.querySelector("#footer").style.color = fontColor(background_color);

   document.querySelector("#btn_task").addEventListener("mouseenter", function () {
      const color = hexToRGB(toDo_color, -15, -15, -15);

      this.style.backgroundColor = color;
   });

   document.querySelector("#btn_task").addEventListener("mouseleave", function () {
      this.style.backgroundColor = toDo_color;
   });

   document.querySelector("#btn_task").addEventListener("mousedown", function () {
      color = hexToRGB(toDo_color, -30, -30, -30);

      this.style.backgroundColor = color;
   });

   localStorage.setItem("background_color", background_color);
   localStorage.setItem("toDo_color", toDo_color);
   localStorage.setItem("doing_color", doing_color);
   localStorage.setItem("done_color", done_color);

   document.querySelector("#background").style.visibility = "hidden";
   document.querySelector("#modal_settings").style.visibility = "hidden";
});

document.querySelector("#scrum_color").style.backgroundColor = localStorage.getItem("background_color");
document.querySelector("#column1").style.backgroundColor = localStorage.getItem("toDo_color");
document.querySelector("#column2").style.backgroundColor = localStorage.getItem("doing_color");
document.querySelector("#column3").style.backgroundColor = localStorage.getItem("done_color");
document.querySelector("#btn_task").style.backgroundColor = localStorage.getItem("toDo_color");
document.querySelector("#background_color").value = localStorage.getItem("background_color");
document.querySelector("#toDo_color").value = localStorage.getItem("toDo_color");
document.querySelector("#doing_color").value = localStorage.getItem("doing_color");
document.querySelector("#done_color").value = localStorage.getItem("done_color");
document.querySelector("#column1 .title").style.color = fontColor(localStorage.getItem("toDo_color"));
document.querySelector("#column2 .title").style.color = fontColor(localStorage.getItem("doing_color"));
document.querySelector("#column3 .title").style.color = fontColor(localStorage.getItem("done_color"));
document.querySelector("#btn_task").style.color = fontColor(localStorage.getItem("toDo_color"));
document.querySelector("#footer").style.color = fontColor(localStorage.getItem("background_color"));

document.querySelector("#btn_task").addEventListener("mouseenter", function () {
   const color = hexToRGB(localStorage.getItem("toDo_color"), -15, -15, -15);

   this.style.backgroundColor = color;
});

document.querySelector("#btn_task").addEventListener("mouseleave", function () {
   this.style.backgroundColor = localStorage.getItem("toDo_color");
});

document.querySelector("#btn_task").addEventListener("mousedown", function () {
   const color = hexToRGB(localStorage.getItem("toDo_color"), -30, -30, -30);

   this.style.backgroundColor = color;
});

document.querySelector("#cancel_settings").addEventListener("click", function () {
   document.querySelector("#background").style.visibility = "hidden";
   document.querySelector("#modal_settings").style.visibility = "hidden";
});

document.querySelector("#modal_cancel2").addEventListener("click", function () {
   document.querySelector("#background").style.visibility = "hidden";
   document.querySelector("#modal_settings").style.visibility = "hidden";
});

document.querySelector("#reset_settings").addEventListener("click", function () {
   document.querySelector("#column1").style.backgroundColor = "#f1f2f4";
   document.querySelector("#column2").style.backgroundColor = "#f1f2f4";
   document.querySelector("#column3").style.backgroundColor = "#f1f2f4";
   document.querySelector("#btn_task").style.backgroundColor = "#f1f2f4";
   document.querySelector("#scrum_color").style.backgroundColor = "#172b4c";
   document.querySelector("#column1 .title").style.color = fontColor("#f1f2f4");
   document.querySelector("#column2 .title").style.color = fontColor("#f1f2f4");
   document.querySelector("#column3 .title").style.color = fontColor("#f1f2f4");
   document.querySelector("#btn_task").style.color = fontColor("#f1f2f4");
   document.querySelector("#footer").style.color = fontColor("#172b4c");

   localStorage.setItem("background_color", "#172b4c");
   localStorage.setItem("toDo_color", "#f1f2f4");
   localStorage.setItem("doing_color", "#f1f2f4");
   localStorage.setItem("done_color", "#f1f2f4");

   document.querySelector("#background_color").value = "#172b4c";
   document.querySelector("#toDo_color").value = "#f1f2f4";
   document.querySelector("#doing_color").value = "#f1f2f4";
   document.querySelector("#done_color").value = "#f1f2f4";

   document.querySelector("#btn_task").addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#dddddd";
   });

   document.querySelector("#btn_task").addEventListener("mouseleave", function () {
      this.style.backgroundColor = "#f1f2f4";
   });

   document.querySelector("#btn_task").addEventListener("mousedown", function () {
      this.style.backgroundColor = "#c8c8c8";
   });

   document.querySelector("#background").style.visibility = "hidden";
   document.querySelector("#modal_settings").style.visibility = "hidden";
});

function hexToRGB(hexColor, redChange, greenChange, blueChange) {
   var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);

   var red = parseInt(rgb[1], 16);
   var green = parseInt(rgb[2], 16);
   var blue = parseInt(rgb[3], 16);

   red = red + redChange;
   green = green + greenChange;
   blue = blue + blueChange;

   const color = "rgb(" + red + ", " + green + ", " + blue + ")";

   return color;
}

function fontColor(color) {
   var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
   var red = parseInt(rgb[1], 16);
   var green = parseInt(rgb[2], 16);
   var blue = parseInt(rgb[3], 16);

   if (red * 0.299 + green * 0.587 + blue * 0.114 > 186) {
      return "rgb(14, 14, 14)";
   } else {
      return "rgb(250, 250, 250)";
   }
}
