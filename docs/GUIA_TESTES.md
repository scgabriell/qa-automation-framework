# 🧪 Guia Passo a Passo - Como Testar as Tecnologias

Este guia prático mostra como executar e testar cada tecnologia implementada no projeto.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

- ✅ Node.js 18+ instalado
- ✅ Git instalado
- ✅ Editor de código (VS Code recomendado)

> **💡 Nota:** Para testar **localmente** (passos 2-6), você **NÃO precisa** fazer commit/push. Apenas o **Passo 7 (CI/CD)** requer que as mudanças estejam no GitHub.

---

## 🔧 Passo 1: Configuração Inicial

### 1.1 Clonar/Verificar o Repositório

```bash
# Se ainda não clonou, clone o repositório
git clone https://github.com/scgabriell/qa-automation-framework.git
cd qa-automation-framework

# Ou se já está no projeto, atualize as dependências
npm install
```

### 1.2 Verificar Instalação

```bash
# Verificar versão do Node.js
node --version  # Deve ser 18 ou superior

# Verificar se as dependências foram instaladas
npm list --depth=0
```

---

## 🚀 Passo 2: Iniciar a Aplicação

### 2.1 Iniciar o Servidor de Desenvolvimento

```bash
# Terminal 1 - Inicie o servidor
npm run dev
```

**Resultado esperado:**
```
✓ Ready in 2.5s
○ Local:        http://localhost:3000
```

**✅ Checkpoint:** Acesse http://localhost:3000 no navegador e veja a aplicação rodando.

---

## 🎯 Passo 3: Testes E2E com Cypress

### 3.1 Modo Interativo (Recomendado para começar)

**Abra um novo terminal (Terminal 2):**

```bash
# Abrir Cypress em modo interativo
npm run test:e2e
```

**O que acontece:**
1. A janela do Cypress abre
2. Selecione "E2E Testing"
3. Escolha um navegador (Chrome recomendado)
4. Clique em "task-manager.cy.ts" para executar

**✅ Checkpoint:** Você verá os testes sendo executados em tempo real no navegador.

### 3.2 Modo Headless (Para CI/CD)

**No Terminal 2 (com servidor ainda rodando):**

```bash
# Executar todos os testes E2E sem interface gráfica
npm run test:e2e:headless
```

**Resultado esperado:**
```
✓ 9 tests passing (30s)
```

**✅ Checkpoint:** Todos os testes devem passar (9 testes).

### 3.3 Verificar Resultados

```bash
# Os vídeos são salvos em:
cypress/videos/task-manager.cy.ts.mp4

# Screenshots (em caso de falha) em:
cypress/screenshots/
```

---

## 🔌 Passo 4: Testes de API - Node.js Script

### 4.1 Executar Testes de API (Script Customizado)

**No Terminal 2 (servidor deve estar rodando):**

```bash
npm run test:api
```

**Resultado esperado:**
```
🚀 Iniciando testes de API...

🧪 Testando endpoint /api/health (GET)...
✅ Teste GET /api/health: PASSOU
   Resposta: { status: 'ok', ... }

🧪 Testando endpoint /api/health (POST)...
✅ Teste POST /api/health: PASSOU
   Resposta: { status: 'success', ... }

==================================================
📊 Resultados: 2/2 testes passaram
==================================================
✅ Todos os testes de API passaram!
```

**✅ Checkpoint:** Deve mostrar 2/2 testes passando.

---

## 📮 Passo 5: Testes de API - Postman/Newman

### 5.1 Verificar Instalação do Newman

```bash
# Verificar se Newman está instalado
npx newman --version
# Deve mostrar: 4.6.1 (ou versão similar)
```

### 5.2 Executar Coleção Postman

**No Terminal 2 (servidor deve estar rodando):**

```bash
# Executar testes Postman
npm run test:api:postman
```

**Resultado esperado:**
```
newman

Health API - Task Manager

Health Check
  GET Health Check
    ✓ Status code is 200
    ✓ Response has correct structure
    ✓ Status is 'ok'
    ✓ Response time is less than 500ms
    ✓ Content-Type is application/json
  
  POST Health Check - Valid Data
    ✓ Status code is 200
    ✓ Response has correct structure
    ✓ Status is 'success'
    ✓ Data matches request body
  
  POST Health Check - Invalid JSON
    ✓ Status code is 400
    ✓ Error message is present

┌─────────────────────────┬──────────┬──────────┐
│                         │ executed │   failed │
├─────────────────────────┼──────────┼──────────┤
│              iterations │        1 │        0 │
│                requests │        3 │        0 │
│            test-scripts │        3 │        0 │
│      prerequest-scripts │        0 │        0 │
│              assertions │       11 │        0 │
├─────────────────────────┴──────────┴──────────┤
│ total run duration: 250ms                     │
│ total data received: 450B                     │
│ average response time: 83ms                   │
└───────────────────────────────────────────────┘
```

