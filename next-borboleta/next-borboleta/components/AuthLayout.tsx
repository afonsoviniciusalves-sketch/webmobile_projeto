// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./AuthLayout.module.css";

interface AuthLayoutProps {
  titulo: string;
  rodape: ReactNode;
  children: ReactNode;
}

export default function AuthLayout({ titulo, rodape, children }: AuthLayoutProps) {
  return (
    <div className={styles.pagina}>
      <header className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>M</span>
          <span className={styles.logoText}>myIT</span>
        </Link>
      </header>

      <main className={styles.container}>
        <div className={styles.card}>
          <h1>{titulo}</h1>
          {children}
          <div className={styles.rodape}>
            <p>{rodape}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
