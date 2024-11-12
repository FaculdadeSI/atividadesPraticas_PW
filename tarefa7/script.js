// Função para calcular o IMC
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc = peso / (altura * altura);
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Seu IMC é: <strong>${imc.toFixed(2)}</strong>`;
}

// Função para calcular a idade
function calcularIdade() {
    const dataNascimento = new Date(document.getElementById("dataNascimento").value);
    const hoje = new Date();
    const diff = hoje - dataNascimento;

    // Calcular anos
    const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

    // Calcular dias restantes após subtrair os anos
    const diasRestantes = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));

    // Calcular horas, minutos e segundos
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Idade: <strong>${anos}</strong> anos, <strong>${diasRestantes}</strong> dias, <strong>${horas}</strong> horas, <strong>${minutos}</strong> minutos, <strong>${segundos}</strong> segundos`;
}

// Função para salvar o cookie
function salvarCookie() {
    alert("Cookie será testado em breve.");
}

// Função para redirecionar para a página de resumo
function redirecionarParaResumo() {
    const formData = new FormData(document.getElementById("myForm"));
    const resumoObj = {};

    for (const pair of formData.entries()) {
        resumoObj[pair[0]] = pair[1];
    }

    // Armazenar o resumo em localStorage como um objeto JSON
    localStorage.setItem("cadastroResumo", JSON.stringify(resumoObj));

    // Redirecionar para a página de resumo
    window.location.href = "ResumoCadastro.html";
}

// Vincular funções aos botões
document.getElementById("calcularIMC").addEventListener("click", calcularIMC);
document.getElementById("calcularIdade").addEventListener("click", calcularIdade);
document.getElementById("salvarCookie").addEventListener("click", salvarCookie);
document.getElementById("cadastrar").addEventListener("click", redirecionarParaResumo);