**✅ Checkpoint:** Deve mostrar 11 assertions passando.

### 5.3 Gerar Relatório HTML

```bash
# Gerar relatório HTML detalhado
npm run test:api:postman:report
```

**Resultado esperado:**
- Arquivo criado: `reports/newman-report.html`
- Abra no navegador para ver relatório completo

**Para abrir o relatório:**
```bash
# Windows
start reports/newman-report.html

# Mac
open reports/newman-report.html

# Linux
xdg-open reports/newman-report.html
```

**✅ Checkpoint:** Relatório HTML deve abrir mostrando todos os testes detalhadamente.

---

## 📖 Passo 6: Visualizar Documentação Swagger

### 6.1 Usando Swagger Editor Online

1. **Acesse:** https://editor.swagger.io/
2. **Abra o arquivo:** `docs/api/swagger.yaml`
3. **Copie todo o conteúdo** do arquivo
4. **Cole no editor** Swagger
5. **Visualize** a documentação interativa

**✅ Checkpoint:** Você deve ver a documentação completa da API com:
- Endpoint GET /api/health
- Endpoint POST /api/health
- Schemas de resposta
- Exemplos

### 6.2 Usando VS Code (Alternativa)

1. **Instale a extensão:** "OpenAPI (Swagger) Editor"
2. **Abra:** `docs/api/swagger.yaml`
3. **Use Ctrl+Shift+P** → "OpenAPI: Preview"

**✅ Checkpoint:** Preview da documentação deve abrir ao lado.

---

## 🔄 Passo 7: Testar Pipeline CI/CD (GitHub Actions)

> **⚠️ IMPORTANTE:** Este passo requer que você tenha feito commit e push das mudanças para o GitHub. Se ainda não fez, siga primeiro os passos anteriores para testar localmente.

### 7.1 Verificar Configuração do Pipeline

**Verifique o arquivo:**
```bash
# Ver conteúdo do pipeline
cat .github/workflows/qa-pipeline.yml
```

### 7.2 Fazer Commit e Push (Necessário para CI/CD)

**Se ainda não fez commit das mudanças:**

```bash
# 1. Verificar status
git status

# 2. Adicionar todas as mudanças
git add .

# 3. Fazer commit
git commit -m "feat: adicionar estratégia completa de QA com Postman, Swagger e documentação"

# 4. Fazer push
git push origin main
```

### 7.3 Disparar o Pipeline

```bash
# 1. Adicione as mudanças
git add .

# 2. Faça commit
git commit -m "test: validar pipeline CI/CD"

# 3. Faça push
git push origin main
```

### 7.3 Verificar Execução no GitHub

1. **Acesse:** https://github.com/scgabriell/qa-automation-framework
2. **Clique em:** "Actions" (menu superior)
3. **Selecione o workflow:** "Pipeline de QA - Testes Automatizados"
4. **Aguarde a execução** (pode levar 2-5 minutos)

**✅ Checkpoint:** Você deve ver:
- ✅ Jobs: `cypress-tests` e `api-tests`
- ✅ Ambos devem passar (verde)
- ✅ Artefatos disponíveis para download

### 7.4 Baixar Artefatos

1. **No workflow executado**, role para baixo
2. **Na seção "Artifacts"**, clique em:
   - `cypress-videos` (vídeos dos testes)
   - `postman-report` (relatório Postman)
   - `cypress-screenshots` (se houver falha)

**✅ Checkpoint:** Artefatos devem baixar corretamente.

---

## 🧪 Passo 8: Executar Todos os Testes

### 8.1 Suite Completa de Testes

**No Terminal 2 (servidor deve estar rodando):**

```bash
# Executar todos os testes
npm run test:all
```

**O que acontece:**
1. Executa testes E2E (Cypress)
2. Executa testes de API (Node.js script)
3. Mostra resumo final

**Resultado esperado:**
```
✓ 9 tests passing (Cypress)
✅ Todos os testes de API passaram! (Node.js)
```

**✅ Checkpoint:** Todos os testes devem passar.

---

## 📊 Passo 9: Verificar Relatórios e Métricas

### 9.1 Relatório Cypress

```bash
# Ver vídeos dos testes
ls cypress/videos/
```

**Se houver falha:**
```bash
# Ver screenshots
ls cypress/screenshots/
```

### 9.2 Relatório Postman

```bash
# Abrir relatório HTML
# Windows
start reports/newman-report.html
```

### 9.3 Status no GitHub

