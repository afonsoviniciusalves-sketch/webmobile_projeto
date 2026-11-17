// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import type { Metadata } from "next";
import Link from "next/link";
import BotaoLink from "@/components/BotaoLink";
import FadeScroll from "@/components/FadeScroll";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Tecnologias from "@/components/Tecnologias";
import { passos } from "@/data/passos";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "Home - Projeto Extensionista | myIT",
};

export default function Home() {
  return (
    <div className={styles.pagina}>
      <FadeScroll />
      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroConteudo}>
            <h1 className="fade-item">FAÇA PARTE DO PROJETO EXTENSIONISTA</h1>
            <Link href="/registrar" className="fade-item">FAÇA PARTE!</Link>

            <span className={`fade-item ${styles.descubraMais}`}>
              <span>↓</span> Mais informações abaixo
            </span>
          </div>
        </section>

        <section className={styles.sobre} id="sobre">
          <h2 className="fade-item">COMO FUNCIONA</h2>

          <ol className={styles.passos}>
            {passos.map((passo, indice) => (
              <li key={passo.titulo} className={`fade-item ${styles.passo}`}>
                <span className={styles.passoNumero}>{indice + 1}</span>
                <h3>{passo.titulo}</h3>
                <p>{passo.texto}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.projetos} id="produtos">
          <header>
            <h2 className="fade-item">EXEMPLO DE PROJETO</h2>
          </header>

          <article className={`fade-item ${styles.cardProjeto}`}>
            <div className={styles.cardConteudo}>
              <h3>Nome do Projeto</h3>
              <p>Exemplo de uma solução desenvolvida pelo responsável pelo site. Aqui você pode conhecer a proposta, as tecnologias utilizadas e entrar em contato caso tenha interesse em um projeto semelhante.</p>
              <Tecnologias lista={["HTML", "CSS", "JavaScript"]} />
              <BotaoLink href="/login">VER PROJETO</BotaoLink>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
