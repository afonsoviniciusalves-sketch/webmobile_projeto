"use client";

export default function LoginPage() {
  const validarLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const senhaInput = document.querySelector("#password") as HTMLInputElement;
    const erro = document.querySelector("#erroSenha") as HTMLElement;

    if (senhaInput.value.length < 6) {
      erro.innerText = "A senha precisa ter no mínimo 6 caracteres.";
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
        <div className="login-card">
          <h1>ENTRAR NA CONTA</h1>

          <form className="login-form" onSubmit={validarLogin}>
            <div className="form-group">
              <label htmlFor="email">E-MAIL</label>
              <input type="email" id="email" placeholder="seuemail@exemplo.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">SENHA</label>
              <input type="password" id="password" placeholder="Digite sua senha" required />
            </div>

            <p id="erroSenha" className="erro-msg"></p>

            <button type="submit" className="btn-submit">ENTRAR</button>
          </form>

          <div className="form-footer">
            <p>Ainda não possui uma conta? <a href="/registrar">Cadastre-se</a>.</p>
          </div>
        </div>
      </main>
    </div>
  );
}