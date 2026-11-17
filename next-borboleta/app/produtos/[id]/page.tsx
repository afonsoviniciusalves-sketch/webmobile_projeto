// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import type { Metadata } from "next";
import Header from "@/components/Header";
import DetalheProjeto from "@/components/DetalheProjeto";
import { listar } from "@/lib/db";

export const metadata: Metadata = {
  title: "Detalhes do projeto - Projeto Extensionista | myIT",
};

export function generateStaticParams() {
  return listar().map((projeto) => ({ id: String(projeto.id) }));
}

export default async function ProjetoPage({ params }: PageProps<"/produtos/[id]">) {
  const { id } = await params;

  return (
    <>
      <Header />
      <main>
        <DetalheProjeto id={Number(id)} />
      </main>
    </>
  );
}
