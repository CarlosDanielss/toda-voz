import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Campos comuns a todo .md do context/ (ver context/README.md).
const base = {
  titulo: z.string(),
  descricao: z.string(),
  atualizado: z.coerce.date(),
  status: z.string(),
  ordem: z.number().optional(),
};

// Números de destaque (objetivo) e cards de descobertas.
const destaque = z.object({
  valor: z.string().optional(),
  rotulo: z.string().optional(),
  nota: z.string().optional(),
  titulo: z.string().optional(),
  texto: z.string().optional(),
});

// Obstáculo → possível solução → decisão.
const obstaculo = z.object({
  tema: z.string(),
  obstaculo: z.string(),
  solucao: z.string(),
  decisao: z.enum(['decidido', 'em-avaliacao', 'descartado']),
  adr: z.string().regex(/^\d{4}$/).optional(),
  destaque: z.boolean().optional(),
});

// Fases do roteiro, com marcos.
const fase = z.object({
  id: z.string(),
  titulo: z.string(),
  texto: z.string(),
  status: z.enum(['concluida', 'atual', 'proxima', 'futura']),
  marcos: z.array(z.object({ texto: z.string(), feito: z.boolean() })),
});

const contexto = defineCollection({
  loader: glob({ base: '../../context', pattern: '*.md' }),
  schema: z.object({
    ...base,
    inicio: z.coerce.date().optional(),
    resumo: z.array(z.string()).optional(),
    porque_comecei: z.string().optional(),
    destaques: z.array(destaque).optional(),
    principios: z.array(z.object({ titulo: z.string(), texto: z.string() })).optional(),
    itens: z.array(obstaculo).optional(),
    fases: z
      .array(fase)
      .refine((fs) => fs.filter((f) => f.status === 'atual').length <= 1, 'Só uma fase pode estar como "atual".')
      .optional(),
  }),
});

const modulos = defineCollection({
  loader: glob({ base: '../../context/modulos', pattern: '[0-9]*.md' }),
  schema: z.object({
    ...base,
    ordem: z.number(),
    fase: z.coerce.string(),
  }),
});

const decisoes = defineCollection({
  loader: glob({ base: '../../context/decisoes', pattern: '[0-9]*.md' }),
  schema: z.object({
    ...base,
    status: z.enum(['proposta', 'aceita', 'rejeitada']).or(z.string().startsWith('substituída')),
    data: z.coerce.date(),
  }),
});

const pesquisa = defineCollection({
  loader: glob({ base: '../../context/pesquisa', pattern: '*.md' }),
  schema: z.object(base),
});

export const collections = { contexto, modulos, decisoes, pesquisa };