- Verifique badges no README (se configurado)
- Acesse Actions para histórico
- Veja artefatos das últimas execuções

---

## 🔍 Passo 10: Testes Manuais Exploratórios

### 10.1 Testar a Aplicação Manualmente

1. **Acesse:** http://localhost:3000
2. **Teste funcionalidades:**
   - ✅ Adicionar tarefa
   - ✅ Marcar como concluída
   - ✅ Excluir tarefa
   - ✅ Tentar adicionar tarefa vazia

### 10.2 Testar API Manualmente

**Com cURL:**

```bash
# GET Health Check
curl http://localhost:3000/api/health

# POST Health Check
curl -X POST http://localhost:3000/api/health \
  -H "Content-Type: application/json" \
  -d '{"test": "data", "timestamp": 1234567890}'
```

**Com Postman:**
1. Importe: `postman/collections/health-api.postman_collection.json`
2. Importe ambiente: `postman/environments/local.postman_environment.json`
3. Execute manualmente cada requisição

---

## 🐛 Passo 11: Simular Falha de Teste

### 11.1 Quebrar um Teste Intencionalmente

**Edite:** `app/api/health/route.ts`

```typescript
// Mude de 'ok' para 'error' temporariamente
return NextResponse.json({
  status: 'error', // Era 'ok'
  // ...
})
```

### 11.2 Executar Testes

```bash
npm run test:api
```

**✅ Checkpoint:** Os testes devem falhar, mostrando o erro.

### 11.3 Verificar no CI/CD

1. Faça commit da mudança
2. Push para o repositório
3. Verifique no GitHub Actions que o pipeline falhou

**Restaure a mudança depois:**
```typescript
status: 'ok', // Voltar ao normal
```

---

## 📝 Checklist Completo

Use este checklist para garantir que tudo está funcionando:

- [ ] **Configuração**
  - [ ] Repositório clonado/atualizado
  - [ ] Dependências instaladas (`npm install`)
  - [ ] Servidor iniciado (`npm run dev`)

- [ ] **Testes E2E (Cypress)**
  - [ ] Testes executados em modo interativo
  - [ ] Testes executados em modo headless
  - [ ] Todos os 9 testes passando

- [ ] **Testes de API (Node.js)**
  - [ ] Script executado com sucesso
  - [ ] 2/2 testes passando

- [ ] **Testes de API (Postman/Newman)**
  - [ ] Coleção executada
  - [ ] 11 assertions passando
  - [ ] Relatório HTML gerado

- [ ] **Documentação Swagger**
  - [ ] Swagger.yaml visualizado
  - [ ] Documentação interativa funcionando

- [ ] **CI/CD**
  - [ ] Pipeline executado no GitHub
  - [ ] Jobs passando
  - [ ] Artefatos disponíveis

- [ ] **Relatórios**
  - [ ] Vídeos Cypress gerados
  - [ ] Relatório Postman disponível
  - [ ] Screenshots (se houver falha)

---

## 🆘 Solução de Problemas Comuns

### Erro: "Invalid IP address: undefined" no Postman/Newman

**Problema:** O Newman não consegue resolver `localhost` no Windows.

**Solução:**
Use `127.0.0.1` ao invés de `localhost` nos arquivos:
- `postman/environments/local.postman_environment.json`
- `postman/collections/health-api.postman_collection.json`

Já está corrigido no projeto, mas se criar novos arquivos, lembre-se disso.

### Erro: "Cannot connect to server"

**Solução:**
```bash
# Certifique-se de que o servidor está rodando
npm run dev
# Deve mostrar: Ready on http://localhost:3000
```

### Erro: "newman: command not found"

**Solução:**
```bash
# Reinstale as dependências
npm install
```

### Erro: "Tests failing"

**Solução:**
1. Verifique se o servidor está rodando
2. Verifique se a porta 3000 está livre
3. Verifique os logs do servidor

### Pipeline falhando no GitHub

**Solução:**
1. Verifique os logs no GitHub Actions
2. Verifique se `pnpm-lock.yaml` está atualizado
3. Verifique se todas as dependências estão no `package.json`

---

## 📚 Próximos Passos

Agora que testou tudo:

1. ✅ Explore os arquivos de teste
2. ✅ Adicione novos testes
3. ✅ Customize os relatórios
4. ✅ Integre com Jira (se necessário)
5. ✅ Adicione mais endpoints de API

---

## 🎯 Resumo Rápido

```bash
# 1. Iniciar servidor
npm run dev

# 2. Em outro terminal - Executar todos os testes
npm run test:all

# 3. Executar Postman com relatório
npm run test:api:postman:report

# 4. Ver relatório
start reports/newman-report.html
```

**🎉 Pronto! Todas as tecnologias foram testadas com sucesso!**

