function responder(resposta) {
    const mensagem = document.getElementById("resposta");

    if (resposta === "sim") {
        mensagem.textContent = "Ótimo, obrigado por responder.";
    } else {
        mensagem.textContent = "Você tem sorte parabéns.";
    }
}
