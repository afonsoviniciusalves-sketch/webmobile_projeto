// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import type { Metadata } from "next";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import FormLogin from "@/components/FormLogin";

export const metadata: Metadata = {
  title: "Login - Projeto Extensionista | myIT",
};

export default function LoginPage() {
  return (
    <AuthLayout
      titulo="ENTRAR NA CONTA"
      rodape={<>Ainda não possui uma conta? <Link href="/registrar">Cadastre-se</Link>.</>}
    >
      <FormLogin />
    </AuthLayout>
  );
}
