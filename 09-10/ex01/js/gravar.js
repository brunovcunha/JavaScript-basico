gravar = document.getElementById("cadastrar");

gravar.addEventListener("click", cadastro);

function cadastro() {
    nome = document.getElementById("nome").value;
    senha = document.getElementById("senha").value;

    localStorage.setItem("username", `${nome}`);
    localStorage.setItem("password", `${senha}`);

    alert("Usuário cadastrado!")

}
