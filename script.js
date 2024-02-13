function trocarIcone() {
    var iconeAtual = document.getElementById("icone");
    var senhaAtual = document.getElementById("password");
    if (iconeAtual.src.endsWith("imagens/eye.png")) {
        iconeAtual.src = "imagens/closed-eyes.png";
        iconeAtual.alt = "imagnes/closed-eyes.png";
        senhaAtual.type = 'password';
    } else {
        iconeAtual.src = "imagens/eye.png";
        iconeAtual.alt = "imagens/eye.png";
        senhaAtual.type = 'text';
    }
}

function redirecionarLinkedin(){
    window.location.href = 'https://www.linkedin.com/in/rodrigo-kunzler-weber-0b9b5a273/';
}