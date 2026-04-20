# Fase A — Especificação

## Posicionamento

Produto consultivo para captar leads qualificados interessados em resolver gargalos operacionais com software sob medida.

Mensagem principal:

> Descubra quanto custa resolver seu gargalo operacional com software sob medida.

## Objetivos

- atrair tráfego orgânico
- qualificar leads
- automatizar a pré-venda
- demonstrar critério técnico
- preparar evolução para IA, SEO e funil comercial

## MVP

- landing page com proposta de valor clara
- fluxo de diagnóstico multi-etapas
- engine de cálculo configurável
- resultado consultivo com CTA comercial
- persistência no Supabase

## Arquitetura

- `pages`: composição das telas
- `components`: UI reutilizável
- `stores`: estado do fluxo
- `services`: cálculo, persistência, resumo, tracking
- `config`: pesos, faixas e copy
- `types`: contratos e tipos do domínio
- `integrations`: gateways externos
- `supabase`: cliente, repositórios e SQL

## Modelagem

Tabelas previstas:

- `leads`
- `diagnosis_sessions`
- `diagnosis_features`
- `diagnosis_results`
- `tracking_metadata`

## Regras centrais

- score funcional base por feature
- peso por categoria de dor
- multiplicador de urgência
- classificação por complexidade
- sempre exibir ranges de horas, prazo e investimento

## Evolução futura

- analytics real
- páginas por nicho/dor
- IA para resumo e recomendações
- painel comercial
- propostas em PDF
