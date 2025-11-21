function verificarSenha() {
    var senhasCorretas = {
        "lirio de sangue": "segredo/BlutLilien.html",
        "ela foi a primeira": "segredo/depoimento.html",
    };

    var senhaDigitada = document.getElementById ("senha").value.trim();

    if (senhasCorretas.hasOwnProperty(senhaDigitada)) {
        console.log("Redirecionando para:", senhasCorretas[senhaDigitada]);
        window.location.href = senhasCorretas[senhaDigitada];
    } else {
        console.error("Senha incorreta:", senhaDigitada);
        alert("Tente outro");
    }
}