// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import type { Metadata } from "next";
import FormProjeto from "@/components/FormProjeto";
import Header from "@/components/Header";
import { listar } from "@/lib/db";

export const metadata: Metadata = {
  title: "Editar projeto - Projeto Extensionista | myIT",
};

export function generateStaticParams() {
  return listar().map((projeto) => ({ id: String(projeto.id) }));
}

export default async function EditarProjetoPage({ params }: PageProps<"/produtos/[id]/editar">) {
  const { id } = await params;

  return (
    <>
      <Header />
      <main>
        <FormProjeto id={Number(id)} />
      </main>
    </>
  );
}
