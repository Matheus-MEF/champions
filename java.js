// Cria a função pesquisar
function pesquisar() {
// Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
// Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if (!campoPesquisa){
        section.innerHTML = "Nenhum campeão encontrado."
        return
    };
    campoPesquisa = campoPesquisa.toLowerCase();
    let final = "";
    let titulo = "";
    let descricao = "";    
// Itera sobre cada dado (objeto) no array 'dados'.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || (descricao.includes(campoPesquisa))){
            final += `<div class="item-resultado"> 
            <h2>${dado.titulo}</h2> <p class="descricao-meta"></p> ${dado.descricao}<br> 
            <a href="${dado.link_lol}" target="_blank">Mais informações.</a> <br>
            <a href="${dado.link_build}" target="_blank">Builds</a>
          </div>`
        } 
    }
if (!final){
    final = "Nome não encontrado"
};
// Atribui o HTML completo da lista de resultados à seção. 
    section.innerHTML = final;
}



