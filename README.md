# 🧪 Projeto QA - Framework de Automação de Testes

Projeto prático de QA com Cypress, CI/CD e testes de API.

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

\`\`\`bash
# Em um terminal, rode a aplicação
npm run dev

# Em outro terminal, execute os testes de API
npm run test:api
\`\`\`

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
├── .github/
│   └── workflows/
│       └── qa-pipeline.yml   # Pipeline de CI/CD
└── scripts/
    └── run-api-tests.js      # Script de testes de API
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
- ✅ GET /api/health - Health Check
- ✅ POST /api/health - Envio de dados

## 🔄 CI/CD (GitHub Actions)

O pipeline é executado automaticamente em:
- Push para branches `main` ou `develop`
- Pull Requests para `main`

### Jobs do Pipeline:
1. **cypress-tests**: Executa testes E2E
2. **api-tests**: Executa testes de API

## 📊 Relatórios

Os vídeos e screenshots dos testes são salvos automaticamente em caso de falha e ficam disponíveis por 7 dias nos artefatos do GitHub Actions.

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

## 🎓 Aprendizado

Este projeto demonstra:
- Automação de testes E2E com Cypress
- Seletores otimizados com `data-cy`
- Testes de API com Node.js
- Pipeline de CI/CD com GitHub Actions
- Boas práticas de QA

## 📚 Próximos Passos

- [ ] Adicionar testes de performance
- [ ] Integrar com Allure Reports
- [ ] Adicionar testes de acessibilidade
- [ ] Implementar testes de regressão visual
\`\`\`

```json file="" isHidden
