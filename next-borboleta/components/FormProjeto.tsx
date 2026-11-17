// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Projeto } from "@/types/projeto";
import styles from "./FormProjeto.module.css";

interface FormProjetoProps {
  id?: number;
}

const camposVazios = {
  nome: "",
  descricao: "",
  detalhes: "",
  prazo: "",
  preco: "",
  tecnologias: "",
};

export default function FormProjeto({ id }: FormProjetoProps) {
  const router = useRouter();
  const [campos, setCampos] = useState(camposVazios);
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    if (id === undefined) {
      return;
    }

    fetch(`/api/projetos/${id}`, { cache: "no-store" })
      .then((resposta) => (resposta.ok ? resposta.json() : null))
      .then((projeto: Projeto | null) => {
        if (!projeto) {
          setErro("Projeto não encontrado.");
          return;
        }
        setCampos({
          nome: projeto.nome,
          descricao: projeto.descricao,
          detalhes: projeto.detalhes,
          prazo: projeto.prazo,
          preco: projeto.preco,
          tecnologias: projeto.tecnologias.join(", "),
        });
      })
      .catch(() => setErro("Não foi possível carregar o projeto."));
  }, [id]);

  function alterarCampo(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setCampos({ ...campos, [e.target.name]: e.target.value });
  }

  async function enviarFormulario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const tecnologias = campos.tecnologias
      .split(",")
      .map((tec) => tec.trim())
      .filter((tec) => tec !== "");

    if (tecnologias.length === 0) {
      setErro("Informe ao menos uma tecnologia, separadas por vírgula.");
      return;
    }

    setEnviando(true);
    setErro("");

    try {
      const resposta = await fetch(id === undefined ? "/api/projetos" : `/api/projetos/${id}`, {
        method: id === undefined ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...campos, tecnologias }),
      });

      if (!resposta.ok) {
        throw new Error();
      }

      const salvo: Projeto = await resposta.json();
      router.push(`/produtos/${salvo.id}`);
    } catch {
      setErro("Não foi possível salvar. Confira se todos os campos foram preenchidos.");
      setEnviando(false);
    }
  }

  return (
    <section className={styles.secao}>
      <article className={styles.card}>
        <h1>{id === undefined ? "NOVO PROJETO" : "EDITAR PROJETO"}</h1>

        <form className={styles.form} onSubmit={enviarFormulario}>
          <label>
            NOME
            <input name="nome" value={campos.nome} onChange={alterarCampo} required />
          </label>

          <label>
            DESCRIÇÃO CURTA
            <input name="descricao" value={campos.descricao} onChange={alterarCampo} required />
          </label>

          <label>
            DETALHES
            <textarea name="detalhes" value={campos.detalhes} onChange={alterarCampo} rows={4} required />
          </label>

          <label>
            PRAZO
            <input name="prazo" value={campos.prazo} onChange={alterarCampo} placeholder="30 dias" required />
          </label>

          <label>
            VALOR
            <input name="preco" value={campos.preco} onChange={alterarCampo} placeholder="R$ 1.000" required />
          </label>

          <label>
            TECNOLOGIAS (SEPARADAS POR VÍRGULA)
            <input name="tecnologias" value={campos.tecnologias} onChange={alterarCampo} placeholder="HTML, CSS, JavaScript" required />
          </label>

          {erro && <p className={styles.erro} role="alert">{erro}</p>}

          <button type="submit" className={styles.enviar} disabled={enviando}>
            {id === undefined ? "CADASTRAR PROJETO" : "SALVAR ALTERAÇÕES"}
          </button>

          <Link href={id === undefined ? "/produtos" : `/produtos/${id}`} className={styles.cancelar}>
            Cancelar
          </Link>
        </form>
      </article>
    </section>
  );
}
