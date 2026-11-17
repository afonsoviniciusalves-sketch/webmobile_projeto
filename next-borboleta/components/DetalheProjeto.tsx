// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Projeto } from "@/types/projeto";
import BotaoLink from "./BotaoLink";
import Tecnologias from "./Tecnologias";
import styles from "./DetalheProjeto.module.css";

interface DetalheProjetoProps {
  id: number;
}

export default function DetalheProjeto({ id }: DetalheProjetoProps) {
  const router = useRouter();
  const [projeto, setProjeto] = useState<Projeto | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [confirmando, setConfirmando] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch(`/api/projetos/${id}`, { cache: "no-store" })
      .then((resposta) => (resposta.ok ? resposta.json() : null))
      .then((dados: Projeto | null) => setProjeto(dados))
      .catch(() => setProjeto(null))
      .finally(() => setCarregando(false));
  }, [id]);

  async function excluirProjeto() {
    try {
      const resposta = await fetch(`/api/projetos/${id}`, { method: "DELETE" });
      if (!resposta.ok) {
        throw new Error();
      }
      router.push("/produtos");
    } catch {
      setErro("Não foi possível excluir o projeto.");
      setConfirmando(false);
    }
  }

  return (
    <section className={styles.secao}>
      <article className={styles.card}>
        {carregando && <p>Carregando projeto...</p>}

        {!carregando && !projeto && (
          <>
            <h2>Projeto não encontrado</h2>
            <p>O projeto solicitado não existe ou foi excluído.</p>
          </>
        )}

        {projeto && (
          <>
            <h2>{projeto.nome}</h2>
            <p className={styles.autor}>Desenvolvido por {projeto.autor}</p>
            <p>{projeto.detalhes}</p>

            <dl className={styles.info}>
              <dt>PRAZO</dt>
              <dd>{projeto.prazo}</dd>
              <dt>VALOR</dt>
              <dd>{projeto.preco}</dd>
            </dl>

            <Tecnologias lista={projeto.tecnologias} />
          </>
        )}

        {erro && <p className={styles.erro} role="alert">{erro}</p>}

        {!carregando && (
          <footer className={styles.acoes}>
            <BotaoLink href="/produtos">VOLTAR AOS PROJETOS</BotaoLink>
            {projeto && <BotaoLink href={`/produtos/${projeto.id}/editar`}>EDITAR</BotaoLink>}
            {projeto && !confirmando && (
              <button className={styles.excluir} onClick={() => setConfirmando(true)}>
                EXCLUIR
              </button>
            )}
            {projeto && confirmando && (
              <>
                <button className={styles.excluir} onClick={excluirProjeto}>
                  CONFIRMAR EXCLUSÃO
                </button>
                <button className={styles.cancelar} onClick={() => setConfirmando(false)}>
                  CANCELAR
                </button>
              </>
            )}
          </footer>
        )}
      </article>
    </section>
  );
}
