window.addEventListener('load', function(){
    this.document.getElementById('btnValidar').addEventListener('click', function(){

        var padrao = /^ \d/; //inicia com espaço e um numero
        var padrao = /\d$/; //termina com um numero
        var padrao = / \d \d$/; //expressão para validar".... 2 2"
        var padrao = /^\d\d-\d\d-\d\d\d\d$/ //valida uma data 

        var padrao = /^\d\d\d\d\d-\d\d\d\d$/; //valida telefone 00000-0000
        var padrao = /^\d\d\d-\d\d\d-\d\d\d-\d\d$/; //valida cpf 000-000-000-00
        var padrao = /^\d{5}-\d{4}$/; //valida telefone 00000-0000
        var padrao = /^\d{4,5}-\d{4}$/; //valida telefone 00000-0000
        var padrao = /^[02468]$/;
        var padrao = /^[ban ]{1,}$/i;
        var padrao = /^[a-z ]+$/i;
        var padrao = /^ift(m?)-[6-9]{4,6}-(tspi|mkt|lco):\d\s[^aeiou]$/i;
        var padrao = /^\w{4}$/i;
        var padrao = /^\W{4}$/i;
        
        var info = document.getElementById("txtInfo").value;

        if(padrao.test(info))
          alert("valido")
        else
          alert("invalido")

    });


});