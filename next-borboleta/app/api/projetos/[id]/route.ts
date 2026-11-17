// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import { connection } from "next/server";
import { atualizar, buscar, excluir } from "@/lib/db";
import { validarProjeto } from "@/lib/validacao";

export async function GET(_request: Request, { params }: RouteContext<"/api/projetos/[id]">) {
  await connection();
  const { id } = await params;
  const projeto = buscar(Number(id));

  if (!projeto) {
    return Response.json({ erro: "Projeto não encontrado" }, { status: 404 });
  }

  return Response.json(projeto);
}

export async function PUT(request: Request, { params }: RouteContext<"/api/projetos/[id]">) {
  const { id } = await params;
  const dados = await request.json().catch(() => null);
  const projeto = validarProjeto(dados);

  if (!projeto) {
    return Response.json({ erro: "Dados inválidos" }, { status: 400 });
  }

  const atualizado = atualizar(Number(id), projeto);

  if (!atualizado) {
    return Response.json({ erro: "Projeto não encontrado" }, { status: 404 });
  }

  return Response.json(atualizado);
}

export async function DELETE(_request: Request, { params }: RouteContext<"/api/projetos/[id]">) {
  const { id } = await params;

  if (!excluir(Number(id))) {
    return Response.json({ erro: "Projeto não encontrado" }, { status: 404 });
  }

  return Response.json({ mensagem: "Projeto excluído" });
}
