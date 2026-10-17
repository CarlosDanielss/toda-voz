// Página inicial do Toda Voz. Renderizada como HTML estático (sem JavaScript no navegador).
// Todo o conteúdo vem do context/ (ver src/pages/index.astro).
import type { ReactNode } from 'react';
import { ArrowRight, CalendarDays, MapPin, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Roadmap, type Fase } from '@/components/Roadmap';
import { Obstaculos, type Obstaculo } from '@/components/Obstaculos';
import { StatusBadge } from '@/components/StatusBadge';
import { cn } from '@/lib/utils';

const ALT_ILUSTRACAO =
  'Ilustração de três pessoas, cada uma num círculo, se comunicando de formas diferentes: uma mulher idosa tocando símbolos coloridos num tablet, um homem escolhendo um símbolo no tablet com o olhar e uma jovem surda sinalizando com as mãos abertas. Linhas e ondas ligam os três círculos.';

interface Props {
  versao: string;
  inicioISO: string;
  inicioTexto: string;
  faseAtualTexto: string;
  resumo: string[];
  porqueComecei?: string;
  destaques: { valor?: string; rotulo?: string; nota?: string }[];
  principios: { titulo: string; texto: string }[];
  historia: string[];
  descobertas: { titulo?: string; texto?: string }[];
  fases: Fase[];
  obstaculos: Obstaculo[];
  totalObstaculos: number;
  contagem: { decidido: number; 'em-avaliacao': number; descartado: number };
  rotasDecisoes: Record<string, string>;
  modulos: { id: string; ordem: number; fase: string; titulo: string; descricao: string }[];
  decisoes: { id: string; titulo: string; status: string }[];
}

