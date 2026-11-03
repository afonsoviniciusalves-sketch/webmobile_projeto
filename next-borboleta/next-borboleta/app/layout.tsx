// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projeto Extensionista | myIT",
  description: "Site de apresentação de projetos de um profissional da área de tecnologia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
