// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

"use client";

import { useEffect, useState } from "react";
import type { Projeto } from "@/types/projeto";
import BotaoLink from "./BotaoLink";
import CardProjeto from "./CardProjeto";
import styles from "./ListaProjetos.module.css";

export default function ListaProjetos() {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [filtro, setFiltro] = useState("todos");
  const [ordenado, setOrdenado] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch("/api/projetos", { cache: "no-store" })
      .then((resposta) => resposta.json())
      .then((dados: Projeto[]) => setProjetos(dados))
      .catch(() => setErro(true))
      .finally(() => setCarregando(false));
  }, []);

  const tecnologias = projetos.reduce<string[]>((acumulado, projeto) => {
    const novas = projeto.tecnologias.filter((tec) => !acumulado.includes(tec));
    return [...acumulado, ...novas];
  }, []);

  const filtrados =
    filtro === "todos"
      ? projetos
      : projetos.filter((projeto) => projeto.tecnologias.includes(filtro));

  const exibidos = ordenado
    ? [...filtrados].sort((a, b) => a.nome.localeCompare(b.nome))
    : filtrados;

  return (
    <>
      <section className={styles.filtrosSecao}>
        <div className={`fade-item ${styles.filtros}`}>
          {["todos", ...tecnologias].map((tec) => (
            <button
              key={tec}
              className={`${styles.filtroBtn} ${filtro === tec ? styles.ativo : ""}`}
              onClick={() => setFiltro(tec)}
            >
              {tec === "todos" ? "Todos" : tec}
            </button>
          ))}
        </div>
        <button
          className={`fade-item ${styles.ordenarBtn}`}
          onClick={() => setOrdenado(true)}
        >
          Ordenar por nome (A-Z)
        </button>
        <p className={styles.novo}>
          <BotaoLink href="/produtos/novo">NOVO PROJETO</BotaoLink>
        </p>
      </section>

      <section className={styles.gridSecao}>
        {carregando && <p className={styles.aviso}>Carregando projetos...</p>}
        {erro && <p className={styles.erro}>Não foi possível carregar os projetos.</p>}
        {!carregando && !erro && exibidos.length === 0 && (
          <p className={styles.aviso}>Nenhum projeto encontrado.</p>
        )}
        <div className={styles.grid}>
          {exibidos.map((projeto) => (
            <CardProjeto key={projeto.id} projeto={projeto} />
          ))}
        </div>
      </section>
    </>
  );
}
