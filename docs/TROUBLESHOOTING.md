# 🆘 Troubleshooting - Solução de Problemas

## ❌ Erro: Todas as requisições Postman falhando

### Sintomas
```
│                requests │        3 │        3 │  ← 3 falharam
│              assertions │       11 │       11 │  ← 11 falharam
│ total data received: 0B (approx)  ← Sem resposta do servidor
```

### Causa Possível
O Newman não está encontrando/conectando ao servidor. Pode ser:
1. Servidor não está rodando
2. Variável de ambiente não está sendo usada
3. URL incorreta

### ✅ Solução

#### 1. Verificar se o servidor está rodando

```bash
# Verificar se porta 3000 está em uso
netstat -ano | findstr :3000

# OU testar diretamente
curl http://localhost:3000/api/health

# Deve retornar algo como:
# {"status":"ok","timestamp":"...","service":"Task Manager API","version":"1.0.0"}
```

**Se não funcionar:**
```bash
# Inicie o servidor
npm run dev
```

#### 2. Verificar variável de ambiente no comando

O comando deve especificar o ambiente explicitamente:

```bash
# ✅ CORRETO - com ambiente
npx newman run postman/collections/health-api.postman_collection.json \
  -e postman/environments/local.postman_environment.json

# ❌ ERRADO - sem ambiente (variável base_url não será resolvida)
npx newman run postman/collections/health-api.postman_collection.json
```

#### 3. Usar URL fixa temporariamente (para debug)

Edite `postman/collections/health-api.postman_collection.json` e substitua:
```json
"raw": "{{base_url}}/api/health"
```

Por:
```json
"raw": "http://localhost:3000/api/health"
```

**Depois teste:**
```bash
npm run test:api:postman
```

Se funcionar com URL fixa, o problema é a variável de ambiente.

#### 4. Verificar conteúdo do arquivo de ambiente

Abra `postman/environments/local.postman_environment.json` e verifique:

```json
{
  "values": [
    {
      "key": "base_url",
      "value": "http://localhost:3000",  // ← Deve ser exatamente isso
      "type": "default",
      "enabled": true  // ← Deve estar true
    }
  ]
}
```

---

## ❌ Erro: "ECONNREFUSED" ou "Cannot connect"

### Sintomas
```
Error: connect ECONNREFUSED 127.0.0.1:3000
```

### ✅ Solução

1. **Inicie o servidor:**
   ```bash
   npm run dev
   ```

2. **Aguarde a mensagem:**
   ```
   ✓ Ready in 2.5s
   ○ Local:        http://localhost:3000
   ```

3. **Tente novamente:**
   ```bash
   npm run test:api:postman
   ```

---

## ❌ Erro: "Collection not found"

### Sintomas
```
Error: ENOENT: no such file or directory
```

### ✅ Solução

1. **Verifique se está na pasta correta:**
   ```bash
   pwd  # Deve mostrar: .../projeto-qa-pratico
   ```

2. **Verifique se os arquivos existem:**
   ```bash
   ls postman/collections/
   ls postman/environments/
   ```

3. **Use caminho completo:**
   ```bash
   npx newman run ./postman/collections/health-api.postman_collection.json \
     -e ./postman/environments/local.postman_environment.json
   ```

---

## ❌ Erro: "Variable not found: base_url"

### Sintomas
```
Variable not found: base_url
```

### ✅ Solução

1. **Certifique-se de usar o parâmetro `-e`:**
   ```bash
   # ✅ Correto
   npm run test:api:postman
   
   # Que executa:
   newman run postman/collections/health-api.postman_collection.json \
     -e postman/environments/local.postman_environment.json
   ```

2. **Verifique o package.json:**
   ```json
   "test:api:postman": "newman run postman/collections/health-api.postman_collection.json -e postman/environments/local.postman_environment.json"
   ```

---

## ❌ Erro: Testes Cypress falhando

### Sintomas
```
Error: Timed out waiting for server to start
```

### ✅ Solução

1. **Inicie o servidor manualmente:**
   ```bash
   npm run dev
   ```

2. **Use o modo manual (sem auto-start):**
   ```bash
   # Modifique cypress.config.ts para não tentar iniciar o servidor
   # Ou use:
   npx cypress run --config baseUrl=http://localhost:3000
   ```

---

## ❌ Erro: "pnpm-lock.yaml is not up to date"

### Sintomas
```
ERR_PNPM_OUTDATED_LOCKFILE Cannot install with "frozen-lockfile"
```

### ✅ Solução

```bash
# Atualizar o lockfile
pnpm install

# Fazer commit
git add pnpm-lock.yaml
git commit -m "fix: atualizar pnpm-lock.yaml"
```

---

## 🔍 Diagnóstico Rápido

### Checklist de Verificação

```bash
# 1. Servidor rodando?
curl http://localhost:3000/api/health

# 2. Porta 3000 livre?
netstat -ano | findstr :3000

# 3. Dependências instaladas?
npm list newman

# 4. Arquivos Postman existem?
ls postman/collections/
ls postman/environments/

# 5. Variável de ambiente correta?
cat postman/environments/local.postman_environment.json | grep base_url
```

---

## 📝 Comandos de Debug

### Testar servidor manualmente

```bash
# GET request
curl http://localhost:3000/api/health

# POST request
curl -X POST http://localhost:3000/api/health \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

### Testar Newman com mais detalhes

```bash
# Com verbose
npx newman run postman/collections/health-api.postman_collection.json \
  -e postman/environments/local.postman_environment.json \
  --verbose

# Com reporter CLI detalhado
npx newman run postman/collections/health-api.postman_collection.json \
  -e postman/environments/local.postman_environment.json \
  -r cli
```

### Ver logs do servidor

No terminal onde `npm run dev` está rodando, veja os logs:
```
GET /api/health 200 in 5ms
POST /api/health 200 in 3ms
```

Se não aparecer, as requisições não estão chegando.

---

## 💡 Dicas Gerais

1. **Sempre inicie o servidor antes dos testes:**
   ```bash
   npm run dev  # Terminal 1
   ```

2. **Use outro terminal para testes:**
   ```bash
   npm run test:api:postman  # Terminal 2
   ```

3. **Teste manualmente primeiro:**
   ```bash
   curl http://localhost:3000/api/health
   ```

4. **Verifique os logs:**
   - Logs do servidor (terminal 1)
   - Saída do Newman (terminal 2)

---

## 🆘 Ainda com problemas?

1. Verifique se Node.js está na versão correta:
   ```bash
   node --version  # Deve ser 18+
   ```

2. Reinstale as dependências:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Verifique se há processos usando a porta 3000:
   ```bash
   netstat -ano | findstr :3000
   # Se houver, mate o processo ou use outra porta
   ```

4. Teste com URL absoluta primeiro para isolar o problema.

