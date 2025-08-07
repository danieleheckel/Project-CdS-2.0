function verificarSenha() {
    var senhasCorretas = {
        "lirio de sangue": "segredo/BlutLilien.html",
        "samael": "img/samael.png",
        "suyane": "img/suyane.png",
        "sra.blutlilien": "img/sra.png"
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