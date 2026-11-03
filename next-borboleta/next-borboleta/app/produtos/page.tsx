// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import type { Metadata } from "next";
import FadeScroll from "@/components/FadeScroll";
import Header from "@/components/Header";
import ListaProjetos from "@/components/ListaProjetos";
import styles from "./produtos.module.css";

export const metadata: Metadata = {
  title: "Produtos - Projeto Extensionista | myIT",
};

export default function ProdutosPage() {
  return (
    <>
      <FadeScroll />
      <Header />

      <main>
        <section className={styles.topo}>
          <h1 className="fade-item">NOSSOS PROJETOS</h1>
          <p className="fade-item">Conheça os projetos desenvolvidos por um único profissional, responsável por todas as soluções apresentadas no site.</p>
        </section>

        <ListaProjetos />
      </main>
    </>
  );
}
