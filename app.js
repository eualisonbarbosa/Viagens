// console.log(dados)

function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //Se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
      section.innerHTML = "<p>Campo de pesquisa vazio, nenhuma cidade ou país foi encontrado!</p>"
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
       <img src=${dado.imagem} alt="Rio de Janeiro" class="imagem">
   <h2>${dado.titulo}</h2>
           <p><strong>Clima:</strong>${dado.clima}</p>
           <p><strong>Valor médio por dia:</strong>${dado.valor}</p>
           <p><strong>Curiosidades:</strong>${dado.curiosidades}</p>
           <p><strong>População:</strong>${dado.populacao}</p>
           <p><strong>Lugares turísticos:</strong>${dado.lugares}</p>
       <a href=${dado.link} target="_blank">Mais informações</a>
   </div>
`
      }

}

        if (!resultados) {
          resultados = "<p>Nenhuma informação foi encontrada :(</p>"
        }

  // Atribui o HTML gerado à seção de resultados
section.innerHTML = resultados

}
 



