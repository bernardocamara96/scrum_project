// código do login
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.querySelector(".login_container #username");
    localStorage.setItem("username", username.value);
    window.location.href = "scrumD.html";
 });


// código drag and drop


let draggedItem = null;
let droppedInColumn = false; // Variável para verificar se o item foi solto numa coluna

document.querySelectorAll('.task').forEach(item => {
    item.addEventListener('dragstart', function(e) {
        draggedItem = this;
        droppedInColumn = false;  
    });
});


document.querySelectorAll('.column').forEach(column => {
    column.addEventListener('dragover', function(e) {
        e.preventDefault();
        });

     column.addEventListener('drop', function(e) {
        e.preventDefault();
        this.appendChild(draggedItem);
        draggedItem.style.display = "block";
        droppedInColumn = true; 
        });
});



// código para abrir e fechar modal em HMTL dialog
    window.onload = () => {
        const dialog = document.querySelector('dialog');
 
        const openDialog = document.querySelector('#open-dialog');
        openDialog.addEventListener('click', () => {
            dialog.showModal();
        });
 
        const closeDialog = document.querySelector('#close-dialog');
        closeDialog.addEventListener('click', () => {
            dialog.close();
        });
    }



// codigo rever



 const draggableElement = document.getElementById('draggableElement');
const dropZone = document.querySelector('.column');

draggableElement.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text', event.target.id);
});

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault(); // Necessário para permitir o drop
});

dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const draggable = document.getElementById(data);
    
    const dropZoneRect = dropZone.getBoundingClientRect();
    const x = event.clientX - dropZoneRect.left;
    const y = event.clientY - dropZoneRect.top;

    draggable.style.left = x + 'px';
    draggable.style.top = y + 'px';
    draggable.style.position = 'absolute';

    dropZone.appendChild(draggable);
});

 