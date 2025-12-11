# 📝 Ordem Recomendada para Testar

## 🎯 Ordem Lógica de Execução

Siga esta ordem para testar tudo de forma eficiente:

## ✅ Fase 1: Testes Locais (NÃO precisa de commit/push)

Teste tudo localmente primeiro antes de fazer push:

### 1. Configuração Inicial
```bash
npm install          # Instalar dependências
npm run dev          # Iniciar servidor
```

### 2. Testes E2E (Cypress)
```bash
# Terminal 2
npm run test:e2e:headless
```
✅ **Resultado:** 9 testes devem passar

### 3. Testes de API (Node.js)
```bash
npm run test:api
```
✅ **Resultado:** 2/2 testes devem passar

### 4. Testes Postman/Newman
```bash
npm run test:api:postman
npm run test:api:postman:report
```
✅ **Resultado:** 11 assertions devem passar + relatório HTML

### 5. Verificar Documentação
- Abrir `docs/api/swagger.yaml` no Swagger Editor
- Verificar documentação em `docs/`

---

## 🚀 Fase 2: Commit e Push (Apenas quando tudo local passar)

**Apenas após todos os testes locais passarem:**

### 6. Verificar Mudanças
```bash
git status
```

### 7. Fazer Commit
```bash
git add .
git commit -m "feat: implementar estratégia completa de QA"
```

### 8. Fazer Push
```bash
git push origin main
```

---

## ☁️ Fase 3: Testes no CI/CD (Requer push)

### 9. Verificar Pipeline no GitHub
1. Acesse: https://github.com/scgabriell/qa-automation-framework
2. Clique em "Actions"
3. Veja o pipeline executando
4. Verifique artefatos

✅ **Resultado:** Jobs devem passar (verde)

---

## 📊 Resumo Visual

```
┌─────────────────────────────────────────┐
│  FASE 1: Testes Locais                 │
│  (NÃO precisa commit/push)             │
│                                         │
│  1. npm install                         │
│  2. npm run dev                         │
│  3. npm run test:e2e:headless          │
│  4. npm run test:api                   │
│  5. npm run test:api:postman           │
│  6. Verificar documentação             │
│                                         │
│  ✅ Se tudo passar → FASE 2            │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  FASE 2: Commit e Push                 │
│  (Fazer quando tudo local passar)      │
│                                         │
│  7. git add .                          │
│  8. git commit -m "..."                │
│  9. git push origin main               │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  FASE 3: CI/CD no GitHub               │
│  (Verificar pipeline)                  │
│                                         │
│  10. Acessar GitHub Actions            │
│  11. Ver pipeline executando           │
│  12. Verificar artefatos               │
└─────────────────────────────────────────┘
```

---

## ❓ FAQ

### Preciso fazer commit antes de testar localmente?
**Não!** Todos os testes locais (Cypress, Postman, scripts) funcionam sem commit/push.

### Quando fazer commit?
**Apenas quando:**
- ✅ Todos os testes locais passarem
- ✅ Você quiser testar o pipeline CI/CD
- ✅ Você quiser salvar o trabalho

### O que acontece se fizer push antes de testar localmente?
Nada de errado, mas é melhor testar localmente primeiro para:
- Detectar erros mais rápido
- Não poluir o histórico do Git com commits de correção
- Economizar tempo no CI/CD

---

## 🎯 Checklist de Ordem

**Antes de fazer commit/push:**
- [ ] Todos os testes locais passando
- [ ] Relatórios gerados corretamente
- [ ] Documentação verificada
- [ ] Sem erros no console

**Depois do push:**
- [ ] Pipeline CI/CD executando
- [ ] Jobs passando no GitHub Actions
- [ ] Artefatos disponíveis

---

**💡 Dica:** Use `npm run test:all` para executar todos os testes locais de uma vez e só depois fazer commit/push!

