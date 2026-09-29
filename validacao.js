// Validação de senha — usada no login.html e no registrar.html

function validarLogin() {
    const senha = document.querySelector("#password").value;
    const erro = document.querySelector("#erroSenha");

    if (senha.length < 6) {
        erro.innerText = "A senha precisa ter no mínimo 6 caracteres.";
        erro.style.display = "block";
        return false; // impede o envio do formulário
    }

    erro.style.display = "none";
    return true; // permite o envio (form.action leva pra produtos.html)
}

function validarCadastro() {
    const senha = document.querySelector("#password").value;
    const confirmarSenha = document.querySelector("#confirm-password").value;
    const erro = document.querySelector("#erroSenha");

    if (senha.length < 6) {
        erro.innerText = "A senha precisa ter no mínimo 6 caracteres.";
        erro.style.display = "block";
        return false;
    }

    if (senha !== confirmarSenha) {
        erro.innerText = "As senhas não coincidem.";
        erro.style.display = "block";
        return false;
    }

    erro.style.display = "none";
    return true;
}
