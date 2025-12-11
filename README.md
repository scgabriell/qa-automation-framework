# 🧪 Projeto QA - Framework de Automação de Testes

Framework completo de automação de testes com Cypress, Postman/Newman, CI/CD, documentação Swagger e integração com Jira. Implementa uma estratégia estruturada de QA alinhada ao pipeline de CI/CD.

## 📋 Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn

## 🚀 Instalação

\`\`\`bash
# Instalar dependências
npm install

# Instalar Cypress
npm install cypress --save-dev
\`\`\`

## 🎯 Executando os Testes

### Testes E2E (Cypress)

\`\`\`bash
# Modo interativo (recomendado para desenvolvimento)
npm run test:e2e

# Modo headless (para CI/CD)
npm run test:e2e:headless
\`\`\`

### Testes de API

#### Node.js (Script Customizado)
\`\`\`bash
# Em um terminal, rode a aplicação
npm run dev

# Em outro terminal, execute os testes de API
npm run test:api
\`\`\`

#### Postman/Newman
\`\`\`bash
# Certifique-se de que o servidor está rodando
npm run dev

# Execute os testes Postman
npm run test:api:postman

# Com relatório HTML
npm run test:api:postman:report
\`\`\`

📖 [Documentação completa do Postman](./postman/README.md)

## 🏗️ Estrutura do Projeto

\`\`\`
projeto-qa/
├── app/
│   ├── page.tsx              # Aplicação principal (Gerenciador de Tarefas)
│   └── api/
│       └── health/
│           └── route.ts      # Endpoint de API para testes
├── cypress/
│   ├── e2e/
│   │   └── task-manager.cy.ts # Testes E2E
│   └── cypress.config.ts     # Configuração do Cypress
├── postman/
│   ├── collections/          # Coleções Postman
│   └── environments/         # Ambientes (local, staging, prod)
├── docs/
│   ├── ESTRATEGIA_QA.md      # Estratégia completa de QA
│   ├── METRICAS_QA.md        # Métricas e relatórios
│   ├── JIRA_INTEGRATION.md   # Integração com Jira
│   └── api/
│       ├── swagger.yaml      # Documentação Swagger/OpenAPI
│       └── README.md         # Documentação da API
├── .github/
│   └── workflows/
│       └── qa-pipeline.yml   # Pipeline de CI/CD
├── scripts/
│   └── run-api-tests.js      # Script de testes de API (Node.js)
└── reports/                  # Relatórios gerados (gitignored)
\`\`\`

## 📝 Cenários de Teste

### Testes E2E (Cypress)
- ✅ Adicionar nova tarefa
- ✅ Marcar tarefa como concluída
- ✅ Desmarcar tarefa
- ✅ Excluir tarefa
- ✅ Adicionar tarefa via Enter
- ✅ Validar tarefa vazia
- ✅ Fluxo completo (CRUD)

### Testes de API

#### Node.js Scripts
- ✅ GET /api/health - Health Check
- ✅ POST /api/health - Envio de dados
- ✅ Validação de schemas com Zod
- ✅ Testes de erro (400, 404, 405)
- ✅ Testes de performance

#### Postman/Newman
- ✅ GET /api/health - Health Check com validações
- ✅ POST /api/health - Dados válidos
- ✅ POST /api/health - JSON inválido (teste de erro)
- ✅ Relatórios HTML automatizados

## 🔄 CI/CD (GitHub Actions)

O pipeline é executado automaticamente em:
- Push para branches `main` ou `develop`
- Pull Requests para `main`

### Jobs do Pipeline:
1. **cypress-tests**: Executa testes E2E com Cypress
2. **api-tests**: Executa testes de API (Node.js + Postman/Newman)
   - Testes com scripts customizados
   - Testes com Postman/Newman
   - Geração de relatórios HTML

Todos os jobs executam em paralelo para otimizar o tempo de execução.

## 📊 Relatórios e Métricas

### Relatórios Automáticos
- **Cypress**: Vídeos e screenshots salvos automaticamente
- **Postman/Newman**: Relatórios HTML gerados em `reports/`
- **Artefatos GitHub Actions**: Disponíveis por 7 dias

### Métricas Coletadas
- Cobertura de testes
- Taxa de sucesso
- Tempo de execução
- Bugs encontrados
- Tendências ao longo do tempo

📖 [Documentação completa de Métricas](./docs/METRICAS_QA.md)

## 🛠️ Comandos Úteis

\`\`\`bash
# Rodar aplicação em desenvolvimento
npm run dev

# Build da aplicação
npm run build

# Abrir interface do Cypress
npx cypress open

# Rodar Cypress no terminal
npx cypress run
\`\`\`

## 🎓 Estratégia e Ferramentas

Este projeto implementa uma estratégia completa de QA:

### Tecnologias
- **Cypress** - Automação de testes E2E
- **Postman/Newman** - Testes de API automatizados
- **GitHub Actions** - Pipeline de CI/CD
- **Swagger/OpenAPI** - Documentação de API
- **Jira** - Gerenciamento de testes e bugs (documentação)

### Recursos
- ✅ Testes E2E automatizados
- ✅ Testes de API (múltiplas abordagens)
- ✅ Pipeline CI/CD integrado
- ✅ Documentação Swagger
- ✅ Relatórios e métricas
- ✅ Integração com Jira (processo documentado)
- ✅ Seletores otimizados com `data-cy`
- ✅ Validação de schemas (Zod)
- ✅ Boas práticas de QA

📖 [Estratégia completa de QA](./docs/ESTRATEGIA_QA.md)

## 🧪 Como Testar

📖 **[Guia Completo Passo a Passo](./docs/GUIA_TESTES.md)** - Tutorial detalhado para testar todas as tecnologias  
📋 **[Ordem Recomendada](./docs/ORDEM_TESTES.md)** - Sequência ideal de execução

> **💡 Importante:** Você **NÃO precisa** fazer commit/push para testar localmente. Apenas o CI/CD requer push.

**Teste rápido (local - sem commit):**
```bash
# 1. Inicie o servidor
npm run dev

