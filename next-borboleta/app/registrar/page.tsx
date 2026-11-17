// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import type { Metadata } from "next";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import FormRegistrar from "@/components/FormRegistrar";

export const metadata: Metadata = {
  title: "Cadastro - Projeto Extensionista | myIT",
};

export default function RegistrarPage() {
  return (
    <AuthLayout
      titulo="CRIE SUA CONTA"
      rodape={<>Já possui uma conta? <Link href="/login">Faça Login</Link>.</>}
    >
      <FormRegistrar />
    </AuthLayout>
  );
}
