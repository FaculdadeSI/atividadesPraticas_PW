var numeroDeUsuarios = 0;

// Função para o botão "Cadastrar"
document.getElementById("cadastrar").onclick = function () {
    var nome = document.getElementById("nome").value; 
    var email = document.getElementById("email").value; 

    // Verifica se os campos de nome e email não estão vazios e confirma o cadastro
    if (nome.trim() !== "" && email.trim() !== "") {
        var confirmacao = confirm("Deseja cadastrar as informações?");

        if (confirmacao) {
            numeroDeUsuarios++;

            var info = "Usuário número: " + numeroDeUsuarios + "\n";
            info += "Nome: " + nome + "\n";
            info += "E-mail: " + email + "\n";
            info += "--------------------------\n";

            var output = document.getElementById("output");
            output.value += info;
        }
    } else {
        alert("Preencha os campos Nome e E-mail.");
    }
};

// Função para o botão "Limpar"
document.getElementById("limpar").onclick = function () {
    numeroDeUsuarios = 0; 
    document.getElementById("nome").value = ""; 
    document.getElementById("email").value = ""; 

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
