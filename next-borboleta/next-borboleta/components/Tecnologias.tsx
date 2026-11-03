// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import styles from "./Tecnologias.module.css";

interface TecnologiasProps {
  lista: string[];
}

export default function Tecnologias({ lista }: TecnologiasProps) {
  return (
    <ul className={styles.tecnologias}>
      {lista.map((tecnologia) => (
        <li key={tecnologia}>{tecnologia}</li>
      ))}
    </ul>
  );
}
