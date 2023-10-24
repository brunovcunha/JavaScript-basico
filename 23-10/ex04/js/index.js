window.addEventListener("load", function(){

    document.getElementById("mostrar").addEventListener("click", iniciarCronometro);

    function iniciarCronometro(){
        const timer = setInterval(exibirNumero, 500);
    }

    function exibirNumero () {
        sorteio = Math.round(Math.random() * 1000) + 1;
        
        document.getElementById("numero").innerHTML = sorteio;
    };











});