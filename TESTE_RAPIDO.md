# ⚡ Teste Rápido - 5 Minutos

Guia rápido para testar todas as tecnologias em poucos minutos.

## 🚀 Passo a Passo Rápido

### 1️⃣ Preparar Ambiente

```bash
# Instalar dependências (se necessário)
npm install

# Iniciar servidor (Terminal 1)
npm run dev
```

✅ **Check:** Acesse http://localhost:3000 e veja a aplicação rodando

---

### 2️⃣ Testar Cypress (E2E)

**Abrir novo terminal (Terminal 2):**

```bash
# Modo interativo (ver testes rodando)
npm run test:e2e

# OU modo headless (mais rápido)
npm run test:e2e:headless
```

✅ **Resultado esperado:** `✓ 9 tests passing`

---

### 3️⃣ Testar API - Script Node.js

**No Terminal 2:**

```bash
npm run test:api
```

✅ **Resultado esperado:** `✅ Todos os testes de API passaram!`

---

### 4️⃣ Testar Postman/Newman

**No Terminal 2:**

```bash
# Executar testes Postman
npm run test:api:postman

# Gerar relatório HTML
npm run test:api:postman:report

# Abrir relatório (Windows)
start reports/newman-report.html
```

✅ **Resultado esperado:** 11 assertions passando + relatório HTML gerado

---

### 5️⃣ Testar Pipeline CI/CD (Opcional - requer push)

> **⚠️ Nota:** Este passo só funciona se você fez push das mudanças para o GitHub.

```bash
# Verificar se há mudanças não commitadas
git status

# Se houver mudanças, fazer commit e push
git add .
git commit -m "test: validar tecnologias"
git push origin main
```

✅ **Check:** Acesse GitHub → Actions → Ver pipeline executando

---

## ✅ Checklist Rápido

- [ ] Servidor rodando em http://localhost:3000
- [ ] Testes Cypress passando (9 testes)
- [ ] Testes API Node.js passando (2 testes)
- [ ] Testes Postman passando (11 assertions)
- [ ] Relatório Postman gerado
- [ ] Pipeline CI/CD executando no GitHub

---

## 🎯 Comando Único (Todos os Testes)

**Com servidor rodando:**

```bash
npm run test:all
```

Isso executa:
- ✅ Testes E2E (Cypress)
- ✅ Testes API (Node.js script)

Para Postman, execute separadamente:
```bash
npm run test:api:postman
```

---

## 📖 Documentação Completa

Para guia detalhado: **[docs/GUIA_TESTES.md](./docs/GUIA_TESTES.md)**

---

## 🆘 Problemas?

1. **Servidor não inicia?**
   ```bash
   # Verificar se porta 3000 está livre
   npm run dev
   ```

2. **Testes falhando?**
   - Verifique se servidor está rodando
   - Verifique logs do servidor

3. **Newman não encontrado?**
   ```bash
   npm install
   ```

---

**🎉 Pronto! Todas as tecnologias testadas em menos de 5 minutos!**

