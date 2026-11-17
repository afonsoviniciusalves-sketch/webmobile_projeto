// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./BotaoLink.module.css";

interface BotaoLinkProps {
  href: string;
  children: ReactNode;
}

export default function BotaoLink({ href, children }: BotaoLinkProps) {
  return (
    <Link href={href} className={styles.botao}>
      {children}
    </Link>
  );
}
