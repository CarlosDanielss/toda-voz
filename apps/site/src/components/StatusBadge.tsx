// Selo de situação com ícone + texto (o significado nunca depende só da cor).
import { Check, CircleDashed, Clock, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Variante = 'success' | 'warning' | 'destructive' | 'outline' | 'secondary' | 'accent';

const MAPA: Record<string, { rotulo: string; variante: Variante; icone: typeof Check }> = {
  decidido: { rotulo: 'Decidido', variante: 'success', icone: Check },
  'em-avaliacao': { rotulo: 'Em avaliação', variante: 'warning', icone: Clock },
  descartado: { rotulo: 'Descartado', variante: 'destructive', icone: X },
  aceita: { rotulo: 'Aceita', variante: 'success', icone: Check },
  proposta: { rotulo: 'Proposta', variante: 'warning', icone: Clock },
  rejeitada: { rotulo: 'Rejeitada', variante: 'destructive', icone: X },
  rascunho: { rotulo: 'Rascunho', variante: 'warning', icone: Clock },
  'em andamento': { rotulo: 'Em andamento', variante: 'accent', icone: Clock },
  vivo: { rotulo: 'Atualizado sempre', variante: 'outline', icone: CircleDashed },
  historico: { rotulo: 'Registro histórico', variante: 'secondary', icone: CircleDashed },
};

export function StatusBadge({ status }: { status: string }) {
  const item = MAPA[status] ?? { rotulo: status, variante: 'outline' as const, icone: CircleDashed };
  const Icone = item.icone;
  return (
    <Badge variant={item.variante}>
      <Icone aria-hidden="true" />
      {item.rotulo}
    </Badge>
  );
}
