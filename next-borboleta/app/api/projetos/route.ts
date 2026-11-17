// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import { connection } from "next/server";
import { criar, listar } from "@/lib/db";
import { validarProjeto } from "@/lib/validacao";

export async function GET() {
  await connection();
  return Response.json(listar());
}

export async function POST(request: Request) {
  const dados = await request.json().catch(() => null);
  const projeto = validarProjeto(dados);

  if (!projeto) {
    return Response.json({ erro: "Dados inválidos" }, { status: 400 });
  }

  return Response.json(criar(projeto), { status: 201 });
}
