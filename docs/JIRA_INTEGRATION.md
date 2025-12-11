# 🔗 Integração com Jira

Este documento descreve como integrar os testes e processos de QA com o Jira.

## 📋 Processo de Integração

### 1. Estrutura de Projetos no Jira

#### Campos Recomendados
- **Test Coverage**: Link para testes no repositório
- **Test Execution**: Status da última execução
- **Automated**: Sim/Não (teste automatizado)
- **Test Type**: E2E, API, Unit, Exploratory

### 2. Templates de Issues

#### Bug Report Template

```markdown
## Descrição
[Descrição clara do bug]

## Passos para Reproduzir
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

## Comportamento Esperado
[O que deveria acontecer]

## Comportamento Atual
[O que está acontecendo]

## Ambiente
- Browser: [Chrome/Firefox/etc]
- Versão: [versão]
- OS: [Windows/Mac/Linux]

## Evidências
- Screenshot: [link]
- Vídeo: [link do Cypress]
- Logs: [link]

## Teste Relacionado
- Cypress: `cypress/e2e/[test-file].cy.ts`
- Postman: `postman/collections/[collection].json`

## Prioridade
- [ ] Crítica
- [ ] Alta
- [ ] Média
- [ ] Baixa
```

#### Test Case Template

```markdown
## Objetivo
[Objetivo do teste]

## Pré-condições
- [Condição 1]
- [Condição 2]

## Passos
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

## Resultado Esperado
[Resultado esperado]

## Teste Automatizado
- [ ] Sim - Link: [arquivo de teste]
- [ ] Não

## Tipo
- [ ] Funcional
- [ ] Regressão
- [ ] Exploratório
- [ ] Performance
```

### 3. Rastreabilidade

#### Linking de Testes com Issues

No código de teste, adicione comentários com referências Jira:

```typescript
// Cypress
describe('Task Manager - CRUD Operations', () => {
  // Jira: QA-123
  it('Deve adicionar uma nova tarefa', () => {
    // ...
  })
  
  // Jira: QA-124
  it('Deve excluir uma tarefa', () => {
    // ...
  })
})
```

```javascript
// Postman
// Jira: QA-125
pm.test("GET Health Check - Status 200", function () {
    pm.response.to.have.status(200);
});
```

### 4. Workflow no Jira

#### Estados Recomendados

```
To Do → In Progress → Testing → Done
                 ↓
            Blocked
```

#### Transições Automáticas

- **Teste Passou**: Atualizar issue para "Testing" ou "Done"
- **Teste Falhou**: Criar bug automaticamente
- **Deploy**: Mover para "In Testing"

### 5. Métricas e Relatórios

#### Dashboard Jira Recomendado

1. **Cobertura de Testes**
   - % de features com testes automatizados
   - Total de testes vs. Total de issues

2. **Qualidade do Código**
   - Bugs encontrados por teste
   - Taxa de falha de testes
   - Tempo médio de correção

3. **Execução de Testes**
   - Última execução bem-sucedida
   - Testes falhando
   - Tendência ao longo do tempo

### 6. Integração CI/CD com Jira

#### GitHub Actions → Jira

Adicione no workflow para atualizar Jira automaticamente:

```yaml
- name: Update Jira on Test Failure
  if: failure()
  uses: atlassian/gajira-create@v3
  with:
    project: QA
    issuetype: Bug
    summary: "Test failed: ${{ github.event.head_commit.message }}"
    description: |
      Teste falhou no pipeline.
      Commit: ${{ github.sha }}
      Workflow: ${{ github.workflow }}
```

### 7. Labels e Componentes

#### Labels Úteis
- `automated-test`
- `manual-test`
- `regression`
- `smoke-test`
- `e2e`
- `api-test`

#### Componentes
- Frontend (Cypress)
- Backend (Postman)
- Integration

### 8. Sprints e Planejamento

#### Estrutura de Sprint

**Semana 1**: Planejamento
- Criar test cases no Jira
- Definir prioridades
- Planejar automação

**Semana 2-3**: Execução
- Desenvolver testes
- Executar testes automatizados
- Documentar bugs

**Semana 4**: Validação
- Revisar cobertura
- Validar bugs corrigidos
- Preparar relatório

## 🔧 Ferramentas de Integração

### Extensões Úteis
- **Zephyr**: Gerenciamento de testes
- **Xray**: Test management
- **TestRail**: Integração de testes

### APIs
- [Jira REST API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/)
- [Jira Software API](https://developer.atlassian.com/cloud/jira/software/rest/)

## 📝 Checklist de Setup

- [ ] Criar projeto no Jira
- [ ] Configurar campos customizados
- [ ] Criar templates de issues
- [ ] Configurar workflow
- [ ] Adicionar labels e componentes
- [ ] Configurar dashboard
- [ ] Integrar com CI/CD (opcional)
- [ ] Treinar equipe no processo

## 📚 Referências

- [Jira Documentation](https://support.atlassian.com/jira-software-cloud/)
- [Test Management Best Practices](https://www.atlassian.com/software/jira/guides/test-management)

