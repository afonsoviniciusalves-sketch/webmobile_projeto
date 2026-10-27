"use client";

export default function RegistrarPage() {
  const validarCadastro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const senhaInput = document.querySelector("#password") as HTMLInputElement;
    const confirmarInput = document.querySelector("#confirm-password") as HTMLInputElement;
    const erro = document.querySelector("#erroSenha") as HTMLElement;

    if (senhaInput.value.length < 6) {
      erro.innerText = "A senha precisa ter no mínimo 6 caracteres.";
      erro.style.display = "block";
      return;
    }

    if (senhaInput.value !== confirmarInput.value) {
      erro.innerText = "As senhas não coincidem.";
      erro.style.display = "block";
      return;
    }

    erro.style.display = "none";
    window.location.href = "/produtos";
  };

  return (
    <div className="pagina-auth">
      <header className="navbar">
        <a href="/" className="logo">
          <span className="logo-icon">M</span>
          <span className="logo-text">myIT</span>
        </a>
      </header>

      <main className="container">
        <div className="register-card">
          <h1>CRIE SUA CONTA</h1>

          <form className="register-form" onSubmit={validarCadastro}>
            <div className="form-group">
              <label htmlFor="username">NOME DE USUÁRIO</label>
              <input type="text" id="username" placeholder="Digite seu nome completo" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-MAIL</label>
              <input type="email" id="email" placeholder="seuemail@exemplo.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">SENHA</label>
              <input type="password" id="password" placeholder="Digite sua senha" required />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">CONFIRMAR SENHA</label>
              <input type="password" id="confirm-password" placeholder="Confirme sua senha" required />
            </div>

            <p id="erroSenha" className="erro-msg"></p>

            <button type="submit" className="btn-submit">CADASTRAR</button>
          </form>

          <div className="form-footer">
            <p>Já possui uma conta? <a href="/login">Faça Login</a>.</p>
          </div>
        </div>
      </main>
    </div>
  );
}