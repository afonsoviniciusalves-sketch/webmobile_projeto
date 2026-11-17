// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from "./Formulario.module.css";

export default function FormRegistrar() {
  const router = useRouter();
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [erro, setErro] = useState("");

  function validarCadastro(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (senha.length < 6) {
      setErro("A senha precisa ter no mínimo 6 caracteres.");
      return;
    }

    if (senha !== confirmar) {
      setErro("As senhas não coincidem.");
      return;
    }

    setErro("");
    router.push("/produtos");
  }

  return (
    <form className={styles.form} onSubmit={validarCadastro}>
      <div className={styles.grupo}>
        <label htmlFor="username">NOME DE USUÁRIO</label>
        <input type="text" id="username" placeholder="Digite seu nome completo" required />
      </div>

      <div className={styles.grupo}>
        <label htmlFor="email">E-MAIL</label>
        <input type="email" id="email" placeholder="seuemail@exemplo.com" required />
      </div>

      <div className={styles.grupo}>
        <label htmlFor="password">SENHA</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </div>

      <div className={styles.grupo}>
        <label htmlFor="confirm-password">CONFIRMAR SENHA</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirme sua senha"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          required
        />
      </div>

      {erro && <p className={styles.erro} role="alert">{erro}</p>}

      <button type="submit" className={styles.enviar}>CADASTRAR</button>
    </form>
  );
}
