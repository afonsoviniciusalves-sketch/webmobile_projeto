// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <span className={styles.icone}>M</span>
        <span className={styles.nome}>myIT</span>
      </Link>

      <nav className={styles.navegacao}>
        <ul>
          <li><Link href="/produtos">Produtos</Link></li>
        </ul>
      </nav>

      <div className={styles.acoes}>
        <Link href="/login" className={styles.entrar}>ENTRAR</Link>
      </div>
    </header>
  );
}
