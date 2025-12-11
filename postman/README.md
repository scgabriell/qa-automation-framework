# 📮 Postman Collections

Este diretório contém as coleções Postman para testes de API automatizados com Newman.

## 📁 Estrutura

```
postman/
├── collections/
│   └── health-api.postman_collection.json  # Coleção de testes da API
└── environments/
    └── local.postman_environment.json      # Ambiente local
```

## 🚀 Como Usar

### Localmente com Postman

1. Abra o Postman
2. Importe a coleção: `collections/health-api.postman_collection.json`
3. Importe o ambiente: `environments/local.postman_environment.json`
4. Selecione o ambiente "Local"
5. Execute os testes manualmente

### Automatizado com Newman

#### Pré-requisito
Certifique-se de que o servidor está rodando:
```bash
npm run dev
```

#### Executar testes
```bash
# Testes básicos
npm run test:api:postman

# Testes com relatório HTML
npm run test:api:postman:report
```

#### Comando direto
```bash
npx newman run postman/collections/health-api.postman_collection.json \
  -e postman/environments/local.postman_environment.json \
  -r html \
  --reporter-html-export reports/newman-report.html
```

## 📊 Relatórios

Os relatórios HTML são gerados em `reports/newman-report.html` e incluem:
- Resumo dos testes executados
- Resultados detalhados de cada requisição
- Tempo de execução
- Assertions passadas/falhadas

## 🔧 Configuração de Ambientes

### Variáveis de Ambiente

| Variável | Local | Produção |
|----------|-------|----------|
| `base_url` | http://127.0.0.1:3000 | https://api.example.com |

> **⚠️ Nota Windows:** No Windows, use `127.0.0.1` ao invés de `localhost` pois o Newman pode ter problemas para resolver o hostname.

### Adicionar Novo Ambiente

1. Crie um arquivo em `environments/`
2. Defina as variáveis necessárias
3. Execute com: `newman run collection.json -e environments/novo-ambiente.json`

## ✅ Testes Incluídos

### Health API Collection

- ✅ GET /api/health - Health Check
  - Valida status 200
  - Valida estrutura da resposta
  - Valida tempo de resposta < 500ms
  - Valida Content-Type

- ✅ POST /api/health - Valid Data
  - Valida recebimento de dados
  - Valida resposta de sucesso
  - Valida que dados foram retornados

- ✅ POST /api/health - Invalid JSON
  - Valida tratamento de erro 400
  - Valida mensagem de erro

## 🔄 CI/CD

Os testes Postman são executados automaticamente no pipeline CI/CD:
- Executados após o servidor iniciar
- Relatórios salvos como artefatos
- Falhas bloqueiam o merge (se configurado)

## 📝 Adicionando Novos Testes

1. Abra a coleção no Postman
2. Crie a nova requisição
3. Adicione testes na aba "Tests"
4. Exporte a coleção atualizada
5. Substitua o arquivo JSON em `collections/`

### Exemplo de Teste Postman

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

pm.test("Response has required fields", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('status');
});
```

## 🔗 Links Úteis

- [Documentação Newman](https://github.com/postmanlabs/newman)
- [Scripts de Teste Postman](https://learning.postman.com/docs/writing-scripts/test-scripts/)
- [Variáveis de Ambiente](https://learning.postman.com/docs/sending-requests/variables/)