function Secao({
  id,
  eyebrow,
  titulo,
  intro,
  alt = false,
  children,
}: {
  id: string;
  eyebrow: string;
  titulo: string;
  intro?: ReactNode;
  alt?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={cn('border-t py-16 md:py-20', alt && 'bg-muted/50')}>
      <div className="container-page">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 font-bold text-primary">{eyebrow}</p>
          <h2 id={`${id}-titulo`} className="text-3xl font-bold tracking-tight md:text-4xl">
            {titulo}
          </h2>
          {intro && <p className="mt-3 text-lg text-muted-foreground">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function MaisLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <p className="mt-8">
      <a href={href} className={buttonVariants({ variant: 'outline' })}>
        {children}
        <ArrowRight aria-hidden="true" />
      </a>
    </p>
  );
}

const PARTICIPANTES = [
  ['Pessoas surdas', 'Gravando e revisando os sinais em Libras, e decidindo junto o que entra.'],
  ['Quem usa comunicação alternativa e suas famílias', 'Testando, sugerindo frases e dizendo o que funciona.'],
  ['Fonoaudiólogos e terapeutas', 'Montando o vocabulário essencial e ensinando a usar.'],
  ['Tradutores', 'Levando o projeto para outras línguas.'],
  ['Ilustradores', 'Desenhando pictogramas livres.'],
  ['Makers', 'Criando suportes, botões e sensores baratos.'],
  ['Desenvolvedores e pesquisadores', 'Escrevendo código, testando em celulares simples e fazendo estudos.'],
  ['Quem pode doar a voz', 'Gravando frases, com consentimento, para melhorar as vozes.'],
] as const;

export function Landing(p: Props) {
  return (
    <>
      {/* Topo */}
      <section aria-labelledby="titulo" className="relative overflow-hidden">
        <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0" />
        <div aria-hidden="true" className="grid-dots pointer-events-none absolute inset-0" />
        <div className="container-page relative grid items-center gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* Coluna da direita: hoje o símbolo; depois, a ilustração do topo. */}
          <div>
          <div className="flex flex-wrap gap-2">
            <a href="/roteiro/" className="rounded-full">
              <Badge>
                <MapPin aria-hidden="true" />
                {p.faseAtualTexto}
              </Badge>
            </a>
            <Badge variant="outline" className="bg-background/70">
              <Tag aria-hidden="true" />
              Versão {p.versao}
            </Badge>
          </div>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-7xl">Toda Voz</h1>
          <p className="text-gradient mt-3 text-3xl font-bold tracking-tight md:text-4xl">Toda voz importa.</p>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
            Um projeto sem fins lucrativos para que pessoas que não conseguem falar, ou que têm dificuldade para
            entender, possam se comunicar. Gratuito, aberto e funcionando sem internet num celular simples. Começando
            pelo <strong className="text-foreground">português</strong> e pela{' '}
            <strong className="text-foreground">Libras</strong>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#onde-estamos" className={buttonVariants({ size: 'lg' })}>
              Ver onde estamos
              <ArrowRight aria-hidden="true" />
            </a>
            <a href="#participe" className={buttonVariants({ size: 'lg', variant: 'outline' })}>
              Quero ajudar
            </a>
          </div>

          <Card className="mt-10 max-w-md flex-row items-center gap-4 bg-card/80 px-6 py-5 backdrop-blur">
            <span
              aria-hidden="true"
              className="grid size-12 shrink-0 place-items-center rounded-xl bg-linear-to-br from-brand-from to-brand-to text-primary-foreground"
            >
              <CalendarDays className="size-6" />
            </span>
            <div>
              <p className="text-muted-foreground">A iniciativa começou em</p>
              <p className="text-xl font-bold">
                <time dateTime={p.inicioISO}>{p.inicioTexto}</time>
              </p>
            </div>
          </Card>
          </div>

          {/*
            Ilustração do topo, versão 2 (ver context/identidade-visual.md).
            Tem fundo escuro próprio, então funciona como um cartão nos dois temas.
            Gerada por tools/imagens/preparar-ilustracoes.py (WebP de 1200 e 800 px).
          */}
          <figure className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-4xl bg-linear-to-br from-glow-1/30 to-glow-2/30 blur-2xl"
            />
            <img
              src="/ilustracoes/topo.webp"
              srcSet="/ilustracoes/topo-800.webp 800w, /ilustracoes/topo.webp 1200w"
              sizes="(min-width: 1152px) 540px, (min-width: 1024px) 45vw, 100vw"
              width={1200}
              height={896}
              alt={ALT_ILUSTRACAO}
              decoding="async"
              fetchPriority="high"
              className="relative h-auto w-full rounded-2xl border shadow-xl"
            />
          </figure>
        </div>
      </section>

      <Secao
        id="problema"
        eyebrow="O problema"
        titulo="A tecnologia existe, mas não chega"
        intro={
          <>
            Os números são estimativas de estudos e de organismos de saúde. As fontes estão nas{' '}
            <a className="text-primary underline underline-offset-4" href="/contexto/referencias/">
              referências
            </a>
            .
          </>
        }
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.destaques.map((d) => (
            <li key={d.valor}>
              <Card className="h-full gap-2 px-6">
                <p className="text-gradient text-4xl font-extrabold tracking-tight">{d.valor}</p>
                <p className="font-bold">{d.rotulo}</p>
                {d.nota && <p className="text-muted-foreground">{d.nota}</p>}
              </Card>
            </li>
          ))}
        </ul>
      </Secao>

      <Secao id="motivacao" eyebrow="Por que existimos" titulo="Nossa motivação" alt>
        <div className="grid max-w-3xl gap-4 text-lg">
          {p.resumo.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        {p.porqueComecei && (
          <Card className="mt-8 max-w-3xl px-6">
            <h3 className="text-xl font-bold">Por que comecei</h3>
            {p.porqueComecei.split(/\n\s*\n/).map((t) => (
              <p key={t}>{t}</p>
            ))}
          </Card>
        )}
        <MaisLink href="/contexto/objetivo-e-motivacao/">Ler o objetivo completo</MaisLink>
      </Secao>

      <Secao
        id="onde-estamos"
        eyebrow="Roteiro"
        titulo="Onde estamos"
        intro={
          <>
            Estamos na <strong className="text-foreground">{p.faseAtualTexto}</strong>, versão {p.versao}. As fases não
            têm data marcada: o ritmo depende de quantas pessoas entrarem no projeto.
          </>
        }
      >
        <div className="max-w-3xl">
          <Roadmap fases={p.fases} />
        </div>
        <MaisLink href="/roteiro/">Ver o roteiro completo</MaisLink>
      </Secao>

      <Secao id="historia" eyebrow="Como chegamos aqui" titulo="A história até agora" alt>
        <div className="grid max-w-3xl gap-4 text-lg">
          {p.historia.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        <MaisLink href="/contexto/historico/">Ler a história completa</MaisLink>
      </Secao>

      <Secao id="principios" eyebrow="Princípios" titulo="O que não negociamos">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.principios.map((x) => (
            <li key={x.titulo}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{x.titulo}</CardTitle>
                  <CardDescription>{x.texto}</CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </Secao>

      <Secao
        id="descobertas"
        eyebrow="Pesquisa"
        titulo="O que descobrimos"
        intro="Antes de escrever código, fomos entender o problema. Isto foi o que mais nos marcou."
        alt
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.descobertas.map((x) => (
            <li key={x.titulo}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{x.titulo}</CardTitle>
                  <CardDescription>{x.texto}</CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
        <MaisLink href="/contexto/descobertas/">Ver todas as descobertas</MaisLink>
      </Secao>

      <Secao
        id="obstaculos"
        eyebrow="Obstáculos"
        titulo="O que pode atrapalhar, e o que pensamos fazer"
        intro="Para cada obstáculo, registramos uma possível solução e se já decidimos seguir com ela. Ainda há muito para decidir."
      >
        <ul className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Resumo das decisões">
          <li className="flex items-center gap-2">
            <StatusBadge status="decidido" /> <span className="font-bold">{p.contagem.decidido}</span>
          </li>
          <li className="flex items-center gap-2">
            <StatusBadge status="em-avaliacao" /> <span className="font-bold">{p.contagem['em-avaliacao']}</span>
          </li>
          <li className="flex items-center gap-2">
            <StatusBadge status="descartado" /> <span className="font-bold">{p.contagem.descartado}</span>
          </li>
        </ul>
        <Obstaculos itens={p.obstaculos} rotas={p.rotasDecisoes} />
        <MaisLink href="/contexto/obstaculos-e-solucoes/">Ver todos os {p.totalObstaculos} obstáculos</MaisLink>
      </Secao>

      <Secao
        id="construir"
        eyebrow="O que vamos construir"
        titulo="Módulos"
        intro="O projeto é dividido em partes. Todas ainda são rascunho e vão ser detalhadas uma a uma, junto com quem vai usar."
        alt
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.modulos.map((m) => (
            <li key={m.id}>
              <a
                href={`/modulos/${m.id}/`}
                className="group block h-full rounded-xl focus-visible:ring-[3px] focus-visible:ring-ring"
              >
                <Card className="h-full transition-colors group-hover:border-primary">
                  <CardHeader>
                    <p className="text-sm font-bold text-muted-foreground">
                      Módulo {String(m.ordem).padStart(2, '0')} · fase {m.fase}
                    </p>
                    <CardTitle className="group-hover:text-primary group-hover:underline">{m.titulo}</CardTitle>
                    <CardDescription>{m.descricao}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            </li>
          ))}
        </ul>
        <MaisLink href="/contexto/arquitetura/">Ver como o sistema vai ser construído</MaisLink>
      </Secao>

      <Secao
        id="decisoes"
        eyebrow="Decisões"
        titulo="O que já decidimos"
        intro="Cada decisão tem o motivo, as alternativas que pensamos e o que muda com ela."
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead scope="col">Decisão</TableHead>
              <TableHead scope="col">Situação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {p.decisoes.map((d) => (
              <TableRow key={d.id}>
                <TableCell>
                  <a className="text-primary underline underline-offset-4" href={`/decisoes/${d.id}/`}>
                    {d.titulo}
                  </a>
                </TableCell>
                <TableCell>
                  <StatusBadge status={d.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Secao>

      <Secao
        id="participe"
        eyebrow="Participe"
        titulo="Ninguém faz isso sozinho"
        intro="O Toda Voz é feito com quem usa. Decisões que afetam quem usa comunicação alternativa e a comunidade surda são tomadas com essas pessoas."
        alt
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PARTICIPANTES.map(([quem, como]) => (
            <li key={quem}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{quem}</CardTitle>
                  <CardDescription>{como}</CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-muted-foreground">O repositório público e os canais da comunidade vão abrir em breve.</p>
      </Secao>
    </>
  );
}
