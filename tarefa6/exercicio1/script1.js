// Variáveis para armazenar os dados
var nome = ""; 
var email = ""; 
var numeroDeUsuarios = 0; 

// Evento para o botão "Digitar Nome"
document.getElementById("digitarNome").onclick = function () {
    nome = prompt("Digite o nome:"); 
};

// Evento para o botão "Digitar Email"
document.getElementById("digitarEmail").onclick = function () {
    email = prompt("Digite o e-mail:");
};

// Evento para o botão "Cadastrar"
document.getElementById("cadastrar").onclick = function () {
    var confirmacao = confirm("Deseja cadastrar as informações?"); 

    if (confirmacao) {
        numeroDeUsuarios++; 
        var info = "Usuário número: " + numeroDeUsuarios + "\n";
        info += "Nome: " + nome + "\n"; 
        info += "E-mail: " + email + "\n"; 
        info += "--------------------------\n"; 

        var output = document.getElementById("output");
        output.value += info; 
    } else {
        alert("Cadastro cancelado."); 
    }
};

// Evento para o botão "Limpar"
document.getElementById("limpar").onclick = function () {
    numeroDeUsuarios = 0; 
    nome = ""; 
    email = ""; 
    var output = document.getElementById("output");
    output.value = ""; 
};

// Exibe a data atual
var dataAtual = new Date();
var dia = dataAtual.getDate(); 
var mes = dataAtual.getMonth() + 1; 
var ano = dataAtual.getFullYear(); 
var dataElement = document.getElementById("data");
dataElement.textContent = "Hoje: " + dia + "/" + mes + "/" + ano; 
