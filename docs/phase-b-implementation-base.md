# Fase B — Implementação Base

## Entregáveis

- bootstrap manual do projeto em Vue 3 + Vite + TypeScript
- configuração do Tailwind CSS
- Pinia e Vue Router preparados
- integração base com Supabase
- tipos principais do domínio
- store do diagnóstico
- engine de cálculo isolada
- páginas e componentes base

## Decisões

- `text + config` para regras de negócio, evitando lógica espalhada
- service layer desacoplada para cálculo e resumo
- interface para futuro provider de IA
- tracking preparado com adapter, mas sem integração real no MVP base

## Observação de ambiente

Como `node` e `npm` não estão instalados ou acessíveis no terminal atual, os arquivos de bootstrap e configuração foram gerados manualmente.

## Próximos passos quando o ambiente tiver Node

1. instalar dependências com `npm install`
2. executar `npm run dev`
3. configurar `.env` com Supabase
4. aplicar schema SQL no projeto Supabase
5. seguir para a Fase C
