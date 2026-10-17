// Dados gerais do projeto usados em todo o site: versão, data de início, fase atual e rotas das decisões.
import { getCollection, getEntry } from 'astro:content';
import pacote from '../../../../package.json';

export const versao: string = pacote.version;

const dataLonga = (d: Date) =>
  d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export async function dadosDoProjeto() {
  const objetivo = await getEntry('contexto', 'objetivo-e-motivacao');
  const roteiro = await getEntry('contexto', 'roteiro');
  if (!objetivo?.data.inicio) throw new Error('Falta "inicio" em context/objetivo-e-motivacao.md');

  const faseAtual = roteiro?.data.fases?.find((f) => f.status === 'atual');
  return {
    versao,
    inicio: objetivo.data.inicio,
    inicioISO: objetivo.data.inicio.toISOString().slice(0, 10),
    inicioTexto: dataLonga(objetivo.data.inicio),
    faseAtual,
    faseAtualTexto: faseAtual ? `Fase ${faseAtual.id}: ${faseAtual.titulo}` : 'Sem fase atual',
  };
}

/** { "0004": "/decisoes/0004-licenca/" }, para links a partir do número da decisão. */
export async function rotasDasDecisoes() {
  const decisoes = await getCollection('decisoes');
  return Object.fromEntries(decisoes.map((d) => [d.id.slice(0, 4), `/decisoes/${d.id}/`]));
}

/** Garante que todo obstáculo que cita uma decisão aponta para uma decisão existente. */
export function conferirDecisoesCitadas(itens: { adr?: string }[], rotas: Record<string, string>) {
  for (const i of itens) {
    if (i.adr && !rotas[i.adr]) throw new Error(`Obstáculo cita a decisão ${i.adr}, que não existe em context/decisoes/.`);
  }
}
