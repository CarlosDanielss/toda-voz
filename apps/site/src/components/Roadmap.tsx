// Linha do tempo do roteiro, com destaque para a fase atual ("Estamos aqui").
import { Check, Circle, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export interface Fase {
  id: string;
  titulo: string;
  texto: string;
  status: 'concluida' | 'atual' | 'proxima' | 'futura';
  marcos: { texto: string; feito: boolean }[];
}

const ROTULO = { concluida: 'Concluída', atual: 'Estamos aqui', proxima: 'Próxima', futura: 'Depois' } as const;

export function Roadmap({ fases, todosOsMarcos = false }: { fases: Fase[]; todosOsMarcos?: boolean }) {
  return (
    <ol className="grid gap-5">
      {fases.map((f) => {
        const atual = f.status === 'atual';
        const feitos = f.marcos.filter((m) => m.feito).length;
        const porcentagem = Math.round((feitos / Math.max(f.marcos.length, 1)) * 100);
        const mostrarMarcos = todosOsMarcos || atual;
        return (
          <li key={f.id} className="roadmap-rail relative pl-14" aria-current={atual ? 'step' : undefined}>
            <span
              aria-hidden="true"
              className={cn(
                'absolute top-5 left-0 grid size-9 place-items-center rounded-full border-2 text-sm font-extrabold',
                atual && 'border-transparent bg-linear-to-br from-brand-from to-brand-to text-primary-foreground shadow-md',
                f.status === 'concluida' && 'border-success bg-success-surface text-success',
                !atual && f.status !== 'concluida' && 'border-input bg-card text-muted-foreground'
              )}
            >
              {f.status === 'concluida' ? <Check className="size-5" /> : f.id}
            </span>
            <Card
              className={cn(
                'gap-3',
                atual && 'border-2 border-primary shadow-lg shadow-primary/10',
                !atual && 'shadow-none'
              )}
            >
              <CardHeader>
                <CardTitle className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span>
                    Fase {f.id}: {f.titulo}
                  </span>
                  {atual ? (
                    <Badge>
                      <MapPin aria-hidden="true" />
                      {ROTULO.atual}
                    </Badge>
                  ) : (
                    <Badge variant={f.status === 'concluida' ? 'success' : 'outline'}>{ROTULO[f.status]}</Badge>
                  )}
                </CardTitle>
                <CardDescription>{f.texto}</CardDescription>
              </CardHeader>
              {mostrarMarcos && (
                <CardContent className="grid gap-4">
                  <ul className="grid gap-1.5" aria-label={`Marcos da fase ${f.id}`}>
                    {f.marcos.map((m) => (
                      <li
                        key={m.texto}
                        className={cn('flex items-start gap-2', m.feito ? 'text-foreground' : 'text-muted-foreground')}
                      >
                        {m.feito ? (
                          <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                        ) : (
                          <Circle aria-hidden="true" className="mt-1 size-4 shrink-0" />
                        )}
                        <span>
                          {m.texto}
                          <span className="sr-only">{m.feito ? ' (feito)' : ' (a fazer)'}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  {atual && (
                    <div className="grid max-w-md gap-2">
                      <p id={`progresso-${f.id}`} className="font-bold">
                        {feitos} de {f.marcos.length} marcos concluídos
                      </p>
                      <Progress value={porcentagem} aria-labelledby={`progresso-${f.id}`} />
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          </li>
        );
      })}
    </ol>
  );
}
