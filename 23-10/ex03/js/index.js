window.addEventListener("load", function(){

    document.getElementById("mostrar").addEventListener("click", iniciarCronometro);

    function iniciarCronometro(){
        const timer = setTimeout(exibirNumero, 1000);
    }

    function exibirNumero () {
        sorteio = Math.round(Math.random() * 10) + 1;
        
        document.getElementById("numero").innerHTML = sorteio;
    };











});