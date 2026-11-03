// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

"use client";

import { useEffect } from "react";

export default function FadeScroll() {
  useEffect(() => {
    const itens = document.querySelectorAll<HTMLElement>(".fade-item");

    function mostrarItens() {
      const limite = window.scrollY + window.innerHeight - 50;
      itens.forEach((item) => {
        if (item.offsetTop < limite) {
          item.style.opacity = "1";
        }
      });
    }

    window.addEventListener("scroll", mostrarItens);
    mostrarItens();

    return () => window.removeEventListener("scroll", mostrarItens);
  }, []);

  return null;
}
