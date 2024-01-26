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
var bGuardarComent = document.getElementById("guardarNovoComent");

//Ao clicar no botão, guardar informação na tabela
bGuardarComent.onclick = function(){
    console.log("click guardar");

    modal.style.display="none";

    const comentario = document.createElement("td");
    comentario.innerText=areaComentario.value;

    const categ = document.createElement("td");
    categ.innerText=categoriaComentario.value;

    const novaLinhaTab = document.createElement("tr");

    novaLinhaTab.appendChild(comentario);
    novaLinhaTab.appendChild(categ);

    document.getElementById("tabelaComentarios").appendChild(novaLinhaTab);

    document.getElementById("areaComentario").value = ""; //Limpa textarea
}
