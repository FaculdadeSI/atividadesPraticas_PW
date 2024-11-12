// Recuperar o resumo do cadastro do localStorage
const resumo = localStorage.getItem("cadastroResumo");

// Exibir o resumo no elemento com o id "cadastroResumo"
if (resumo) {
    const resumoObj = JSON.parse(resumo);
    document.getElementById("nome").textContent = resumoObj.nome;
    document.getElementById("email").textContent = resumoObj.email;
    document.getElementById("dataNascimento").textContent = resumoObj.dataNascimento;
    document.getElementById("peso").textContent = resumoObj.peso;
    document.getElementById("altura").textContent = resumoObj.altura;
} else {
    document.getElementById("cadastroResumo").textContent = "Nenhum resumo disponível.";
}

// Função para voltar para a página anterior (formulário)
function voltarParaFormulario() {
    window.location.href = "index.html";
}
