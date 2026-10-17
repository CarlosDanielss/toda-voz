// Obstáculos em três partes: obstáculo, possível solução e decisão.
import { Card, CardContent } from '@/components/ui/card';
import { StatusBadge } from '@/components/StatusBadge';

export interface Obstaculo {
  tema: string;
  obstaculo: string;
  solucao: string;
  decisao: 'decidido' | 'em-avaliacao' | 'descartado';
  adr?: string;
}

interface Props {
  itens: Obstaculo[];
  /** Rota de cada decisão citada: { "0004": "/decisoes/0004-licenca/" }. */
  rotas: Record<string, string>;
  agrupar?: boolean;
}

function Item({ i, rotas }: { i: Obstaculo; rotas: Record<string, string> }) {
  return (
    <Card className="py-5">
      <CardContent>
        {/* Colunas de largura fixa: a coluna "Decisão" fica alinhada em todos os cards. */}
        <dl className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_11rem] lg:gap-8">
          <div>
            <dt className="text-sm font-bold text-muted-foreground">Obstáculo</dt>
            <dd className="mt-1 font-bold">{i.obstaculo}</dd>
          </div>
          <div>
            <dt className="text-sm font-bold text-muted-foreground">Possível solução</dt>
            <dd className="mt-1">{i.solucao}</dd>
          </div>
          <div>
            <dt className="text-sm font-bold text-muted-foreground">Decisão</dt>
            <dd className="mt-1 flex flex-col items-start gap-2">
              <StatusBadge status={i.decisao} />
              {i.adr && (
                <a className="text-primary underline underline-offset-4" href={rotas[i.adr]}>
                  decisão {i.adr}
                </a>
              )}
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}

export function Obstaculos({ itens, rotas, agrupar = false }: Props) {
  if (!agrupar) {
    return (
      <ul className="grid gap-4">
        {itens.map((i) => (
          <li key={i.obstaculo}>
            <Item i={i} rotas={rotas} />
          </li>
        ))}
      </ul>
    );
  }
  const temas = [...new Set(itens.map((i) => i.tema))];
  return (
    <>
      {temas.map((tema) => (
        <section key={tema} aria-labelledby={`tema-${tema}`} className="mt-10">
          <h2 id={`tema-${tema}`} className="mb-4 text-2xl font-bold tracking-tight">
            {tema}
          </h2>
          <ul className="grid gap-4">
            {itens
              .filter((i) => i.tema === tema)
              .map((i) => (
                <li key={i.obstaculo}>
                  <Item i={i} rotas={rotas} />
                </li>
              ))}
          </ul>
        </section>
      ))}
    </>
  );
}
