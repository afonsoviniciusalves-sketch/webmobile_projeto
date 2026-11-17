// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import type { Projeto } from "@/types/projeto";
import BotaoLink from "./BotaoLink";
import Tecnologias from "./Tecnologias";
import styles from "./DetalheProjeto.module.css";

interface DetalheProjetoProps {
  projeto: Projeto;
}

export default function DetalheProjeto({ projeto }: DetalheProjetoProps) {
  return (
    <section className={styles.secao}>
      <article className={styles.card}>
        <h2>{projeto.nome}</h2>
        <p className={styles.autor}>Desenvolvido por {projeto.autor}</p>
        <p>{projeto.detalhes}</p>

        <div className={styles.info}>
          <div>
            <span>PRAZO</span>
            <strong>{projeto.prazo}</strong>
          </div>
          <div>
            <span>VALOR</span>
            <strong>{projeto.preco}</strong>
          </div>
        </div>

        <Tecnologias lista={projeto.tecnologias} />

        <BotaoLink href="/produtos">VOLTAR AOS PROJETOS</BotaoLink>
      </article>
    </section>
  );
}
