//Obter o Modal
var modal = document.getElementById("myModal");

//Botão que abre o Modal
var bOpenModel = document.getElementById("addComment");

//Obter o <span> que fecha o Modal
var span = document.getElementsByClassName("close")[0];

//Ao clicar no botão, abrir Modal
bOpenModel.onclick = function(){
    console.log("Botão clicado");
    modal.style.display="block";
}

//Ao clicar no (x), fechar Modal
span.onclick = function(){
    console.log("Botão x clicado");
    modal.style.display="none";
}

//Botão que adiciona novo comentário
let bGuardarComent = document.getElementById("guardarNovoComent");

let listComments = new Array();

//Ao clicar no botão, escreve informação na tabela
bGuardarComent.onclick = function(){
    console.log("click guardar");

    //Retira Modal
    modal.style.display="none";

    const comentario_cell = document.createElement("td");
    const categ_cell = document.createElement("td");
    const member_cell = document.createElement("td");
    const novaLinhaTab = document.createElement("tr");

    //Add novo comentário ao array
    const newComment = [areaComentario.value, categoriaComentario.value];

    listComments.push(newComment);

    console.log(listComments);

    //Adicionar na tabela
    comentario_cell.innerText=areaComentario.value;
    categ_cell.innerText=categoriaComentario.value;
    member_cell.innerText=selectMember.value;

    novaLinhaTab.appendChild(comentario_cell);
    novaLinhaTab.appendChild(categ_cell);
    novaLinhaTab.appendChild(member_cell);

    document.getElementById("tabelaComentarios").appendChild(novaLinhaTab);

    document.getElementById("areaComentario").value = ""; //Limpa textarea
}

//Adicionar Membros
const btn_addMember=document.getElementById("addMember");
const memberInput=document.getElementById("membrosP");
const members=[];

const form = document.getElementById("formId");

btn_addMember.addEventListener('click', function(){

    if(memberInput.value!=""){
        members.push(letraCaps(memberInput.value));
        memberInput.value="";

        console.log(members);

        //Mostrar Membros
        let listMembers = document.getElementById("listMembers");
        let selectMembers = document.getElementById("selectMember");
            
        //Adiciona sempre o último
        //Lista
        let li = document.createElement('li');
        li.innerText = members[members.length-1];
        listMembers.appendChild(li);

        //Input Select no Modal
        let opt = document.createElement('option');
        opt.innerText = members[members.length-1];
        opt.value = opt.innerText;
        selectMembers.appendChild(opt);
    }else{
        alert("Write a name");
    }

});

//Objeto Sprint

const date_sprint=document.getElementById("dataReuniao");
const btn_saveSprint= document.getElementById("submitSprint")
const list_retro=new Array();

btn_saveSprint.addEventListener('click', function(){

    let sprint = {
        date: date_sprint.value,
        members: members,
        comments: listComments
    };

    list_retro.push(sprint);

    localStorage.setItem('retros', JSON.stringify(list_retro));

    console.log(list_retro);
});

form.addEventListener('submit', function(e) {
    e.preventDefault;
});

//Colocar primeira letra em Maiúscula
function letraCaps(word){
    const firstLetterCap = word.charAt(0).toUpperCase();

    const remainingLetters = word.substring(1);

    const capWord = firstLetterCap + remainingLetters;

    return capWord;
};

