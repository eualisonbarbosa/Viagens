// console.log(dados)


function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //Se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
      section.innerHTML = "<p><h3>Campo de pesquisa vazio, nenhuma cidade ou país foi encontrado!</h3></p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let lugares = "";
    let tags = "";

    // Itera sobre cada dado no array 'dados'
    for (let dado of dados) {

      titulo = dado.titulo.toLowerCase()
      lugares = dado.lugares.toLowerCase()
      tags = dado.tags.toLowerCase()

      if (titulo.includes(campoPesquisa) || lugares.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
   
        // Concatena HTML para cada dado, formatando os resultados
   resultados += `
   <div class="item-resultado">
       
           <h2>${dado.titulo}</h2>
           <img src=${dado.imagem} alt="Rio de Janeiro" class="imagem">
           <p class="descricao-meta"><strong>Clima:</strong>${dado.clima}</p>
           <p class="descricao-meta"><strong>Valor médio por dia:</strong>${dado.valor}</p>
           <p class="descricao-meta"><strong>Curiosidades:</strong>${dado.curiosidades}</p>
           <p class="descricao-meta"><strong>População:</strong>${dado.populacao}</p>
           <p class="descricao-meta"><strong>Lugares turísticos:</strong>${dado.lugares}</p>
       <a href=${dado.link} target="_blank">Mais informações</a>
   </div>
`
      }

}

        if (!resultados) {
          resultados = "<p><h3>Nenhuma informação foi encontrada :(</h3></p>"
        }

  // Atribui o HTML gerado à seção de resultados
section.innerHTML = resultados

}
 



