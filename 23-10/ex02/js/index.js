window.addEventListener("load", function(){

    document.getElementById("mostrar").addEventListener("click", iniciarCronometro);

    function iniciarCronometro(){
        const timer = setTimeout(exibirNome, 3000);
    }

    function exibirNome () {
        document.getElementById("name").innerHTML = "Jequiti";
    };











});