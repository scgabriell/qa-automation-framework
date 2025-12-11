# 📊 Métricas de Qualidade

Este documento descreve as métricas coletadas e relatórios gerados pelo processo de QA.

## 🎯 Métricas Principais

### 1. Cobertura de Testes

#### Cobertura de Código
- **Objetivo**: > 80%
- **Ferramenta**: Codecov, Istanbul, Vitest Coverage
- **Frequência**: A cada push

#### Cobertura de Funcionalidades
- **Total de Features**: X
- **Features com Testes Automatizados**: Y
- **Cobertura**: (Y/X) * 100%

#### Cobertura de API
- **Total de Endpoints**: X
- **Endpoints Testados**: Y
- **Cobertura**: (Y/X) * 100%

### 2. Taxa de Sucesso de Testes

#### Taxa de Passagem
```
Taxa de Passagem = (Testes Passando / Total de Testes) * 100%
```

**Objetivo**: > 95%

#### Tendência
- Acompanhar taxa de passagem ao longo do tempo
- Identificar degradação precoce

### 3. Tempo de Execução

#### Tempo Total
- **Testes E2E**: ~X segundos
- **Testes de API**: ~Y segundos
- **Total**: X + Y segundos

**Objetivo**: < 10 minutos para suite completa

#### Tempo por Teste
- Identificar testes lentos
- Otimizar testes que excedem threshold

### 4. Bugs Encontrados

#### Por Fase
- **Desenvolvimento**: X bugs
- **Testes**: Y bugs
- **Produção**: Z bugs

#### Por Prioridade
- **Crítica**: X
- **Alta**: Y
- **Média**: Z
- **Baixa**: W

#### Taxa de Defeitos
```
Taxa de Defeitos = (Bugs Encontrados / Linhas de Código) * 1000
```

### 5. Tempo de Resolução

#### Tempo Médio de Correção
- **Bugs Críticos**: X horas
- **Bugs Altos**: Y horas
- **Bugs Médios**: Z horas

**Objetivo**: 
- Críticos: < 4 horas
- Altos: < 24 horas
- Médios: < 3 dias

### 6. Eficiência de Testes

#### Ratio de Testes
```
Ratio = Testes Automatizados / Bugs Encontrados
```

**Objetivo**: > 10:1

#### Eficácia de Testes
```
Eficácia = (Bugs Encontrados em Testes / Total de Bugs) * 100%
```

**Objetivo**: > 80%

## 📈 Relatórios Gerados

### 1. Relatório Diário

**Conteúdo**:
- Status dos testes (passou/falhou)
- Bugs novos/atualizados
- Testes executados
- Tempo de execução

**Gerado**: Automaticamente após cada execução do pipeline

### 2. Relatório Semanal

**Conteúdo**:
- Resumo da semana
- Tendências (gráficos)
- Comparativo com semana anterior
- Métricas agregadas

**Gerado**: Toda segunda-feira

### 3. Relatório de Release

**Conteúdo**:
- Cobertura final
- Bugs encontrados/corrigidos
- Testes executados
- Aprovação para produção

**Gerado**: Antes de cada release

## 📊 Dashboards

### GitHub Actions Dashboard

Acesse em: `Actions` → Selecionar workflow → Ver resultados

**Métricas Visíveis**:
- Status do último build
- Tempo de execução
- Artefatos (vídeos, screenshots, relatórios)

### Cypress Dashboard (Opcional)

**Métricas**:
- Testes executados
- Taxa de passagem
- Tempo de execução
- Flakiness score

### Postman/Newman Reports

**Localização**: `reports/newman-report.html`

**Métricas**:
- Requisições executadas
- Assertions passadas/falhadas
- Tempo de resposta médio
- Status codes

## 🔍 Análise de Tendências

### Gráficos Recomendados

1. **Taxa de Passagem ao Longo do Tempo**
   - Identificar degradação gradual

2. **Bugs Encontrados por Sprint**
   - Acompanhar qualidade do código

3. **Tempo de Execução**
   - Detectar testes lentos

4. **Cobertura de Testes**
   - Garantir crescimento contínuo

## 📝 Como Coletar Métricas

### Automaticamente

```bash
# Cypress com relatórios
npm run test:e2e:headless

# Postman com relatórios
npm run test:api:postman:report

# Coverage (se configurado)
npm run test:api:coverage
```

### Manualmente

1. Execute os testes
2. Colete resultados dos artefatos
3. Atualize planilha/dashboard (se necessário)

## 🎯 KPIs (Key Performance Indicators)

### Objetivos Trimestrais

| Métrica | Atual | Objetivo Q1 | Objetivo Q2 |
|---------|-------|-------------|-------------|
| Cobertura de Código | X% | 70% | 80% |
| Taxa de Passagem | Y% | 90% | 95% |
| Tempo de Execução | Z min | 15 min | 10 min |
| Bugs em Produção | W | < 5 | < 2 |

## 📚 Templates de Relatórios

### Relatório de Execução

```markdown
# Relatório de Execução - [Data]

## Resumo
- **Total de Testes**: X
- **Passou**: Y
- **Falhou**: Z
- **Taxa de Passagem**: (Y/X)%

## Testes E2E
- Executados: X
- Passou: Y
- Falhou: Z
- Tempo: X min

## Testes de API
- Executados: X
- Passou: Y
- Falhou: Z
- Tempo: Y min

## Bugs Encontrados
- Novos: X
- Corrigidos: Y
- Pendentes: Z

## Próximos Passos
- [ ] Investigar falhas
- [ ] Corrigir bugs críticos
- [ ] Atualizar testes
```

## 🔗 Integração com Ferramentas

### GitHub Actions
- Métricas coletadas automaticamente
- Artefatos disponíveis por 7 dias

### Jira
- Bugs rastreados
- Métricas exportadas (via API)

### CI/CD
- Badges de status
- Notificações de falha

## 📖 Referências

- [Test Metrics](https://www.guru99.com/test-metrics.html)
- [QA Metrics Dashboard](https://www.atlassian.com/software/jira/guides/test-management/metrics)

