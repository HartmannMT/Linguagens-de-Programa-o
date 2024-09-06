function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let barraPesquisa = document.getElementById("barra-pesquisa").value.toLowerCase();
    let filtroDificuldade = document.getElementById("filtro-dificuldade").value;
    let resultados = "";

    // Filtra os dados com base na pesquisa e no filtro de dificuldade
    let dadosFiltrados = dados.filter(dado => {
        let nomeMatch = dado.nome.toLowerCase().includes(barraPesquisa);
        let dificuldadeMatch = filtroDificuldade === "" || dado.nivelDificuldade === filtroDificuldade;
        return nomeMatch && dificuldadeMatch;
    });

    // Exibe os dados filtrados
    for (let dado of dadosFiltrados) {
        resultados += `
            <div class="item-resultado">
                <img src="${dado.linkImagem}" alt="${dado.nome}" class="imagem-boss" onclick="abrirModal('${dado.linkImagem}')">
                <h2>${dado.nome}</h2>
                <p>${dado.descricao}</p>
                <p><strong>Dificuldade:</strong> ${dado.nivelDificuldade}</p>
                <a href="${dado.linkMaisInformacoes}" target="_blank">Mais Informações</a>
                <a href="${dado.linkDocumentacao}" target="_blank">Documentação</a>
            </div>
        `;
    }

    // Caso não haja resultados
    if (dadosFiltrados.length === 0) {
        resultados = "<p>Nenhum resultado encontrado.</p>";
    }

    section.innerHTML = resultados;
}

// Função para abrir o modal com a imagem ampliada
function abrirModal(imagemSrc) {
    let modal = document.getElementById("modal");
    let modalImagem = document.getElementById("modal-imagem");
    modal.style.display = "flex";
    modalImagem.src = imagemSrc;
}

// Função para fechar o modal
function fecharModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}
