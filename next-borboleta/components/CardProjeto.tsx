// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import type { Projeto } from "@/types/projeto";
import BotaoLink from "./BotaoLink";
import Tecnologias from "./Tecnologias";
import styles from "./CardProjeto.module.css";

interface CardProjetoProps {
  projeto: Projeto;
}

export default function CardProjeto({ projeto }: CardProjetoProps) {
  return (
    <article className={styles.card}>
      <h3>{projeto.nome}</h3>
      <p>{projeto.descricao}</p>
      <Tecnologias lista={projeto.tecnologias} />
      <div className={styles.acao}>
        <BotaoLink href={`/produtos/${projeto.id}`}>VER PROJETO</BotaoLink>
      </div>
    </article>
  );
}
