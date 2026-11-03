// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import DetalheProjeto from "@/components/DetalheProjeto";
import { projetos } from "@/data/projetos";

export const metadata: Metadata = {
  title: "Detalhes do projeto - Projeto Extensionista | myIT",
};

export function generateStaticParams() {
  return projetos.map((projeto) => ({ id: String(projeto.id) }));
}

export default async function ProjetoPage({ params }: PageProps<"/produtos/[id]">) {
  const { id } = await params;
  const projeto = projetos.find((item) => item.id === Number(id));

  if (!projeto) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <DetalheProjeto projeto={projeto} />
      </main>
    </>
  );
}
