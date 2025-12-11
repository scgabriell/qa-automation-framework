# 📚 Documentação de API

Documentação da API usando OpenAPI/Swagger.

## 📄 Swagger/OpenAPI

A especificação da API está disponível em: `docs/api/swagger.yaml`

### Visualizar Documentação

#### Opção 1: Swagger Editor Online
1. Acesse [Swagger Editor](https://editor.swagger.io/)
2. Cole o conteúdo de `swagger.yaml`
3. Visualize a documentação interativa

#### Opção 2: Swagger UI Local
```bash
# Instalar Swagger UI globalmente
npm install -g swagger-ui-serve

# Executar
swagger-ui-serve docs/api/swagger.yaml
```

#### Opção 3: VS Code Extension
Instale a extensão "OpenAPI (Swagger) Editor" no VS Code para visualizar.

## 🔄 Endpoints Documentados

### Health Check

#### GET /api/health
Retorna o status de saúde da API.

**Resposta:**
```json
{
  "status": "ok",
  "timestamp": "2025-01-27T12:00:00.000Z",
  "service": "Task Manager API",
  "version": "1.0.0"
}
```

#### POST /api/health
Recebe dados e retorna confirmação.

**Request:**
```json
{
  "test": "data",
  "timestamp": 1640620800000
}
```

**Resposta:**
```json
{
  "status": "success",
  "message": "Request received",
  "data": {
    "test": "data",
    "timestamp": 1640620800000
  }
}
```

## 🛠️ Manutenção

Para atualizar a documentação:
1. Edite `docs/api/swagger.yaml`
2. Siga o padrão OpenAPI 3.0.3
3. Valide a sintaxe no [Swagger Editor](https://editor.swagger.io/)
4. Commit as mudanças

## 📖 Recursos

- [OpenAPI Specification](https://swagger.io/specification/)
- [Swagger Editor](https://editor.swagger.io/)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)

