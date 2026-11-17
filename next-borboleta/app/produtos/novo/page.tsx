// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import type { Metadata } from "next";
import FormProjeto from "@/components/FormProjeto";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Novo projeto - Projeto Extensionista | myIT",
};

export default function NovoProjetoPage() {
  return (
    <>
      <Header />
      <main>
        <FormProjeto />
      </main>
    </>
  );
}
