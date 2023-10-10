usuario = localStorage.getItem("username");
senha = localStorage.getItem("password");


if(!usuario || !senha){
    document.getElementById("username").innerHTML = "-";

    document.getElementById("password").innerHTML = "-";
}else{
    document.getElementById("username").innerHTML = usuario;

    document.getElementById("password").innerHTML = senha;
}
