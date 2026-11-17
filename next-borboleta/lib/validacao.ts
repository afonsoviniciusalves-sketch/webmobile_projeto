// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import type { NovoProjeto } from "./db";

export function validarProjeto(dados: unknown): NovoProjeto | null {
  if (typeof dados !== "object" || dados === null) {
    return null;
  }

  const { nome, descricao, detalhes, autor, prazo, preco, tecnologias } =
    dados as Record<string, unknown>;

  const textos = [nome, descricao, detalhes, prazo, preco];
  const textosValidos = textos.every(
    (texto) => typeof texto === "string" && texto.trim() !== ""
  );

  const tecnologiasValidas =
    Array.isArray(tecnologias) &&
    tecnologias.length > 0 &&
    tecnologias.every((tec) => typeof tec === "string" && tec.trim() !== "");

  if (!textosValidos || !tecnologiasValidas) {
    return null;
  }

  return {
    nome: (nome as string).trim(),
    descricao: (descricao as string).trim(),
    detalhes: (detalhes as string).trim(),
    autor: typeof autor === "string" && autor.trim() !== "" ? autor.trim() : "Desenvolvedor myIT",
    prazo: (prazo as string).trim(),
    preco: (preco as string).trim(),
    tecnologias: (tecnologias as string[]).map((tec) => tec.trim()),
  };
}
