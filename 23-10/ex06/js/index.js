window.addEventListener("load", function () {

    document.getElementById("play").addEventListener("click", iniciarCronometro);
    document.getElementById("pause").addEventListener("click", pausarCronometro);

    var cronometroAleatorio;
    function iniciarCronometro() {
        controlarBtns(false, true);
        cronometroAleatorio = setInterval(exibirNumero, 500);
    }

    function exibirNumero() {
        sorteio = Math.round(Math.random() * 1000) + 1;

        document.getElementById("numero").innerHTML = sorteio;
    };

    function pausarCronometro() {
        controlarBtns(true, false);
        clearInterval(cronometroAleatorio);
    }

    function controlarBtns(play, pause) {
        document.getElementById("pause").disabled = play;
        document.getElementById("play").disabled = pause;
    }

    controlarBtns(true, false);


});