# 2. Em outro terminal - Execute os testes
npm run test:all              # Todos os testes locais
npm run test:e2e              # Apenas Cypress (interativo)
npm run test:api:postman      # Apenas Postman
```

**Depois que tudo passar localmente:**
```bash
# Faça commit e push para testar CI/CD
git add .
git commit -m "feat: implementar estratégia QA"
git push
```

## 📚 Documentação Adicional

- [🧪 Guia de Testes Passo a Passo](./docs/GUIA_TESTES.md) - **COMECE AQUI!** Tutorial completo
- [📋 Estratégia de QA](./docs/ESTRATEGIA_QA.md) - Estratégia completa e cronograma
- [📊 Métricas e Relatórios](./docs/METRICAS_QA.md) - Métricas coletadas e KPIs
- [🔗 Integração com Jira](./docs/JIRA_INTEGRATION.md) - Processo e templates
- [📮 Postman Collections](./postman/README.md) - Guia de uso do Postman/Newman
- [📖 Documentação da API](./docs/api/README.md) - Swagger e endpoints

## 🛠️ Comandos Completos

\`\`\`bash
# Aplicação
npm run dev              # Desenvolvimento
npm run build            # Build de produção
npm start                # Executar produção

# Testes E2E
npm run test:e2e         # Modo interativo
npm run test:e2e:headless # Headless (CI/CD)

# Testes de API
npm run test:api                    # Node.js script
npm run test:api:postman           # Postman/Newman
npm run test:api:postman:report    # Postman com relatório HTML

# Todos os testes
npm run test:all
\`\`\`

## 📚 Próximos Passos

- [x] Implementar Postman/Newman
- [x] Adicionar documentação Swagger
- [x] Criar estrutura de métricas
- [x] Documentar integração com Jira
- [ ] Adicionar testes de performance
- [ ] Integrar com Allure Reports
- [ ] Adicionar testes de acessibilidade
- [ ] Implementar testes de regressão visual

## 🤝 Contribuindo

1. Crie uma branch para sua feature
2. Adicione testes para novas funcionalidades
3. Certifique-se de que todos os testes passam
4. Abra um Pull Request

## 📝 Licença

Este projeto é um framework de exemplo para aprendizado e prática de QA.
\`\`\`

```json file="" isHidden
